import { useEffect, useState } from "react";


const PopularInstructor = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect( () => {
        fetch('instructor.json')
        .then(res => res.json())
        .then(data => {
            const popularInstructor = data.filter(singleInstructor => singleInstructor.category === 'popular')
            setInstructors(popularInstructor)
        })
    }, [])
    return (
        <>
        <h3 className="text-3xl text-center my-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 font-bold">Popular Instructor</h3>
        <div className="grid grid-cols-3 gap-4 my-8">
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
        </>
 );
};

export default PopularInstructor;