import axios from "axios";

const http = axios.create({
  // baseURL: "http://127.0.0.1:8000",
  timeout: 1000,
  headers: {
    common: {
      // Authorization: AUTH_TOKEN,
    },
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
http.interceptors.request.use(
  (config) => {
    //添加全局请求添加token
    const token = localStorage.getItem("token");
    config.headers.token = token;
    return config;
  },
  (error) => {}
);
http.interceptors.response.use((res) => {
  if (res.data) {
    let code = res.data.code;
    let response = res.data;
    if (code == 200) {
      return response;
    }
  } else {
    return {
      data: [],
    };
  }
});
export default http;
