import axios from "axios";

export const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/albums/1/photos",
});
