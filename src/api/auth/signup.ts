import { UserSignupRequest, UserResponse } from "@/types";
import { authClient } from "../common";

export const signup = async (requestData: UserSignupRequest): Promise<UserResponse> => {
  try {
    const response = await authClient.post<UserResponse>("/auth/signup", requestData);
    return response.data;
  } catch (error: any) {
    const serverMessage = error.response?.data?.message;
    throw new Error(serverMessage || "회원가입 실패");
  }
};
