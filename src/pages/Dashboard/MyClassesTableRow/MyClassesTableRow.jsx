

const MyClassesTableRow = ({ classData, index }) => {
    const { image, name, enrolled_students, status } = classData;
    return (
        <tr >
            <th>
                {index + 1}
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="Class Photo" />
                    </div>
                </div>
            </td>
            <td>
                {name}
            </td>
            <td>{enrolled_students}</td>
            <td className={`${status === 'Approved' ? 'text-green-600' : status === 'Denied' ? 'text-red-600' : ''}`}>{status}</td>
            <td>
                <button className="btn-small">Update</button>
            </td>
        </tr>
    );
};

export default MyClassesTableRow;