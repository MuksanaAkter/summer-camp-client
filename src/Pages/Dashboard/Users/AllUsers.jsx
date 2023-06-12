import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure ";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://musical-instrument-server.vercel.app/users");
    return res.json();
  });

  const handleMakeAdmin = (user) => {
    fetch(`https://musical-instrument-server.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeinstructor = (user) => {
    fetch(`https://musical-instrument-server.vercel.app/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
    const [axiosSecure] = useAxiosSecure();

  const handleDelete = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          console.log("deleted res", res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your user has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="w-full">
        <h3 className="text-3xl font-semibold my-4">
          Total Users: {users.length}
        </h3>
        <div className=" w-full">
          <table className="table table-zebra w-full bg-blue-300 mx-10 my-10 shadow-2xl p-5 text-center">
            {/* head */}
            <thead className="bg-blue-950 text-white text-xl font-bold">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <div className="flex gap-3 text-center items-center">
                      <div>
                        {user.role === "admin" ? (
                          "Admin"
                        ) : (
                          <button
                            onClick={() => handleMakeAdmin(user)}
                            className="btn btn-ghost bg-green-800  text-white"
                          >
                            Admin
                          </button>
                        )}
                      </div>
                      <div>
                        {user.role === "instructor" ? (
                          "Instructor"
                        ) : (
                          <button
                            onClick={() => handleMakeinstructor(user)}
                            className="btn btn-ghost bg-cyan-700  text-white"
                          >
                            Instructor
                          </button>
                        )}
                      </div>
                    </div>
                  </td>

                  <td>
                    <button
                     onClick={() => handleDelete(user)}
                      className="btn btn-ghost bg-red-600  text-white"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
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

export default AllUsers;
