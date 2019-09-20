import Axios from "axios";

const client = Axios.create({
  baseURL: "http://localhost:3000/"
});

export default client;
