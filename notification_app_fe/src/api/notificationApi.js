import axios from "axios";

const BASE_URL = "http://4.224.186.213/evaluation-service";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrcmVkZHlzYUBnaXRhbS5pbiIsImV4cCI6MTc4MDgxODkwMiwiaWF0IjoxNzgwODE4MDAyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNDgxMjdkMGMtODI4MS00YzA1LTgyN2ItZmRiMTY4YjRiZDM4IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoia29uYXBhbGxlIHJlZGR5IHNha2V0aCIsInN1YiI6ImQ2MjQ2YTI5LTNjNDEtNGNkNy05MTMxLWNjODljZjdjOGEyYyJ9LCJlbWFpbCI6ImtyZWRkeXNhQGdpdGFtLmluIiwibmFtZSI6ImtvbmFwYWxsZSByZWRkeSBzYWtldGgiLCJyb2xsTm8iOiIyMDIzMDAzMzU5IiwiYWNjZXNzQ29kZSI6IndnS3RnWiIsImNsaWVudElEIjoiZDYyNDZhMjktM2M0MS00Y2Q3LTkxMzEtY2M4OWNmN2M4YTJjIiwiY2xpZW50U2VjcmV0IjoiYkV0V2JQYmp4eUZSWkFSVCJ9.NwBK9A3VKFy_JAbLctEroNqrQZHu-KT-zTCh_FG0fbc";

export const fetchNotifications = async (
  page = 1,
  limit = 20,
  notificationType = ""
) => {
  try {
    let url = `${BASE_URL}/notifications`;

    if (notificationType) {
      url += `&notification_type=${notificationType}`;
    }

    console.log("=================================");
    console.log("URL:", url);
    console.log("TOKEN:", TOKEN);

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    console.log("SUCCESS RESPONSE:");
    console.log(response.data);

    return response.data.notifications || [];
  } catch (error) {
    console.log("=================================");
    console.log("FULL ERROR RESPONSE:");
    console.log(error.response);

    console.log("ERROR DATA:");
    console.log(error.response?.data);

    console.log("STATUS:");
    console.log(error.response?.status);

    return [];
  }
};