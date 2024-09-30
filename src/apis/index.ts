import axios from "axios";
// import {BASE_URL} from "@utils/constant";

const axiosClient = axios.create({
  // baseURL: "http://localhost:5173/api",
  baseURL: "./",
  headers: { "Content-Type": "application/json" },
});

export default axiosClient;
