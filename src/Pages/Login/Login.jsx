import { useContext, useState } from "react";
// import { loadCaptchaEnginge } from 'react-simple-captcha';

import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Helmet } from 'react-helmet-async';
import Swal from "sweetalert2";
// import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { AuthContext } from "../../Provider/AuthProvider";
// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// import { app } from "../../firebase/firebase.config";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const Login = () => {
  // const [user, setUser] = useState(null);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  // const [user, setUser] = useState(null);
  //console.log(user);
  const { signIn , googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // const auth = getAuth(app);
  // const GoogleProvider = new GoogleAuthProvider();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
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
                  icon: 'success',
                  title: 'Success!',
                  text: 'LogIn Successfully Done',
                    
                })
            navigate(from, { replace: true });
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

  const backgroundImage =
    "https://images.pexels.com/photos/290660/pexels-photo-290660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <>
      {/* <Helmet>
                <title> | Login</title>
            </Helmet> */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
        className="hero bg-slate-900"
      >
        <div
          // style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize:'cover' }}
          className=" py-5 "
        >
          <div className="card  shadow-2xl bg-base-100 bg-opacity-40 md:mr-80">
            <form onSubmit={handleLogin} className="card-body my-1">
              <h1 className="text-5xl font-bold text-center pb-2 ">
                Login now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className=" form-control">
                <label className="label">
                  <span className="label-text text-lg">Password</span>
                </label>
                <div className="relative">
                  <input
                  className="input input-bordered w-full"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                    name="password"
                    placeholder="Password"
                  />
                  <span className="my-1" onClick={toggleShowPassword}>
                    {showPassword ? <FaEyeSlash className="" /> : <FaEye />}
                  </span>
                  <h5 className="text-red-600 font-bold my-2">{error}</h5>
                </div>
              </div>
              <div className="form-control mt-3 bg-black  rounded-xl hover:bg-cyan-800">
                <input
                  disabled={false}
                  className="border-0 text-xl font-semibold text-white w-full my-3 rounded-xl"
                  type="submit"
                  value="Login"
                />
              </div>
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-base"
                >
                  Forgot password?
                </a>
              </label>
              <p className="text-center mt-1">-----------or---------</p>
              <button
                onClick={handleGoogle}
                className="btn bg-yellow-500 border-0 w-full my-2"
              >
                <FaGoogle className="mx-2"></FaGoogle> Login with Google
              </button>
              <p className="text-center pb-3 pt-3">
              New Here?
              <Link
                className="text-rose-950 font-bold hover:underline"
                to="/signup"
              >
                Create an account
              </Link>
            </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
