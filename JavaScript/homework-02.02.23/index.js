const customerData = await fetch(
  "https://northwind.vercel.app/api/customers"
).then((response) => response.json());

//1)DOM Manipulation
customerData.map((customer) => {
  const trElement = document.createElement("tr");

  const tdId = document.createElement("td");
  tdId.innerHTML = customer.id;

  const tdCompanyName = document.createElement("td");
  tdCompanyName.innerHTML = customer.companyName;

  const tdContactName = document.createElement("td");
  tdContactName.innerHTML = customer.contactName;

  const tdCity = document.createElement("td");
  tdCity.innerHTML = customer.address.city;

  trElement.appendChild(tdId);
  trElement.appendChild(tdCompanyName);
  trElement.appendChild(tdContactName);
  trElement.appendChild(tdCity);

  document.getElementById("customers").appendChild(trElement);
});

//2) kaç adet customer var?
console.log(customerData.length, "adet customer var");

//3) a ( küçük veya büyük harf) ile başlayan customerları console a yaz
const filteredCustomers = customerData.filter((customer) =>
  customer.companyName.toLowerCase().startsWith("a")
);
console.log("3. A veya a harfi ile başlayanlar! ", filteredCustomers);

//4) Country 'UK' olan customerları console a yaz
const countryFilteredCustomers = customerData.filter(
  (customer) => customer.address.country == "UK"
);
console.log("UK", countryFilteredCustomers);

//5) customer ları companyName e göre sırala ( sort )
const sortedCustomers = customerData.sort((a, b) => {
  return a.companyName.localeCompare(b.companyName);
});
console.log("companyName sort", sortedCustomers);

//6) id si "DUMON" olan customer ı console a yaz! tek bir object
const idFilteredCustomer = customerData.find(
  (customer) => customer.id == "DUMON"
);
console.log(idFilteredCustomer);

//Telefon numarası 1 ile başlayanları console a yaz
const phoneFiltered = customerData.filter((customer) =>
  customer.address.phone.replace(/\D+/g, "").startsWith("1")
);
console.log(phoneFiltered);

//8)Telefon numaralarını "4065555834" formatta console a yaz
const formattedPhone = customerData.map((customer) =>
  customer.address.phone.replace(/\D+/g, "")
);
console.log(formattedPhone);
