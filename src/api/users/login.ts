import { UserResponse } from "@/types";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<UserResponse> => {
  const response = await fetch("http://localhost:3000/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("로그인 실패");
  }

  return response.json();
};
