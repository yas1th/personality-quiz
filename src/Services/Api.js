/**
 * Created the Axios Instance to have all the default values to make API calls
 */

import axios from "axios";

export const URL = "/api/";

export const API = axios.create({
  baseURL: URL
});
