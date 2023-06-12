import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";



const Login = () => {

  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

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
            position: 'top-end',
            icon: 'success',
            title: 'You Have Successfully Login',
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from, {replace: true});
        })

    }
    return (
       <>
       <Helmet>
                <title>Brain Hub | Login</title>
            </Helmet>
        <div className="hero min-h-screen bg-gradient-to-r from-pink-500 to-blue-500">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
            <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 font-bold text-center text-3xl">Login</h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input  className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <p className="text-center text-xl"><small>New Here? <Link to='/signup' className="text-blue-500">Create a New Account</Link></small></p>
            <SocialLogin></SocialLogin>
          </div>
      </div>
       </>
    );
};

export default Login;