// import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import useEnroll from "../../../hooks/useEnroll";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyClass = () => {
  const [enroll, refetch] = useEnroll();
  //console.log(enroll);
  // how does reduce work!!!
  const total = enroll.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://musical-instrument-server.vercel.app/enrolls/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="px-10 w-full">
      <div className=" w-full">
        {/* <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet> */}
        <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center mb-6 text-black">
          <h3 className="text-3xl">Total Items: {enroll.length}</h3>
          <h3 className="text-3xl">Total Price: ${total}</h3>
          <Link to="/dashboard/payment">
            <button className="btn btn-warning btn-sm">PAY ALL</button>
          </Link>
        </div>
        <div className="overflow-x-auto w-full ">
          <table className="table w-full bg-gray-300 p-3 table-zebra text-black shadow-xl">
            {/* head */}
            <thead className="bg-gray-600 text-white">
              <tr>
                <th>#</th>
                <th>My Class</th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Pay</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {enroll.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="">${item.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-ghost bg-red-600  text-white"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                  <td>
                    <Link to={`/dashboard/singlepayment/${item._id}`}>
                      <button className="btn btn-warning btn-sm">PAY</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClass;
