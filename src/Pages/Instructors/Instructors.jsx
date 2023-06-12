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
    <div className="">
     
      <div className="my-5 text-center text-3xl font-bold border-y-2 border-y-amber-700 text-yellow-500 py-3">---- Popular Instructor ----</div>
     
      <div className=" max-w-screen-2xl mx-auto pb-10 grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {allInstructors.map((Instructors) => (
          <InstructorsCard
            key={Instructors._id}
            Instructors={Instructors}
            className=""
          ></InstructorsCard>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
