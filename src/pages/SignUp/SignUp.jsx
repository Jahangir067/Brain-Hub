import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const {createuser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        createuser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then( () => {
                  console.log('user profile info updated')
                  reset();
                  Swal.fire({
                    title: 'Success',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                  navigate('/');
            })
            .catch(error => console.log(error))    
        })
        if (data.password !== data.password2) {
            setPasswordMatchError(true);
            return;
        }

        console.log(data)
    };
    return (
        <>
        <Helmet>
                <title>Brain Hub | SignUp</title>
            </Helmet>
        <div className="hero min-h-[75%] p-8 bg-base-200 bg-gradient-to-r from-pink-500 to-blue-500">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
           <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 font-bold text-center text-3xl">SignUp</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name", { required: true })} name="name" placeholder="Type Your Name" className="input input-bordered" />
          {errors.name && <span className="text-red-500">Name is required</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email", { required: true })} name="email" placeholder="Your Email" className="input input-bordered" />
          {errors.email && <span className="text-red-500">Email is required</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password", { 
            required: true, 
            minLength: 6, 
            maxLength: 20,
            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
             })} name="password" placeholder="Password" className="input input-bordered" />
          {errors.password?.type === 'minLength' && <span className="text-red-500">Password Must be 6 Character</span>}
          {errors.password?.type === 'pattern' && <span className="text-red-500">Password must have one uppercase, one lowercase, one number and one special character</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" {...register("password2", { required: true })} name="password2" placeholder="Confirm Password" className="input input-bordered" />
          {errors.password2 && <span className="text-red-500">Password is required</span>}
          {passwordMatchError && (
              <span className="text-red-500">Passwords do not match</span>
            )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="photo" {...register("photoURL", { required: true })} name="photoURL" placeholder="Photo Url" className="input input-bordered" />
          {errors.photoURL && <span className="text-red-500">Photo url is required</span>}
        </div>

        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Sign Up" />
        </div>
      </form>
      <p className="text-center text-xl"><small>Already have an Account? <Link to='/login' className="text-blue-500">Login Here</Link></small></p>
    </div>
</div>
        </>
    );
};

export default SignUp;