import { useContext, useState } from 'react';
// import { loadCaptchaEnginge } from 'react-simple-captcha';

import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
// import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { AuthContext } from '../../Provider/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../../firebase/firebase.config';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [user, setUser] = useState(null);
    console.log(user);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const auth = getAuth(app);

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    const handleGoogle = (event) => {
        event.preventDefault();
        signInWithPopup(auth, GoogleAuthProvider)
          .then((result) => {
            const logUser = result.user;
            //console.log(logUser);
            setUser(logUser);
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.log("error", error.message);
          });
      };


    // const handleValidateCaptcha = (e) => {
    //     const user_captcha_value = e.target.value;
    //     if (validateCaptcha(user_captcha_value)) {
    //         setDisabled(false);
    //     }
    //     else {
    //         setDisabled(true)
    //     }
    // }
    const backgroundImage =
    "https://images.pexels.com/photos/290660/pexels-photo-290660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    return (
        <>
            {/* <Helmet>
                <title> | Login</title>
            </Helmet> */}
            <div
             style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize:'cover' }}
             className="hero min-h-screen bg-slate-900">
                <div   
                // style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize:'cover' }}
                className=" py-10 ">
                   
                    <div className="card w-96 shadow-2xl bg-base-100 bg-opacity-40 md:mr-80">
                        <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold text-center pb-3 ">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-base">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 bg-black text-white rounded-xl hover:bg-cyan-800">
                                <input disabled={false} className="border-0 w-full my-3 rounded-xl" type="submit" value="Login" />
                              
                            </div>
                            <p className="text-center mt-2">-----------or---------</p>
                            <button onClick={handleGoogle} className="btn bg-yellow-500 border-0 w-full my-3"><FaGoogle className="mx-2"></FaGoogle> Login with Google</button>
                            
                        </form>
                        <p className='text-center pb-5'>New Here?<Link className='text-rose-950 font-bold hover:underline' to="/signup">Create an account</Link></p>
                       
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Login;