import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:3001/api/v1/user";

export default async function apiLogin(email, password) {
  let datasToReturn = {};

  const body = {
    email: email,
    password: password,
  };

  await Axios.post(`/login`, body)
    .then((response) => {
      datasToReturn = response.data;
    })
    .catch(() => {
      datasToReturn.data = {
        status: 401,
      };
    });

  return datasToReturn;
}