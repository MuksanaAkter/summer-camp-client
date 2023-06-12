import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import ClassCard from "./ClassCard";


const InstructorsClass = () => {
    const { user } = useContext(AuthContext);
    const [myclass, setmyclass] = useState([]);
    //console.log(mytoys);
    useEffect(() => {
      fetch(`https://musical-instrument-server-muksanaakter.vercel.app/classes/${user?.email}`)
        .then((res) => res.json())
        .then((result) => {
          setmyclass(result);
        });
    }, [user]);

    return (
        <div>
              <div className="my-5 text-center text-3xl font-bold border-y-2 border-y-amber-700 text-yellow-500 py-3">----Instructors Classes ----</div>
     
     <div className=" max-w-screen-2xl mx-auto pb-10 grid grid-cols-1  gap-8 ">
       {myclass.map((mycls) => (
         <ClassCard
           key={mycls._id}
           mycls={mycls}
           className=""
         ></ClassCard>
       ))}
     </div>
        </div>
    );
};

export default InstructorsClass;