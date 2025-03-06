import { UserSignupRequest, UserResponse } from "@/types";

export const signUp = async (requestData: UserSignupRequest): Promise<UserResponse> => {
  const response = await fetch("http://localhost:3000/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });

  if (!response.ok) {
    throw Error("회원가입 실패");
  }

  return response.json();
};
