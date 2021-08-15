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
    .catch((err) => {
      err.message.includes("Network Error")
        ? (datasToReturn.data = {
            status: 404,
            message: "Erreur du serveur, veuillez réessayer plus tard",
          })
        : (datasToReturn.data = {
            status: 400,
            message: "Email ou mot de passe incorrect",
          });
    });

  return datasToReturn;
}

export async function getUserDatas(token) {
  let datasToReturn = {};
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  await Axios.post(`/profile`, {}, header)
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

export async function editProfileDatas(token, firstName, lastName) {
  let datasToReturn = {};

  const body = {
    firstName: firstName,
    lastName: lastName,
  };

  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  await Axios.put(`/profile`, body, header)
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
