import axios from "axios";

const localhost = process.env.LOCALHOST
const port = "3333";

if (!localhost) {
  console.log("Lembre-se de colocar o IP gerado pelo expo no .env com o nome LOCALHOST=seuip");
}

export const api = axios.create({
  baseURL: `http://localhost:${port}`,
});
