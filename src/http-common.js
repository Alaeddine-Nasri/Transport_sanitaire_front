import axios from "axios";
export default axios.create({
  baseURL: "https://apitransport.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
