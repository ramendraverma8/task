import React from "react";
import Card from "../component/Card";
import "./Home.css";

function Home(props) {
    return (
        <div className="relative flex justify-center items-center h-screen w-screen">
            <div className="absolute top-0 w-full z-[-1]">
                <div className="h-[20vh] bg-[#6337c8]"></div>
            </div>
            <div className="h-[85vh] shadow-2xl w-2/5 rounded-[25px] bg-white">
                <div className="w-full rounded-t-[25px] flex justify-center items-center h-[16vh] text-gray-600 bg-gray-100 text-xl">
                <p>Select an account</p>
                </div>
                <div className=" h-[65vh] pb-4 px-7 overflow-y-auto scrollbar scrollbar-thumb-gray-200 ">
                {
                        props.users.map((user) => {
                            return <Card key={user.id} name={user.name} profilepicture={user.profilepicture} id={user.id}/>
                            }
                        )

                }
                </div>
            </div>
            
        </div>
    );
    }
export default Home;