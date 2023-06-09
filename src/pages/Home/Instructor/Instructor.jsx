import { Helmet } from "react-helmet-async";
import useInstructors from "../../../hooks/useInstructors";


const Instructor = () => {
    const [instructors] = useInstructors();
    return (
        <div>
            <Helmet>
                <title>Brain Hub | Instructor</title>
            </Helmet>
            <h3 className="text-3xl text-center my-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 font-bold">All Instructor</h3>
            <div>
            <div className="grid md:grid-cols-3 gap-4 my-8">
        {
            instructors.map(singleInstructor => <div className="card w-full bg-base-100 shadow-xl" key={singleInstructor._id}>
            <figure><img  src={singleInstructor.image} alt="class" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                {singleInstructor.name}
              </h2>
              <p>{singleInstructor.email}</p>
            </div>
          </div>)
        }
        </div>
            </div>
        </div>
    );
};

export default Instructor;