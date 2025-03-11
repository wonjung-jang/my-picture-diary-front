import { authClient } from "@/api/common";
import { userIdSchema } from "@/validators";
import { useState } from "react";

export const useDuplicateUserId = () => {
  const [isDuplicate, setIsDuplicate] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const checkDuplicate = async (useId: string) => {
    const result = userIdSchema.safeParse(useId);
    if (!result.success) {
      setIsDuplicate(false);
      setErrorMessage("아이디는 4자 이상 16자 이하로 작성해야 합니다.");
      return;
    }

    try {
      const response = await authClient.post("/auth/send/code", { useId });
      setIsDuplicate(true);
      setErrorMessage("");
      return response.data;
    } catch (error: any) {
      const serverMessage = error.response.data.message;
      setIsDuplicate(false);
      setErrorMessage(serverMessage);
    }
  };

  return { isDuplicate, errorMessage, checkDuplicate };
};
