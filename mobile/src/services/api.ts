import axios from "axios";

export const localhost = "192.168.1.101";
export const port = "3333";

export const api = axios.create({
  baseURL: `http://${localhost}:${port}`,
});
