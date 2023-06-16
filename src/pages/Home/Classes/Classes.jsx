import { Helmet } from 'react-helmet-async';
import useClasses from '../../../hooks/useClasses';
import { useContext, useState  } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/useCart';



const Classes = () => {
    const [classess] = useClasses();
    const {availableSeats, image, name, instructorsName, price, _id} = classess;
    const {user} = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedClassId, setSelectedClassId] = useState(null);


    const handleSelect = (singleClass, event) => {
         console.log(event);
         console.log(singleClass);
         if(user && user.email){
          const selectClass = {singleClassId: _id,name: singleClass.name, image: singleClass.image, instructorsName: singleClass.instructorsName, price: singleClass.price, availableSeats: singleClass.availableSeats, email: user.email}
          fetch('http://localhost:5000/carts', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(selectClass)
          })
          .then(res => res.json())
          .then(data => {
            if(data.insertedId){
              refetch();
              setSelectedClassId(singleClass._id);
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'You Have Added a Class',
                showConfirmButton: false,
                timer: 1500
              });
            }
          })
         }
         else{
          Swal.fire({
            title: 'Please Login First',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login Now'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state: {from: location}})
            }
          })
         }
    }


    return (
        <div>
            <Helmet>
                <title>Brain Hub | Classes</title>
            </Helmet>
            <h3 className="text-3xl text-center my-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 font-bold">All Classes</h3>
            <div>
            <div className="grid md:grid-cols-3 gap-4 my-8">
        {
            classess.map(singleClass => <div className="card w-full bg-base-100 shadow-xl" key={singleClass._id}>
            <figure><img className='w-full h-80 p-4' src={singleClass.image} alt="class" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                {singleClass.name}
              </h2>
              <p>{singleClass.instructorsName}</p>
              <p>Available Seats: {singleClass.availableSeats} <div className="badge badge-primary">Remaining</div></p>
              <p>Price: ${singleClass.price}</p>
              <button disabled={ selectedClassId === singleClass._id} onClick={() => handleSelect(singleClass)} className="btn btn-sm btn-primary ">Select</button>
            </div>
          </div>)
        }
       </div>
            </div>
        </div>
    );
};

export default Classes;