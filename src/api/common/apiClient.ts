import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("myPictureDiaryAccessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originRequest = error.config;
    if (error.response.status === 401 && !originRequest._retry) {
      originRequest._retry = true;
      try {
        const { data } = await axios.post(
          "http://localhost:3000/auth/refresh",
          {},
          { withCredentials: true }
        );
        const { accessToken } = data;

        localStorage.setItem("myPictureDiaryAccessToken", accessToken);
        originRequest.headers.Authorization = `Bearer ${accessToken}`;
        return apiClient(originRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
