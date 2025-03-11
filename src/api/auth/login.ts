import { UserLoginRequest, LoginResponse } from "@/types";
import { authClient } from "../common";
import axios from "axios";

export const login = async (requestData: UserLoginRequest): Promise<LoginResponse> => {
  try {
    const response = await authClient.post<LoginResponse>("/auth/login", requestData);
    const { accessToken } = response.data;
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    return response.data;
  } catch (error: any) {
    const serverMessage = error.response?.data?.message;
    throw new Error(serverMessage || "아이디 또는 비밀번호가 일치하지 않습니다.");
  }
};
