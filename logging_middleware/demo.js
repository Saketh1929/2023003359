const { Log, setToken } = require("./logger");

setToken(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrcmVkZHlzYUBnaXRhbS5pbiIsImV4cCI6MTc4MDgxNjU0OCwiaWF0IjoxNzgwODE1NjQ4LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMmY0MWFkMzQtZjg3ZC00ZmI5LWIwY2ItMDE0NTQyNGI5YmU3IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoia29uYXBhbGxlIHJlZGR5IHNha2V0aCIsInN1YiI6ImQ2MjQ2YTI5LTNjNDEtNGNkNy05MTMxLWNjODljZjdjOGEyYyJ9LCJlbWFpbCI6ImtyZWRkeXNhQGdpdGFtLmluIiwibmFtZSI6ImtvbmFwYWxsZSByZWRkeSBzYWtldGgiLCJyb2xsTm8iOiIyMDIzMDAzMzU5IiwiYWNjZXNzQ29kZSI6IndnS3RnWiIsImNsaWVudElEIjoiZDYyNDZhMjktM2M0MS00Y2Q3LTkxMzEtY2M4OWNmN2M4YTJjIiwiY2xpZW50U2VjcmV0IjoiYkV0V2JQYmp4eUZSWkFSVCJ9.XNPV-3ADuk426ADab-gYblf924nR_1N7AA6YYqzG3c0"
);

(async () => {
  const result = await Log(
    "frontend",
    "info",
    "middleware",
    "Logger initialized successfully"
  );

  console.log(result);
})();