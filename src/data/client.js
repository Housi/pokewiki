import Axios from "axios";

const client = Axios.create({
  baseURL: "http://localhost:3001/"
});

export default client;
