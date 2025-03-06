import { UserRequest, UserResponse } from "@/types";

export const login = async (requestData: UserRequest): Promise<UserResponse> => {
  const response = await fetch("http://localhost:3000/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });

  if (!response.ok) {
    throw new Error("이메일 또는 비밀번호가 일치하지 않습니다.");
  }

  return response.json();
};
