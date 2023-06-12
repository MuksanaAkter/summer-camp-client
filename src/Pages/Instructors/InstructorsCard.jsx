
const InstructorsCard = ({Instructors}) => {
    //console.log(Instructors);
    const {  image, name,email} = Instructors;
    return (
        <div className=" ">
      
        {/* <div className="card card-side bg-sky-100 shadow-xl">
<figure><img className="w-60 h-40 m-3" src={image} alt=""/></figure>
<div className="card-body">
 <h2 className="card-title mt-2"><span className="text-pink-600">Toy Name:</span> {name}</h2>
 <h2 className="card-title mt-2"><span className="text-pink-600">Toy Name:</span> {email}</h2>

 <div className='d-flex align-items-enter'>
     </div>
 <div className="card-actions justify-end">  
   
 </div>
</div>
</div> */}
<div className="card w-96 glass">
  <figure><img src={image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{email}</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>

     </div>
    );
};

export default InstructorsCard;