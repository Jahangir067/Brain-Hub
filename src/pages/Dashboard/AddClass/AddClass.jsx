import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {availableSeats, email, instructorsName, name, price,  } = data;
                const classItem = {availableSeats, email, instructorsName, name, price: parseFloat(price), image: imgURL, enrolled_students: 0, status: 'Pending'}
                console.log(classItem)
                axiosSecure.post('/classes', classItem)
                .then(data => {
                    console.log('after posting new claasitem', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            title: 'Created a New Class',
                            showClass: {
                              popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                              popup: 'animate__animated animate__fadeOutUp'
                            }
                          })
                    }
                    
                })
            }
        })
    };


    const { user } = useAuth();
    console.log(user)
    return (
        <div className="">
            <h2 className="text-2xl text-center font-semibold mb-4">Add a New Class</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Class Name*</span>
                    </label>
                    <input type="text" {...register("name", { required: true, maxLength: 120 })} placeholder="Type a class name" className="input input-bordered w-full max-w-xs" />

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" defaultValue={user.displayName} readOnly {...register("instructorsName", { required: true })} className="input input-bordered w-full max-w-xs" />

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" defaultValue={user.email} readOnly {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" />

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available Seats*</span>
                    </label>
                    <input type="number" {...register("availableSeats", { required: true })} placeholder="Available seats" className="input input-bordered w-full max-w-xs" />

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price*</span>
                    </label>
                    <input type="number" {...register("price", { required: true })} placeholder="Type price" className="input input-bordered w-full max-w-xs" />

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Class Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-primary w-full max-w-xs" />

                </div>
                <input className="btn btn-primary my-4 " type="submit" value="Add Class" />
            </form>


        </div>
    );
};

export default AddClass;