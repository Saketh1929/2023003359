const axios = require("axios");

let accessToken = "";

const setToken = (token) => {
  accessToken = token;
};

const Log = async (stack, level, packageName, message) => {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Log Error:",
      error.response?.data || error.message
    );
  }
};

module.exports = {
  Log,
  setToken,
};