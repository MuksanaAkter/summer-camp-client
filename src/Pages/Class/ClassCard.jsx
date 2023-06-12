import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import useEnroll from "../../hooks/useEnroll";
import { Fade } from "react-awesome-reveal";

const ClassCard = ({ classes }) => {
  //console.log(classes);
  const { _id, image, name, available_seats, instructor, price } = classes;
  const { user } = useContext(AuthContext);
  const [, refetch] = useEnroll();
  const handleAddToCart = (myclass) => {
    console.log(myclass);
    if (user && user.email) {
      const myclassItem = {
        menuItemId: _id,
        name,
        available_seats,
        instructor,
        image,
        price,
        email: user.email,
      };
      fetch("https://musical-instrument-server.vercel.app/enrolls", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(myclassItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); // refetch enroll to update the number of items in the class
            Swal.fire({
              position: "center",
              icon: "success",
              title: "class Enrolled successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to enroll the class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          Navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className=" ">
      <Fade>
      <div className={`card card-side ${ available_seats === 0 ? 'bg-red-500' : 'bg-white' } shadow-xl`}>
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
          <div className="card-actions justify-end">
            <button disabled={available_seats === 0} onClick={() => handleAddToCart(classes)} className="btn">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default ClassCard;
