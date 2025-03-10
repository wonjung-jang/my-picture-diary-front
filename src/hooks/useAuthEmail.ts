import { authClient } from "@/api/common";
import { emailSchema } from "@/validators";
import { useState } from "react";

export const useAuthEmail = () => {
  const [isAuthEmail, setIsAuthEmail] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const sendEmail = async (email: string) => {
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setIsAuthEmail(false);
      setErrorMessage("올바르지 않는 이메일 형식입니다.");
      return;
    }

    try {
      const response = await authClient.post("/auth/send/code", { email });
      setIsAuthEmail(true);
      setErrorMessage("");
      return response;
    } catch (error: any) {
      const serverMessage = error.response.data.message;
      setIsAuthEmail(false);
      setErrorMessage(serverMessage);
    }
  };

  return { isAuthEmail, errorMessage, sendEmail };
};
