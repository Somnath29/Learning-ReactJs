// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App




// my first code :-

// function App() {
//   return (
//     <div>
//       <h1>My Introduction :)</h1>
//       <h2>Somnath Bhaskar</h2>
//       <h2>I am a Student</h2>
//       <p>My first React application</p>
//     </div>
//   )
// }

// export default App;







// function App() {
//   const name = "Somnath";
//   const course = "BTech";
//   const sem = 5;

//   return (
//     <div>
//       <h1>My Introduction :)</h1>
//       <h2>{name}</h2>
//       <h2>Course: {course}</h2>
//       <p>Sem: {sem}</p>
//     </div>
//   );
// }

// export default App;









// calculator 


// function App() {

//   let a = 10;
//   let b = 5;

//   function add() {
//     return a + b;
//   }

//   function subtract() {
//     return a - b;
//   }

//   function multiply() {
//     return a * b;
//   }

//   function divide() {
//     return a / b;
//   }

//   return (
//     <>
//     <div>
//       <h1>Addition: {add()}</h1>
//       <h1>Subtraction: {subtract()}</h1>
//       <h1>Multiplication: {multiply()}</h1>
//       <h1>Division: {divide()}</h1>
//     </div>
//     <div></div>

//     </>
//   );
// }







// import { useState } from "react";

// // import StudentCard from "./components/StudentCard";
// import StudentDetails from "./components/StudentDetails";
// import StudentList from "./components/StudentList";

// function App() {

//   const [selectedStudent, setSelectedStudent] = useState(null);

//   const students = [
//     {
//       id: 1,
//       name: "Somnath",
//       course: "CSE",
//       rollNo: "12401921"
//     },
//     {
//       id: 2,
//       name: "Rahul",
//       course: "ECE",
//       rollNo: "12401922"
//     },
//     {
//       id: 3,
//       name: "Priya",
//       course: "IT",
//       rollNo: "12401923"
//     }
//   ];

//   return (
//     <div>
//       <h1>Student Dashboard</h1>

//       <StudentList
//         students={students}
//         onSelectStudents={setSelectedStudent}
//       />

//       <StudentDetails student={selectedStudent} />
//     </div>
//   );
// }

// export default App;













// import { useState } from "react";

// import StudentDetails from "./components/StudentDetails";
// import StudentList from "./components/StudentList";

// function App() {
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   const students = [
//     {
//       id: 1,
//       name: "Somnath",
//       course: "CSE",
//       rollNo: "12401921",
//     },
//     {
//       id: 2,
//       name: "Rahul",
//       course: "ECE",
//       rollNo: "12401922",
//     },
//     {
//       id: 3,
//       name: "Priya",
//       course: "IT",
//       rollNo: "12401923",
//     },
//   ];

//   return (
//      <div>
//       <div className="title-container">
//         <h1 className="title">Student Dashboard</h1>
//       </div>

//       <StudentList
//         students={students}
//         onSelectStudents={setSelectedStudent}
//       />

//       <StudentDetails student={selectedStudent} />
//     </div>
//   );
// }

// export default App;






// inline css




// import { useState } from "react";

// import StudentDetails from "./components/StudentDetails";
// import StudentList from "./components/StudentList";

// function App() {
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   const students = [
//     {
//       id: 1,
//       name: "Somnath",
//       course: "CSE",
//       rollNo: "12401921",
//     },
//     {
//       id: 2,
//       name: "Rahul",
//       course: "ECE",
//       rollNo: "12401922",
//     },
//     {
//       id: 3,
//       name: "Priya",
//       course: "IT",
//       rollNo: "12401923",
//     },
//   ];

//   return (
//     <div>
//       <div
//         style={{
//           backgroundColor: "blue",
//           padding: "20px 40px",
//           marginBottom: "30px",
//           borderRadius: "12px",
//           textAlign: "center",
//         }}
//       >
//         <h1
//           style={{
//             color: "yellow",
//             fontSize: "50px",
//             fontWeight: "bold",
//             margin: 0,
//           }}
//         >
//           Student Dashboard
//         </h1>
//       </div>

//       <StudentList
//         students={students}
//         onSelectStudents={setSelectedStudent}
//       />

//       <StudentDetails student={selectedStudent} />
//     </div>
//   );
// }

// export default App;
















// import Card2 from "./components/Card2";

// function App() {
//     return (
//         <div>
//             <Card2
//                 title="React Card"
//                 image="https://images.unsplash.com/photo-1633356122544-f134324a6cee"
//                 desc="This is a card component created using React props."
//             />

//             <Card2
//                 title="JavaScript"
//                 image="https://images.unsplash.com/photo-1627398242454-45a1465c2479"
//                 desc="JavaScript is used to make web pages interactive."
//             />
//         </div>
//     );
// }

// export default App;






// import "./App"
// function App(){
//   return(
//     <>
//     <button className="btn">Click Me</button>
//       </>
//   )
// }




















// function TeamMember({ name, role, initials, color }) {
//   return (
//     <div className="text-center">
//       {/* Circle */}
//       <div
//         className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full ${color} text-2xl font-bold text-white shadow-md`}
//       >
//         {initials}
//       </div>

//       {/* Name */}
//       <h2 className="mt-4 text-lg font-bold text-gray-800">
//         {name}
//       </h2>

//       {/* Role */}
//       <p className="mt-1 text-sm text-gray-500">
//         {role}
//       </p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-50 px-6 py-16">

//       {/* Heading */}
//       <div className="mb-12 text-center">
//         <p className="font-semibold uppercase tracking-widest text-blue-600">
//           Our Team
//         </p>

//         <h1 className="mt-2 text-4xl font-bold text-gray-900">
//           Meet the Team Behind It All
//         </h1>

//         <p className="mx-auto mt-3 max-w-xl text-gray-500">
//           Meet the people who work together to bring our ideas to life.
//         </p>
//       </div>

//       {/* Team - One Line */}
//       <div className="mx-auto flex max-w-5xl items-start justify-between">

//         <TeamMember
//           name="Somnath Bhaskar"
//           role="Full Stack Developer"
//           initials="SB"
//           color="bg-blue-600"
//         />

//         <TeamMember
//           name="Rahul Sharma"
//           role="Frontend Developer"
//           initials="RS"
//           color="bg-purple-600"
//         />

//         <TeamMember
//           name="Aman Kumar"
//           role="Backend Developer"
//           initials="AK"
//           color="bg-green-600"
//         />

//         <TeamMember
//           name="Priya Singh"
//           role="UI/UX Designer"
//           initials="PS"
//           color="bg-pink-600"
//         />

//       </div>
//     </div>
//   );
// }

// export default App;








// import LatestArticles from "./components/LatestArticles";

// function App() {
//   return (
//     <div className="min-h-screen bg-white">
//       <LatestArticles />
//     </div>
//   );
// }

// export default App;
















// function App() {

//   function handleClick() {
//     alert("Button clicked!");
//   }

//   function handleMouseOver() {
//     alert("Para is clicked !!!");
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>
//         Click Me
//       </button>

//       <p onMouseOver={handleMouseOver}>
//         I am para
//       </p>
//     </div>
//   );
// }

// export default App;











// import Counter from "./components/Counter";

// function App() {
//     return (
//         <div>
//             <Counter />
//         </div>
//     );
// }

// export default App;



// counter with css

// import Counter from "./components/Counter";

// function App() {
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <Counter />
//         </div>
//     );
// }


// export default App;







// calculator app.jsx

// import Calculator from "./components/Calculator";

// function App() {
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <Calculator />
//         </div>
//     );
// }

// export default App;





// import { useState } from "react";


// function App() {
//     const [counter, setCounter] = useState(0);
//     const [counterHeading, setCounterHeading] = useState("Counter heading");

//     function handleInc() {
//         setCounter(counter + 1);
//     }

//     function reset(){
//         setCounter(0);
//         setCounterHeading('Somnath')
//     }

   

//     console.log("Rendering");

//      function undo(){
//         setTimeout(reset, 5000);
//     }

//     function handleTripleInc() {
//         setCounter((counter) => counter+1);
//         setCounter((counter) => counter+1);
//         setCounter((counter) => counter+1);
//     }

//     return (
//         <div className="container">
//             <h3>{counterHeading}</h3>
//             <div>{counter}</div>

//             <div>
//                 <button onClick={handleInc}>+</button><br/>
//                 <button onClick={handleTripleInc}>+++</button>
//             </div>

//             <div>
//                 <button onClick={reset}>RESET</button>
//                 <button onClick={undo}>UNDO IN 5 SEC</button>
//             </div>
//         </div>
//     );
// }

// export default App;











// WITHOUT MEMO


// 1. Without memo
// - When the parent (App) re-renders, the child (Child) also re-renders.
// - Clicking Increment updates the parent's state using setCount().
// - Both Parent rendered and child rendered appear in the console.
// - React renders the child again even though its output hasn't changed.


// code:-

// import { useState } from "react";

// function Child() {
//     console.log("child rendered");

//     return <h3>I am the child component</h3>;
// }

// function App() {
//     const [count, setCount] = useState(0);

//     console.log("Parent rendered");

//     return (
//         <div>
//             <h1>Re-render</h1>
//             <h2>Count: {count}</h2>

//             <button onClick={() => setCount(count + 1)}>
//                 Increment
//             </button>

//             <Child />
//         </div>
//     );
// }

// export default App;






// WITH MEMO

// 2. With memo
// - memo() prevents unnecessary child re-renders when its props remain unchanged.
// - Clicking Increment re-renders the parent (App).
// - The child (Child) usually does not re-render because its props haven't changed.
// - Only Parent rendered appears in the console after the click.





// code:-

// import { useState , memo} from "react";

// const Child = memo(function Child() {
//     console.log("child rendered");

//     return <h3>I am the child component</h3>;
// });

// function App() {
//     const [count, setCount] = useState(0);

//     console.log("Parent rendered");

//     return (
//         <div>
//             <h1>Re - Render</h1>
//             <h2>Count: {count}</h2>

//             <button onClick={() => setCount(count + 1)}>
//                 Increment
//             </button>

//             <Child />
//         </div>
//     );
// }

// export default App;













// import { useState } from "react";

// function App() {
//     const [marks, setMarks] = useState(0);
//     const totalMarks = 30;
//     const percentage = (marks / totalMarks) * 100;

//     return (
//         <div>
//             <h1>Derived State</h1>

//             <label>
//                 Enter Marks:
//                 <input
//                     type="number"
//                     min="0"
//                     max={totalMarks}
//                     value={marks}
//                     onChange={(event) => {
//                         const value = Number(event.target.value);
//                         if (value >= 0 && value <= totalMarks) {
//                             setMarks(value);
//                         }
//                     }}
//                 />
//             </label>

//             <h2>Marks: {marks} / {totalMarks}</h2>
//             <h2>Percentage: {percentage}%</h2>
//         </div>
//     );
// }

// export default App;















// Topic: useEffect() – 3 Variations in React
// Variation

// Syntax

// Behaviour

// 1. Without Dependency Array

// useEffect(() => {})

// Runs after every render.

// 2. Empty Dependency Array

// useEffect(() => {}, [])

// Runs only on the initial mount (once in normal production behavior).

// 3. With Dependency Array

// useEffect(() => {}, [count, total])

// Runs on the initial mount and whenever count or total changes.

// Quick example
// Variation 1: Any state update triggers a render, so the effect runs again.

// Variation 2: Clicking buttons updates the UI, but the effect does not run again.

// Variation 3: The effect runs again when a value in the dependency array changes.

// Remember: No array = Every render | [] = Initial mount | [dependencies] = When dependencies change (and on mount).





//  codes:-


//  Variation 1: useEffect runs after every render.

// import { useState, useEffect } from "react";

// function App() {
//     const [count, setCount] = useState(0);

//     // Variation 1: Runs after every render
//     useEffect(() => {
//         alert("I will run after every render");
//     });

//     function handleClick() {
//         setCount(count + 1);
//     }

//     return (
//         <div>
//             <button onClick={handleClick}>
//                 CLICK ME!!
//             </button>

//             <h1>Count: {count}</h1>
//             Hello
//         </div>
//     );
// }

// export default App;


















//  Variation 2: that runs only on 1st render

// import { useState, useEffect } from "react";

// function App() {
//     const [count, setCount] = useState(0);

//     // variation 2: that runs only on 1st render

//     useEffect(() => {
//         alert("I will run only on the first render");
  
//     },[]);

//     function handleClick(){
//         setCount(count+1)
//     }
//     return (
//         <div>
//             <button onClick={handleClick}>
//                 CLICK ME!!
//             </button>

//             <h1>Count: {count}</h1>
//             Hello
//         </div>
//     );
// }

// export default App;













// variation 3
// Variation 3: useEffect runs when count changes.



// import { useState, useEffect } from "react";

// function App() {
//     const [count, setCount] = useState(0);
//     const [total, setTotal] = useState(0);

//     // Variation 3: Runs on first render and whenever count changes
//     useEffect(() => {
//         alert(" I will run everytime when count / total is updated ");
//     }, [count , total]);



//     function handleClick() {
//         setCount(count + 1);
//     }

//     function handleTotal() {
//         setTotal(total + 1);
//     }

//     return (
//         <div>
//             <button onClick={handleClick}>
//                 Update Count
//             </button>
//             <br></br>

//             <h1>Count is : {count}</h1>

//             <button onClick={handleTotal}>
//                 Update Total
//             </button>
//             <br></br>

//             <h1>Total: {total}</h1>

//             Hello
//         </div>
//     );
// }

// export default App;



// Your useEffect dependency array contains [count, total], so the effect runs:
// 1. On the initial render — when the component mounts.
// 2. When count changes — after clicking Update Count.
// 3. When total changes — after clicking Update Total.











// variation 4: clean up function 


// import { useState, useEffect } from "react";

// function App() {
//     const [count, setCount] = useState(0);
//     const [total, setTotal] = useState(0);

//     // Variation 4: Cleanup function
//     useEffect(() => {
//         alert("Count is updated"); //first - Side effect

//         return () => {
//             alert("Count is unmounted"); // second -  Cleanup function
//         };
//     }, [count, total]);  // third - Dependency list

//     function handleClick() {
//         setCount(count + 1);
//     }

//     function handleTotal() {
//         setTotal(total + 1);
//     }

//     return (
//         <div>
//             <button onClick={handleClick}>
//                 Update Count
//             </button>
//             <br />

//             <h1>Count is: {count}</h1>

//             <button onClick={handleTotal}>
//                 Update Total
//             </button>
//             <br />

//             <h1>Total: {total}</h1>

//             Hello
//         </div>
//     );
// }

// export default App;














// import { createContext, useState } from "react";

// import ChildA from "./components/ChildA";
// const UserContext = createContext();

// function App(){
//     const[user,setUser] = useState({name: "Vishal"});
//     return(
//         <>
//         <UserContext.Provider value = {user}
//         >
//             <ChildA/>
//         </UserContext.Provider>
//         </>
//     )
// }

// export default App;
// export {UserContext};






// USE MEMO


// code without usememo


// import {useState} from "react";
// function App(){
//     const[count , setCount] = useState(0);
//     const[input , setInput] = useState(0);
//     function expensiveTask(num) {
//         console.log("Inside Expensive task");

//         for (let i = 0; i <= 1000000000; i++) {
//             // Simulating an expensive task
//         }

//         return Number(num) + 2;
//     }


//     let doubleValue = expensiveTask(input);
//     return(
//         <div>
//             <button onClick = {()=> setCount(count+1)}>
//                 Increase
//             </button>
//             <div>
//                 Count:{count}
//             </div>
//             <input
//             type = "number"
//             placeholder="enter number"
//             value = {input}
//             onChange={(e)=>setInput(e.target.value)}
//             ></input>
//             <div>
//                 Double :{doubleValue}
//             </div>
//         </div>
//     )
// }



// export default App; 





// 1\. `useState` – Manages two states: `count` for the button counter and `input` for the number entered by the user.

// 2\. `expensiveTask(num)` – Runs a loop one billion times to simulate an expensive calculation and returns `num + 2`.

// 3\. Increase Button – Increments `count` by 1 whenever the user clicks the button.

// 4\. Input Field – Accepts a number from the user and updates the `input` state using `onChange`.

// 5\. `doubleValue` – Stores and displays the result of `expensiveTask(input)`. The function executes again whenever the component re-renders, even if only `count` changes.






// Code with use memo 



// import { useState, useMemo } from "react";

// function App() {
//     const [count, setCount] = useState(0);
//     const [input, setInput] = useState(0);

//     function expensiveTask(num) {
//         console.log("Inside Expensive task");

//         for (let i = 0; i <= 1000000000; i++) {
//             // Simulating an expensive task
//         }

//         return Number(num) + 2;
//     }

//     const doubleValue = useMemo(() => {
//         return expensiveTask(input);
//     }, [input]);

//     return (
//         <div>
//             <button onClick={() => setCount(count + 1)}>
//                 Increase
//             </button>

//             <div>Count: {count}</div>

//             <input
//                 type="number"
//                 placeholder="Enter number"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//             />

//             <div>Double: {doubleValue}</div>
//         </div>
//     );
// }

// export default App;





// 2 TASKS :-

// Digital Clock

// import { useState, useEffect } from "react";

// function App() {
//     const [time, setTime] = useState(new Date());

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setTime(new Date());
//         }, 1000);

//         return () => clearInterval(timer);
//     }, []);

//     return (
//         <div>
//             <h1>Digital Clock</h1>
//             <h2>{time.toLocaleTimeString()}</h2>
//         </div>
//     );
// }

// export default App;






// 2. Display Window Height and Width

// import { useState, useEffect } from "react";

// function App() {
//     const [size, setSize] = useState({
//         width: window.innerWidth,
//         height: window.innerHeight
//     });

//     useEffect(() => {
//         function updateSize() {
//             setSize({
//                 width: window.innerWidth,
//                 height: window.innerHeight
//             });
//         }

//         window.addEventListener("resize", updateSize);

//         return () => {
//             window.removeEventListener("resize", updateSize);
//         };
//     }, []);

//     return (
//         <div>
//             <h1>Window Dimensions</h1>
//             <p>Width: {size.width}px</p>
//             <p>Height: {size.height}px</p>
//         </div>
//     );
// }

// export default App;





















// import { useState } from "react";
// import StudentCard from "./components/StudentCard";

// function App() {
//     const [count, setCount] = useState(0);

//     const handleView = () => {
//         console.log("Viewing Student Details");
//     };

//     return (
//         <div>
//             <h1>Student Dashboard</h1>

//             <h2>Counter: {count}</h2>

//             <button onClick={() => setCount(count + 1)}>
//                 Increase Counter
//             </button>

//             <hr />

//             <StudentCard
//                 name="Som"
//                 onView={handleView}
//             />
//         </div>
//     );
// }

// export default App;







// import { useState, useCallback } from "react";
// import StudentCard from "./components/StudentCard";

// function App() {
//     const [count, setCount] = useState(0);

//     // useCallback remembers the function
//     const handleView = useCallback(() => {
//         console.log("Viewing Student Details");
//     }, []);


//     return (
//         <div>
//             <h1>Student Dashboard</h1>

//             <h2>Counter: {count}</h2>

//             <button onClick={() => setCount(count + 1)}>
//                 Increase Counter
//             </button>

//             <hr />

//             <StudentCard
//                 name="Som"
//                 onView={handleView}
//             />
//         </div>
//     );
// }

// export default App;



// 1\. useState(): Manages the counter state and updates it when the Increase Counter button is clicked.

// 2\. useCallback(): Prevents the `handleView` function from being recreated on every re-render when dependencies remain unchanged.

// 3\. React.memo(): Prevents unnecessary re-rendering of the `StudentCard` component if its props haven't changed.

// 4\. Props: Passes the student's name (`Som`) and the `handleView` function from the parent (`App`) to the child (`StudentCard`).

















// import CounterOne from "./CounterOne";
// import CounterTwo from "./CounterTwo";
// function App(){
//     return(
//         <div>
//             <h1>Custom Hooks</h1>
//             <CounterOne/>
//             <hr/>
//             <CounterTwo/>
//         </div>
//     );
// }

// export default App;














// Controlled Component

// import { useState } from "react";

// function App() {
//     const [name, setName] = useState("");

//     function handleChange(event) {
//         setName(event.target.value);
//     }

//     return (
//         <div>
//             <h1>Controlled Component</h1>

//             <label htmlFor="studentName">
//                 Enter your Name:
//             </label>

//             <input
//                 id="studentName"
//                 type="text"
//                 value={name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//             />

//             <h2>Your Name: {name}</h2>
//         </div>
//     );
// }

// export default App;













// Uncontrolled Component


import { useRef } from "react";

function App() {
    const nameRef = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        alert("Your name is: " + nameRef.current.value);
    }

    return (
        <div>
            <h1>Uncontrolled Component</h1>

            <label htmlFor="studentName">
                Enter your Name:
            </label>

            <input
                id="studentName"
                type="text"
                ref={nameRef}
                placeholder="Enter your name"
            />

            <button onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
}

export default App;
