import { useState, useEffect } from 'react';
import SupplierForm from './SupplierForm';

function SuppliersList() {
    const [suppliers, setSuppliers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
              setIsLoading(false)
            })
            .catch((err) => {
              console.log("GET error ", err);
            }); 
    }
 
    const deleteSupplier = (id) => {
        fetch(
            "https://northwind.vercel.app/api/suppliers/" + id,
            {
              method: "DELETE",
            }
          ).then(res => {
            setIsLoading(true);
            getData()
        }).catch((err) => {
            console.log("DELETE error ", err);
          }); 
    };

    return (
        <><SupplierForm isLoading={isLoading} setIsLoading={setIsLoading} getData={getData}/>
        <br />
        {
        isLoading ? <h1>Loading...</h1> :
        <table className='w3-table w3-striped w3-border'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Title</th>
                    <th>City</th>
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
                            <td>{item.contactTitle}</td>
                            <td>{item.address.city}</td>
                            <td><button onClick={() => deleteSupplier(item.id)}>Delete</button></td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
        }
        </>
    )
    }

export default SuppliersList