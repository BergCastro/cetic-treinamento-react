import axios from "axios";

const api = axios.create({
  baseURL: "http://172.17.66.111:3333",
});

export default api;
