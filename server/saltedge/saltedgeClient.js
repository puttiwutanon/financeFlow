import axios from "axios";

const saltedge = axios.create({
  baseURL: process.env.SALTEDGE_API_BASE,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "App-id": process.env.SALTEDGE_APP_ID,
    "Secret": process.env.SALTEDGE_SECRET,
  },
});

export default saltedge;