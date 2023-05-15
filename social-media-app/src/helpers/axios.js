import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
const axiosService = axios.create({
    baseUrl: "http://localhost:8000",
    headers: {
        "Content-Type": "application/json",
    },
});
