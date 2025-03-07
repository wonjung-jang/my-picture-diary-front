import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originRequest = error.config;
    if (error.response.status === 401 && originRequest._retry) {
      originRequest._retry = true;
      try {
        const { data } = await axios.post(
          "http://localhost:3000/auth/refresh",
          {},
          { withCredentials: true }
        );
        const { accessToken } = data;

        axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        originRequest.headers.Authorization = `Bearer ${accessToken}`;
        return apiClient(originRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
