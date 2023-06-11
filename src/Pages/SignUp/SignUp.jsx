import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const { createUser, updateUserProfile ,googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const onSubmit = data => {
  

        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('https://musical-instrument-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })



                    })
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
              });
    };
    const handleGoogle = (event) => {
        event.preventDefault();
        googleSignIn()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
            fetch('https://musical-instrument-server.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
                .then(res => res.json())
                .then(() => {
                    navigate(from, { replace: true });
                })
        })
      };
     const backgroundImage = "https://media.istockphoto.com/id/155147726/photo/guitar.jpg?s=612x612&w=0&k=20&c=1DXyu8AFJL4NOqlQ4Jnac_sAM8DVJz8C8UMs9nKfy-M=";
    return (
        <>
           
            <div 
             style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize:"cover" }}
             className=" hero md:pr-20 p-2  ">
               
                   
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 bg-opacity-20">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body my-0">
                        <h1 className="text-5xl font-bold text-white text-center">Sign up now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg text-white">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-yellow-500">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg text-white">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-yellow-500">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg text-white">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" />
                                {errors.email && <span className="text-yellow-500">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg text-white">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="Password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-yellow-500">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-yellow-500">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-yellow-500">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-yellow-500">Password must have one Uppercase one lower case, one number and one special character.</p>}
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg text-white">Confirn Password</span>
                                </label>
                                <input
                                    type="password"
                                    {...register("confirmPassword", {
                                        required: true,
                                        validate: (value) => value === watch("password"),
                                    })}
                                    placeholder="confirm password"
                                    className="input input-bordered"
                                />
                                {errors.confirmPassword?.type === 'required' && (
                                    <p className="text-yellow-500">Confirm Password is required</p>
                                )}
                                {errors.confirmPassword?.type === 'validate' && (
                                    <p className="text-yellow-500 font-bold text-base">Passwords do not match</p>
                                )}
                            </div>
                            <h5 className="text-yellow-500 font-bold my-2">{error}</h5>
                            <div className="form-control mt-6">
                                <input className="btn bg-black text-white border-0 hover:bg-yellow-600" type="submit" value="Sign Up" />
                            </div>
                            <p className="text-center mt-1">-----------or---------</p>
              <button
                onClick={handleGoogle}
                className="btn bg-yellow-500 border-0 w-full my-2"
              >
                <FaGoogle className="mx-2"></FaGoogle> SignUp with Google
              </button>
                            <p className="text-lg text-center pt-3 pb-5 font-semibold text-white">Already have an account <Link className="text-xl text-yellow-400" to="/login">Login</Link></p>
                        </form>
                        
                        
                    </div>
                
            </div>
        </>
    );
};

export default SignUp;