import { useEffect } from "react";
import { useState } from "react";
import ClassCard from "./ClassCard";


const Class = () => {


    const [allclass, setclass] = useState([]);
    // const [toys, settoy] = useState([])
    
    useEffect(() => {
      fetch("https://musical-instrument-server.vercel.app/classes")
        .then((res) => res.json())
        .then((result) => {
          setclass(result);
        });
    }, []);
    return (
        <div className="">
<div className="my-5 text-center text-3xl font-bold border-y-2 border-y-amber-700 text-yellow-500 py-3">---- Popular Classes ----</div>
            <div className=" max-w-screen-2xl mx-auto pb-10 grid grid-cols-1 md:grid-cols-2 gap-5 ">
            {allclass.map((classes) => (
                        <ClassCard 
                          key={classes._id}
                          classes={classes}
                          className=""
                        ></ClassCard>
                      ))
                }
            </div>
        </div>
    );
};

export default Class;