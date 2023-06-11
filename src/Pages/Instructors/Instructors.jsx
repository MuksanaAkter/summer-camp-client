import { useEffect } from "react";
import { useState } from "react";
import InstructorsCard from "./InstructorsCard";


const Instructors = () => {
    const [allInstructors, setInstructors] = useState([]);
    // const [toys, settoy] = useState([])
    
    useEffect(() => {
      fetch("https://musical-instrument-server.vercel.app/instructors")
        .then((res) => res.json())
        .then((result) => {
          setInstructors(result);
        });
    }, []);
    return (
        <div className="bg-black bg-opacity-70">

            <div className=" max-w-screen-2xl mx-auto pb-10 grid grid-cols-2 gap-5 ">
            {allInstructors.map((Instructors) => (
                        <InstructorsCard 
                          key={Instructors._id}
                          Instructors={Instructors}
                          className=""
                        ></InstructorsCard>
                      ))
                }
            </div>
        </div>
    );
};

export default Instructors;