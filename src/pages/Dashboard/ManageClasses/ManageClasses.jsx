import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import ManageClassesTableRow from "../ManageClassesTableRow/ManageClassesTableRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        
        return res.data;
    })

    const handleApproved = (id) => {
        fetch(`http://localhost:5000/classes/admin/${id._id}`, {
            method: 'PATCH',
        })
        .then(res => res.json())
            .then(data => {
                if (data.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        icon: 'success',
                        title: `You successfully approve the class`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    
                }
            })
    }
    const handleDeny = (id) => {
        fetch(`http://localhost:5000/classes/admin/${id._id}`, {
            method: 'PATCH',
        })
        .then(res => res.json())
            .then(data => {
                if (data.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        icon: 'success',
                        title: `You successfully deny the class`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                   
                }
            })
    }


    return (
        <div className='my-10'>

            <div className="overflow-x-auto mt-10" >
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="bg-[#FFB347]">
                                #
                            </th>
                            <th className="bg-[#FFB347]">Class Photo</th>
                            <th className="bg-[#FFB347]">Class Name</th>
                            <th className="bg-[#FFB347]">Intructor Info</th>
                            <th className="bg-[#FFB347]">Seats</th>
                            <th className="bg-[#FFB347]">Price</th>
                            <th className="bg-[#FFB347]">Status</th>
                            <th className="bg-[#FFB347]">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            classes.map((classData, index) => <ManageClassesTableRow key={classData._id} classData={classData} index={index} handleApproved={handleApproved} handleDeny={handleDeny} ></ManageClassesTableRow>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;