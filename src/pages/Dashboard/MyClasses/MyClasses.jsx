import { useEffect, useState } from "react";
import MyClassesTableRow from "../MyClassesTableRow/MyClassesTableRow";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const MyClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const [classesData, setClassesData] = useState([])
    const { user } = useAuth();
    console.log(user)
    
    useEffect(() => {
        axiosSecure.get(`/myclass/${user?.email}`)
            .then(res => {
                console.log(res)
                setClassesData(res.data)
            })
            .catch(err => console.log(err))
    }, [user])

    return (
        <div className="my-20 ">

        <div className="overflow-x-auto mt-10 w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr className="text-white">
                        <th className="bg-[#FFB347]">
                            #
                        </th>
                        <th className="bg-[#FFB347]">Photo</th>
                        <th className="bg-[#FFB347]">Class Name</th>
                        <th className="bg-[#FFB347]">Enrolled Students</th>
                        <th className="bg-[#FFB347]" >Status</th>
                        <th className="bg-[#FFB347]">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        classesData.map((classData, index) => <MyClassesTableRow key={classData._id} classData={classData} index={index}></MyClassesTableRow>)
                    }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyClasses;