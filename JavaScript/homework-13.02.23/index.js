//1) Ekrana 4 input konulacak ( companyName, contactName ...) ve bir post işlemi yapılacak ( axios veya fetch ) yeni bir supplier eklenecek
const addBtn = () => {
  let newSupplier = {
    companyName: document.getElementById("companyName").value,
    contactName: document.getElementById("contactName").value,
    contactTitle: document.getElementById("contactTitle").value,
    address: { city: document.getElementById("address").value },
  };

  axios
    .post("https://northwind.vercel.app/api/suppliers", newSupplier)
    .then((res) => {
      console.log("Response ", res);
      console.log("Success!");
    });

  document.getElementById("companyName").value = "";
  document.getElementById("contactName").value = "";
  document.getElementById("contactTitle").value = "";
  document.getElementById("address").value = "";
};
//2) ul içerinde companyName ler gösterilecek (axios veya fetch. category örneği var)
const domList = () => {
  document.getElementById("suppliers").innerHTML = "";
  axios.get("https://northwind.vercel.app/api/suppliers").then((res) => {
    let categories = res.data;

    categories.map((element) => {
      let liElement = document.createElement("li");
      liElement.innerHTML = element.companyName;
      document.getElementById("suppliers").appendChild(liElement);
    });
  });
};
domList();
//3) Ekrana bir input bir buton koy. Butona tıkladığında inputtan aldığı id ye uygun supplier ı silsin!
const deleteSupplierById = () => {
  axios
    .delete(
      "https://northwind.vercel.app/api/suppliers/" +
        document.getElementById("supplierId").value
    )
    .then((res) => {
      console.log("Success!");
    })
    .catch((err) => {
      console.log("Error");
    });
  document.getElementById("supplierId").value = "";
};

//Token ile APIden veri çekilmesi
//4)Axios
//5)Fetch
fetch(
  "https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=kayseri",
  {
    method: "GET",
    headers: {
      Authorization: "apikey 7IAmnwEpX7NXiZlDLS0Ef6:3PvCYiRgxVtWqxuOmB7pMv",
    },
  }
)
  .then((res) => res.json())
  .then((data) => {
    console.log("Fetch Success!", data);
  })
  .catch((err) => {
    console.log("error ", err);
  });

//Axios Interceptors
// Add a request interceptor

const instance = axios.create();

const myInterceptor = instance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] =
      "apikey 7IAmnwEpX7NXiZlDLS0Ef6:3PvCYiRgxVtWqxuOmB7pMv";
    console.log("Axios Request!");
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    console.log("Request error");
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("Axios Interceptors Response Success!", response.data);
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("Response error");
    return Promise.reject(error);
  }
);

const dltKey = () => instance.interceptors.request.eject(myInterceptor); //If you need to remove an interceptor later you can.

const apiCallBtn = () => {
  instance.get(
    "https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=Kayseri"
  );

  axios.get(
    "https://api.collectapi.com/health/dutyPharmacy?ilce=kocasinan&il=kayseri"
  );
};

//const instance = axios.create();
//instance.interceptors.request.use(function () {/*...*/});
