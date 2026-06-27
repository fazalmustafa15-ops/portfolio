import axios from "axios";

const api = axios.create({
  baseURL: "https://portfolio-backend-314f.onrender.com/api",
  timeout: 15000,
});

export default api;