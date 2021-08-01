import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:3001/api/v1/user";

export default async function apiLogin(email, password) {
  //   let errorValue = false;
  const body = {
    email: email,
    password: password,
  };
  const datasToReturn = await Axios.post(`/login`, body).catch((err) => {
    console.log(err);
  });
  //   if (!errorValue) {
  //     const { userInfos, keyData, todayScore, score } = datasToReturn.data.data;
  //     return
  //       ...userInfos,
  //       keyData,
  //       todayScore,
  //       score,
  //       getResponse: true,
  //       error: errorValue,
  //     };
  //   }
  //   else {
  return {
    datasToReturn,
  };
  //   }
}
