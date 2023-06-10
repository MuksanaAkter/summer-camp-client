import { useEffect } from "react";
import { useState } from "react";
import ClassCard from "./ClassCard";


const Class = () => {


    const [allclass, setclass] = useState([]);
    // const [toys, settoy] = useState([])
    
    useEffect(() => {
      fetch("http://localhost:4000/classes")
        .then((res) => res.json())
        .then((result) => {
          setclass(result);
        });
    }, []);
    return (
        <div className="bg-black bg-opacity-70">
            classs

            <div className=" max-w-screen-2xl mx-auto pb-10 grid grid-cols-2 gap-5 ">
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