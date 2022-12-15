import axios from "axios";

export const localhost = "172.20.114.135";
export const port = "3333";


export const api = axios.create({
  baseURL: `http://${localhost}:${port}`,
});
