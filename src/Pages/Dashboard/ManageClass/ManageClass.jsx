
import useClass from "../../../hooks/UseClass";
// import useAxiosSecure from "../../../hooks/useAxiosSecure ";


const ManageClass = () => {
  const [classes,] = useClass();
//   const [axiosSecure] = useAxiosSecure();

//   const handleDelete = (item) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axiosSecure.delete(`/classes/${item._id}`).then((res) => {
//           console.log("deleted res", res.data);
//           if (res.data.deletedCount > 0) {
//             refetch();
//             Swal.fire("Deleted!", "Your file has been deleted.", "success");
//           }
//         });
//       }
//     });
//   };

  return (
    <div className="w-full">
      <div className="-auto w-full ">
        <table className="table table-zebra w-full text-slate-800 mx-5 bg-green-200 shadow-2xl my-10">
          {/* head */}
          <thead className="text-white font-bold text-center text-xl bg-green-900">
            <tr className="text-ceenter">
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Inastructor Name</th>
              <th>instructor Email</th>
              <th>Available Seat</th>
              <th>Price</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody className="text-lg text-center">
            {classes.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-20 h-20">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.instructor}</td>
                <td>{item.instructor}</td>
                <td>{item.available_seats}</td>

                <td className="">${item.price}</td>
                <td>
                  <div className="flex flex-col gap-2">
                    <button className="btn btn-info">Pending</button>
                    <button className="btn btn-success">Approve</button>
                    <button className="btn btn-warning">Deny</button>
                  </div>
                </td>
                {/* <td>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
