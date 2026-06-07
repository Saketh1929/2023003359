const axios = require("axios");

async function getToken() {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/auth",
      {
        email: "kreddysa@gitam.in",
        name: "Konapalle Reddy Saketh",
        rollNo: "2023003359",
        accessCode: "wgKtgZ",
        clientID: "d6246a29-3c41-4cd7-9131-cc89cf7c8a2c",
        clientSecret: "bEtWbPbjxyFRZART"
      }
    );

    console.log(response.data);
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
}

getToken();