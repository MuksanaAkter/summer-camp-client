import { Fade } from "react-awesome-reveal";

const InstructorsCard = ({Instructors}) => {
    //console.log(Instructors);
    const {  image, name,email} = Instructors;
    return (
        <div className=" ">
<Fade>
<div className="card  glass shadow-2xl ">
  <figure><img className="w-full p-5 h-60" src={image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title"><span className="text-yellow-700">Instructor Name: </span>{name}</h2>
    <p><span className="text-yellow-700 font-semibold">Instructor Email: </span>{email}</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
</Fade>


     </div>
    );
};

export default InstructorsCard;