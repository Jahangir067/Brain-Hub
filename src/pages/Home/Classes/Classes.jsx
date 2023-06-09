import { Helmet } from 'react-helmet-async';
import useClasses from '../../../hooks/useClasses';



const Classes = () => {
    const [classess] = useClasses();


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
              <button className="btn btn-sm btn-primary ">Select</button>
            </div>
          </div>)
        }
       </div>
            </div>
        </div>
    );
};

export default Classes;