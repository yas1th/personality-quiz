import axios from "axios";

export const URL = "/api/";

export const API = axios.create({
  baseURL: URL
});
