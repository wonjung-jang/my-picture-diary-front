import axios from "axios";

export const authClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});
