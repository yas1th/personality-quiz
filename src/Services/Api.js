import axios from "axios";

export const URL = "/api/";

const API = axios.create({
  baseURL: URL
});
