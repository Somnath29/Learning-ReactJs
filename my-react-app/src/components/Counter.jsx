// import  { useState } from 'react';

// const Counter = () => {
//     const[count , setCount] = useState(0);
//     return (
//         <div className="counter-container">
//             <p id="para">You have clicked {count} times</p>
//             <button id="btn" onClick={()=>{setCount(count+1)}}>Click Me</button>
//         </div>
//     );
// };

// export default Counter;





// counter with css

import  { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-80">
            <h1 className="text-2xl font-bold mb-4">
                Click Counter
            </h1>

            <p className="text-lg text-gray-600 mb-6">
                You have clicked {count} times
            </p>

            <button
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
            
            <br></br>
            <button
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                onClick={() => setCount(count - 1)}
            >
                Decrement
            </button>


            <br></br>
            <button
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                onClick={() => setCount(0)}
            >
                Reset
            </button>
        </div>
    );
};

export default Counter;



