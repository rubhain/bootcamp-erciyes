//Axios Interceptors

//const instance = axios.create();
//instance.interceptors.request.use(function () {/*...*/});
const instance = axios.create();

// Add a request interceptor
const myInterceptor = instance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = "";
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
