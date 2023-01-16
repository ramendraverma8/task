import React from "react";
import Card from "../component/Card";
import "./Home.css";

function Home(props) {
    return (
        <div className="relative flex justify-center items-center h-screen w-screen">
            <div className="absolute top-0 w-full z-[-1]">
                <div className="h-[20vh] bg-[#6337c8]"></div>
            <svg class="drop-shadow-[0px_17px_0px_#dcd6f3] z-[-1] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6337c8" fill-opacity="1" d="M0,224L80,197.3C160,171,320,117,480,128C640,139,800,213,960,245.3C1120,277,1280,267,1360,261.3L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>

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