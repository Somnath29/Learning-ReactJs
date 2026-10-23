// import StudentCard from "./StudentCard";
function StudentList({ students, onSelectStudents }) {
  return (
    <div>
      <h2>Students</h2>

      {students.map((student) => (
        <button
          key={student.id}
          onClick={() => onSelectStudents(student)}
        >
          {student.name}
        </button>
      ))}
    </div>
  );
}

export default StudentList;