import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const MyCart = () => {
    const [cart, refetch] = useCart();

    const handleDelete = singleClass => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/carts/${singleClass._id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
              })
            }
          })

        }
    return (
        <div className="w-full my-8">
            <Helmet>
                <title>Brain Hub | My Selected Classes</title>
            </Helmet>

            <h3 className="text-2xl text-center font-bold"> Total Selected Classes: {cart?.length}</h3>
            <div className="divider"></div>
            <div className="overflow-x-auto">
                <table className="table mx-4">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Enroll</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                           cart.map((singleClass, index) =>  <tr
                           key={singleClass._id}
                           >
                            <td>{index + 1}</td>
                            <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={singleClass.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                </div>
                            </td>
                            <td>{singleClass.name}</td>
                            <td>${singleClass.price}</td>
                            <td>
                                <button onClick={ () => handleDelete(singleClass)} className="btn btn-secondary"><FaTrashAlt></FaTrashAlt></button>
                            </td>
                            <td>
                                <button className="btn btn-sm btn-warning">Pay</button>
                            </td>
                        </tr>)
                        }
                       
                    </tbody>

                </table>
            </div>
        </div>

    );
};

export default MyCart;