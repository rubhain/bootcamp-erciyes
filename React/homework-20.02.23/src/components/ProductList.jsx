import { useEffect, useState } from 'react'
import axios from "axios"

function ProductList() {
    const [products, setProducts] = useState([])

    useEffect(()=> {
        axios.get("https://northwind.vercel.app/api/products").then(res => setProducts(res.data))
    },[])

    console.log(products);

  return (
    <>
        <table className='w3-table w3-striped w3-border'>
            <thead><tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Stock</th>
                    <th>Unit Price</th>
                    <th>Quantity per Unit</th>
                </tr></thead>
            <tbody>
            {products.filter((item) => item.unitsInStock > 0).map((item) => {
            if(item.unitPrice > 20)
                {
                    return(
                    <tr style={{backgroundColor:"red"}} key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.unitsInStock}</td>
                        <td>{item.unitPrice}</td>
                        <td>{item.quantityPerUnit}</td>
                    </tr>
                    )
                }
                    return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.unitsInStock}</td>
                        <td>{item.unitPrice}</td>
                        <td>{item.quantityPerUnit}</td>
                    </tr>
                    )
                }
            )
            }
            </tbody>
        </table>
    </>
  )
}

export default ProductList
