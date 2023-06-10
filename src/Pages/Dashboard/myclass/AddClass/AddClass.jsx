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
        fetch("http://localhost:5000/addclass", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
          });
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Added Toy Successfully',
            
           
          })
        //console.log(data);
      };

    return (
        <div className="w-full ">
             <div className="mx-20 px-10">
            <h1>Add a item</h1>
            <form 
             onSubmit={handleSubmit(onSubmit)}
            >
                {errors.exampleRequired && <span>This field is required</span>}
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("className", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div>
            <label className="label">
              <span className="label-text text-xl font-semibold "> class Photo</span>
            </label>
            <input
            required
              className=" shadow-lg text-input p-5 w-full "
              {...register("image")}
              placeholder="image link"
              type="url"
        
            />
          </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name*</span>
                    </label>
                    <input type="text" placeholder="Instructor Name"  value={user?.displayName}
                        {...register("instructorName", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Email*</span>
                    </label>
                    <input type="text" placeholder="Instructor Email"  value={user?.email}
                        {...register("instructorEmail", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Status*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("status", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>pending</option>
                            <option>approved</option>
                            <option>denied</option>
                            
                        </select>
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("Price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seats*</span>
                        </label>
                        <input type="number" {...register("seats", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
               
                {/* <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Class Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div> */}
                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
            </form>
        </div>
        </div>
    );
};

export default AddClass;