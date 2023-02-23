import {useState} from 'react'

function SupplierForm({isLoading,setIsLoading,getData}) {
  
  const [companyName, setCompanyName] = useState("")
  const [contactName, setContactName] = useState("")

  const add = () => {
    const newSupplier = {
        companyName: companyName,
        contactName: contactName,
        contactTitle: "Sales Representative",
        address: 
        {
          street: "170 Prince Edward Parade Hunter's Hill",
          city: "Sydney",
          region: "NSW",
          postalCode: 2042,
          country: "Australia",
          phone: "(02) 555-5914"
        }
        };
        fetch('https://northwind.vercel.app/api/suppliers', {
          method: 'POST',
          body: JSON.stringify(newSupplier),
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
        })
        .then(res => {
          setIsLoading(true);
          getData();
          setCompanyName("");
          setContactName("")
        })
        .catch((err) => {
            console.log("POST error ", err);
          }); 
  }

  return (
    <>
            <div>
                <input type='text' placeholder='Enter Company Name' value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            </div>
            <div>
                <input type='text' placeholder='Enter Contact Name' value={contactName} onChange={(e) => setContactName(e.target.value)} />
            </div>
            <div>
                <button onClick={add}>Add</button>
            </div>
      </>
  )
}

export default SupplierForm