import axios from "axios";

export const getApi = axios.create({
  //development
  // baseURL: "http://127.0.0.1:8080",

  //Deployment
  baseURL: "https://uncoverback-endv2-production.up.railway.app"
});
