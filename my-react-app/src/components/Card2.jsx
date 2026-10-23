// const Card2 = ({ title, image, desc }) => {
//     let mark = 20;

//     return (
//         <div className="container flex flex-col items-center">
//             <h2 style={{ padding: "20px 30px" }}>
//                 Card Component
//             </h2>
//             <div className=" {marks} card flex flex-col items-center sm:bg-amber-900">
//                 <div>
//                     <img className="img rounded-xl"
//                     src = {image}
//                     alt = "card image"
//                     ></img>
//                 </div>
//                 <div>
//                     <div className="title">{title}</div>
//                     <div>
//                         {desc}
//                     </div>
//                     <div className= marks>=40? "bg-green-500" : "bg-green-500" : "bg-red-500" >
//                         {marks}

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Card2;







const Card2 = ({ title, image, desc }) => {
    let marks = 40;

    return (
        <div className="container flex flex-col items-center">

            <h2 style={{ padding: "20px 30px" }}>
                Card Component
            </h2>

            <div className="card flex flex-col items-center sm:bg-amber-900">

                <div>
                    <img
                        className="img rounded-xl"
                        src={image}
                        alt="card image"
                    />
                </div>

                <div>
                    <div className="title">
                        {title}
                    </div>

                    <div>
                        {desc}
                    </div>

                    <div
                        className={
                            marks >= 40
                                ? "bg-green-500"
                                : "bg-red-500"
                        }
                    >
                        {marks}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Card2;






// recreate the following UI design as a responsove react component 
//  tailwind css and react . also tell me the correct folder structure , under which file shall i make these new ones


