import { Link } from "react-router-dom";

const ManageClassesTableRow = ({ classData, index, handleApproved, handleDeny }) => {

    const { image, name, email, instructorsName, availableSeats, price, status, _id } = classData;
    return (
        <tr >
            <th>
                {index + 1}
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="Class photo" />
                    </div>
                </div>
            </td>
            <td>
                {name}
            </td>
            <td>
                {instructorsName}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{availableSeats}</td>
            <td>{price}</td>
            <td className={`${status === 'Approved' ? 'text-green-600' : status === 'Denied' ? 'text-red-600' : ''}`}>{status}</td>
            <th>
                <div className='flex gap-3'>
                    <button onClick={() => handleApproved(id)} className={`text-sm font-medium bg-slate-200 p-2 rounded-md ${status === 'Approved' || status === "Denied" ? 'btn-disabled' : ''}`}>Approve</button>
                    <button onClick={() => handleDeny(id)} className={`text-sm font-medium bg-slate-200 p-2 rounded-md ${status === 'Approved' || status === "Denied" ? 'btn-disabled' : ''}`}>Deny</button>
                    {/* admin feedback  */}
                    <Link to={`/dashboard/feedback`}>
                        <button className={`text-sm font-medium bg-slate-200 p-2 rounded-md cursor-pointer`}>
                            Feadback
                        </button>
                    </Link>
                </div>
            </th>
        </tr>
    );
};

export default ManageClassesTableRow;