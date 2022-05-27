import Axios from "axios";

const TOKEN = process.env.REACT_APP_TOKEN || "";

export const axios = Axios.create({
  timeout: 1000,
  headers: {
    accept: "application/json",
    Authorization: TOKEN,
  },
});
