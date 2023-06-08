
import useClasses from "../../../hooks/useClasses";


const PopularClassess = () => {
  const [classess] = useClasses();
  const popularClasses = classess.filter(singleClass => singleClass.category === 'popular')

    return (
           <>
           <h3 className="text-3xl text-center my-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold">Popular Classess</h3>
           <div className="grid md:grid-cols-3 gap-4 my-8">
        {
            popularClasses.map(singleClass => <div className="card w-full bg-base-100 shadow-xl" key={singleClass._id}>
            <figure><img  src={singleClass.image} alt="class" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                {singleClass.instructorsName}
                <div className="badge badge-secondary">Top</div>
              </h2>
              <p>{singleClass.name}</p>
              <p>${singleClass.price}</p>
            </div>
          </div>)
        }
       </div>
           </>
    );
};

export default PopularClassess;