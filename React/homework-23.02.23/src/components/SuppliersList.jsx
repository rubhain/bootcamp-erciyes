import { useState, useEffect } from 'react';

function SuppliersList() {
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        fetch(
            "https://northwind.vercel.app/api/suppliers",
          )
            .then((res) => res.json())
            .then((data) => {
              setSuppliers(data);
            })
            .catch((err) => {
              console.log("error ", err);
            }); 
    }
 
    const deleteSupplier = (id) => {
        fetch(
            "https://northwind.vercel.app/api/suppliers/" + id,
            {
              method: "DELETE",
            }
          )
          getData();
    };

    return (
        <><table className='w3-table w3-striped w3-border'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers && suppliers.map(item => {
                        return (
                        <tr key={item.id} >
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td><button onClick={() => deleteSupplier(item.id)}>Delete</button></td>
                        </tr>)
                    })
                }
            </tbody>
            </table>
        </>
    )
    }

export default SuppliersList