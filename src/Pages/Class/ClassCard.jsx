

const ClassCard = ({classes}) => {
    //console.log(classes);
    const {  image, name,available_seats,instructor, price} = classes;
    return (
        <div className=" ">
      
         <div className="card card-side bg-sky-100 shadow-xl">
<figure><img className="h-40 w-30 m-3" src={image} alt=""/></figure>
<div className="card-body">
  <h2 className="card-title mt-2"><span className="text-pink-600">Toy Name:</span> {name}</h2>
  <h2 className="card-title mt-2"><span className="text-pink-600">Toy Name:</span> {instructor}</h2>
  <h2 className="card-title mt-2"><span className="text-pink-600">Toy Name:</span> {available_seats}</h2>
  <h2 className="card-title my-2"><span className="text-pink-600">Toy Price:</span>$ {price}</h2>
  <div className='d-flex align-items-enter'>
      </div>
  <div className="card-actions justify-end">  
    
  </div>
</div>
</div>

      </div>
    );
};

export default ClassCard;