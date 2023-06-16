import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AdminFeedback = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const handleFeedback = (event) => {
        event.preventDefault()
        const feedback = event.target.feedback.value;
        console.log(id, feedback)
        fetch(`http://localhost:5000/class-feedback/${id}`, {feedback}, {
            method: 'PATCH',
        })
        .then(res => res.json())
            .then(data => {
                if (data.data.modifiedCount) {
                    Swal.fire({
                        icon: 'success',
                        title: `You feedback successfully send`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(err => console.log(err))
        event.target.reset()
        navigate('/dashboard/manageclasses')
        }
    return (
        <div className="my-10">
            <form onSubmit={handleFeedback} className="max-w-md mt-10 mx-auto">
                <div>
                    <textarea name="feedback" id="" cols="30" rows="8" className="my-input text-sm font-normal" placeholder="Your Feedback..." required></textarea>

                </div>
                <button className="my-btn mt-5 w-full">Send Feedback</button>
            </form>


        </div>
    );
};

export default AdminFeedback;