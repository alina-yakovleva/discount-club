import Axios from "axios";

export const axios = Axios.create({
  timeout: 1000,
  headers: {
    accept: "application/json",
    Authorization: "435b7c13-ecaf-4265-83c8-186cca3242cc",
  },
});
