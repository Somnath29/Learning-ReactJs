import { useState } from "react";

const Calculator = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");

    return (
        <div className="flex justify-center mt-12 text-black">
            <div className="border border-gray-300 p-8 rounded-xl text-center w-96 shadow-md">

                <h1 className="text-3xl font-bold mb-8">
                    Calculator
                </h1>

                <div className="flex gap-3">
                    <input
                        type="number"
                        placeholder="First number"
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                        className="border border-gray-300 p-3 rounded-lg w-full outline-none focus:border-blue-500"
                    />

                    <input
                        type="number"
                        placeholder="Second number"
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                        className="border border-gray-300 p-3 rounded-lg w-full outline-none focus:border-blue-500"
                    />
                </div>

                <div className="flex justify-center gap-3 mt-6">
                    <button
                        onClick={() => setResult(Number(num1) + Number(num2))}
                        className="border px-5 py-2 rounded-lg hover:bg-gray-100"
                    >
                        +
                    </button>

                    <button
                        onClick={() => setResult(Number(num1) - Number(num2))}
                        className="border px-5 py-2 rounded-lg hover:bg-gray-100"
                    >
                        -
                    </button>

                    <button
                        onClick={() => setResult(Number(num1) * Number(num2))}
                        className="border px-5 py-2 rounded-lg hover:bg-gray-100"
                    >
                        ×
                    </button>

                    <button
                        onClick={() => setResult(Number(num1) / Number(num2))}
                        className="border px-5 py-2 rounded-lg hover:bg-gray-100"
                    >
                        ÷
                    </button>
                </div>

                <input
                    type="text"
                    value={result}
                    readOnly
                    placeholder="Answer"
                    className="border border-gray-300 p-3 rounded-lg mt-7 w-full text-center font-semibold bg-gray-50"
                />

            </div>
        </div>
    );
};

export default Calculator;