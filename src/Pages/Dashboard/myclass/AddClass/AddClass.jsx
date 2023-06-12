import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Provider/AuthProvider";

// import useAxiosSecure from "../../../../hooks/useAxiosSecure ";

// const img_hosting_token = import.meta.env.VITE_Image_token;

const AddClass = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const [axiosSecure] = useAxiosSecure();
  // const img_hosting_url = `"https://api.imgbb.com/1/upload?key=${img_hosting_token}`

  // const onSubmit = data => {
  //     console.log(data);

  //     const formData = new FormData();
  //     formData.append('image', data.image[0])

  //     fetch(img_hosting_url, {
  //         method: 'POST',
  //         body: formData,
  //         mode: 'no-cors'
  //     })
  //     .then(res => res.json())
  //     .then(imgResponse => {
  //         if(imgResponse.success){
  //             const imgURL = imgResponse.data.display_url;
  //             const {className,instructorName,instructorEmail, price, Status, seats} = data;
  //             const newItem = {className,instructorName,instructorEmail, price: parseFloat(price), Status, seats, image:imgURL}
  //             console.log(newItem)
  //             axiosSecure.post('/classes', newItem)
  //             .then(data => {
  //                 console.log('after posting new menu item', data.data)
  //                 if(data.data.insertedId){
  //                     reset();
  //                     Swal.fire({
  //                         position: 'top-end',
  //                         icon: 'success',
  //                         title: 'Item added successfully',
  //                         showConfirmButton: false,
  //                         timer: 1500
  //                       })
  //                 }
  //             })
  //         }
  //     })

  // };
  const onSubmit = (data) => {
    //console.log(data);
    fetch("https://musical-instrument-server.vercel.app/addclass", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Added Toy Successfully",
    });
    //console.log(data);
  };
  const bg="https://img.freepik.com/free-vector/glowing-musical-pentagram-background-with-sound-notes_1017-31220.jpg?w=360"

  return (
    <div className="w-full ">
      <div className=" px-10">
        <div style={{ backgroundImage: `url(${bg})` ,backgroundSize:"cover", height:"" }} >
            <h1 className="text-5xl font-bold my-10 py-20 text-center text-white">Add A Class</h1>
        </div>
        <form className=" bg-blue-400 bg-opacity-30 p-10 mb-20 shadow-2xl" onSubmit={handleSubmit(onSubmit)}>
          {errors.exampleRequired && <span>This field is required</span>}
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Class Name*</span>
            </label>
            <input
              type="text"
              placeholder="Class Name"
              {...register("name", { required: true, maxLength: 120 })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold"> class Image*</span>
            </label>
            <input
              type="url"
              placeholder="Class Image"
              {...register("image", { required: true, maxLength: 120 })}
              className="input input-bordered w-full "
            />
          </div>
          {/* <div>
            <label className="label">
              <span className="label-text text-xl font-semibold ">
                {" "}
                class Image
              </span>
            </label>
            <input
              required
              className=" shadow-lg text-input p-5 w-full "
              {...register("image")}
              placeholder="image link"
              type="url"
            />
          </div> */}
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Instructor Name*</span>
            </label>
            <input
              type="text"
              placeholder="Instructor Name"
              value={user?.displayName}
              {...register("instructor", {
                required: true,
                maxLength: 120,
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">
                Instructor Email*
              </span>
            </label>
            <input
              type="text"
              placeholder="Instructor Email"
              value={user?.email}
              {...register("email", {
                required: true,
                maxLength: 120,
              })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex my-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Status*</span>
              </label>
              <input
                type="text"
                placeholder="Status"
                value="Pending"
                {...register("status", { required: true, maxLength: 120 })}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ml-4">
              <label className="label">
                <span className="label-text font-semibold">Price*</span>
              </label>
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Available Seats*</span>
            </label>
            <input
              type="number"
              {...register("available_seats", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>

          {/* <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Class Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div> */}
          <div className="flex justify-center">
          <input className="btn bg-yellow-500 border-0 font-bold text-center flex  my-5" type="submit" value="Add Class" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
