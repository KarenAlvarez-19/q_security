import axios from "axios";
import { Notify } from "quasar";

const api = "http://192.168.0.104:8080"; //referencia al back

export default {
  get(url, params) {
    return axios
      .get(api + url, params, {
        headers: {
          "Content-Type": "application/json", //cabecera
        },
      })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error;
      });
  },
};
