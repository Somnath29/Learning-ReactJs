// function StudentCart() {
//   return (
//     <div>
//       <h2>Somnath</h2>
//       <p>CSE</p>
//       <p>Roll No. 12401921</p>
//     </div>
//   );
// }

// export default StudentCart;



// function StudentCart(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <p>{props.course}</p>
//       <p>Roll No. {props.rollNo}</p>
//     </div>
//   );
// }


// export default StudentCart;






import Card from "./Card";
import StudentHeader from "./StudentHeader";
import Button from "./Button";

function StudentCard({ name, course, rollNo, isActive }) {
  let status;

  if (isActive === true) {
    status = <p>Active student</p>;
  } else {
    status = <p>Inactive Student</p>;
  }

  return (
    <Card>
      <StudentHeader name={name} />

      <p>{course}</p>

      <p>Roll No. {rollNo}</p>

      {status}

      <Button>View Profile</Button>
    </Card>
  );

  
}

export default StudentCard;