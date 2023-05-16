import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
const axiosService = axios.create({
    baseUrl: "http://localhost:8000",
    headers: {
        "Content-Type": "application/json",
    },
});


axiosService.interceptors.request.use(async (config) => {
    /***
     * Retrieve access token form localstorage
     * and adding it to the headers of the request
     **/
    const {access} = JSON.parse(localStorage.getItem("auth"));
    config.headers.Authorization = `Bearer ${access}`;
    return config;
});

axiosService.interceptors.response.use(
    (response) => { Promise.resolve(response) },
    (error) => { Promise.reject(error) },
);
const refreshAuthLogic = async (failedRequest) => {
    const { refresh } = JSON.parse(localStorage.getItem("auth"));
 return axios
   .post("/refresh/token/", null, {
     baseURL: "http://localhost:8000",
     headers: {
       Authorization: `Bearer ${refresh}`,
     },

   })
   .then((resp) => {

     const { access, refresh } = resp.data;
     failedRequest.response.config.headers["Authorization"] = "Bearer " + access;
     localStorage.setItem("auth", JSON.stringify({
                                   access, refresh }));

   })
   .catch(() => {
     localStorage.removeItem("auth");
   });

};

createAuthRefreshInterceptor(axiosService, refreshAuthLogic);

export function fetcher(url) {
    return axiosService.get(url).then((res) => res.data);
}

export default axiosService;




