import { Fade } from "react-awesome-reveal";


const ClassCard = ({mycls}) => {
    console.log(mycls);
    const {  image, name, available_seats, instructor, price } = mycls;
    return (
        <div>
            <Fade>
      <div className={`card card-side ${ available_seats === 0 ? 'bg-red-500' : 'bg-white' } shadow-xl text-black`}>
        <figure>
          <img className=" h-40  m-3" src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title mt-2">
            <span className="text-pink-600">Class Name:</span> {name}
          </h2>
          <h2 className="card-title mt-2">
            <span className="text-pink-600">Instructor Name:</span> {instructor}
          </h2>
          <h2 className="card-title mt-2">
            <span className="text-pink-600">Available seats:</span> {available_seats}
          </h2>
          <h2 className="card-title my-2">
            <span className="text-pink-600">Price:</span>$ {price}
          </h2>
          <div className="d-flex align-items-enter"></div>
          
        </div>
      </div>
      </Fade>
        </div>
    );
};

export default ClassCard;