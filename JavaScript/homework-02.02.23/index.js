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

// ---------- EXTRA ----------

//Aşağıdaki linkten aldığınız dataya göre:

const orderData = await fetch("https://northwind.vercel.app/api/orders").then(
  (response) => response.json()
);

//1) 1996 yılında kaç adet sipariş geçilmiştir?

const yearOrder = orderData.filter((order) => {
  return order.orderDate.includes("1996");
});

console.log(yearOrder.length, "adet siparis gecilmistir.");

//2) Bir seferde en yüksek satışın nedir?
//Math.max(...data.map((o) => o.quantity))

const maxSale = Math.max(
  ...orderData
    .map((order) => {
      const data = order.details;
      return Math.max(...data.map((o) => o.quantity));
    })
    .map((sum) => sum)
);

console.log(maxSale);
//3) USA de toplam satış cirom nedir?
//(unitPrice*quantity*(1-discount))

const turnoverCalc = (item) => {
  const sum = item.unitPrice * item.quantity * (1 - item.discount);
  return sum;
};

const getSum = (total, num) => {
  return total + num;
};

const regionalTurnover = orderData
  .filter((order) => order.shipAddress.country == "USA")
  .map((order) =>
    order.details
      .map((o) => {
        return turnoverCalc(o);
      })
      .reduce(getSum, 0)
  )
  .reduce(getSum, 0);

console.log(regionalTurnover);
