import { authClient } from "@/api/common";
import { userIdSchema } from "@/validators";
import { useState } from "react";

export const useDuplicateUserId = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDuplicate, setIsDuplicate] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const checkDuplicate = async (useId: string) => {
    setIsLoading(true);
    const result = userIdSchema.safeParse(useId);
    if (!result.success) {
      const errorMessage = result.error.errors[0].message;
      setIsDuplicate(false);
      setErrorMessage(errorMessage);
      setIsLoading(false);
      return;
    }

    try {
      const response = await authClient.post("/auth/duplicate", { useId });
      setIsDuplicate(true);
      setErrorMessage("");
      return response.data;
    } catch (error: any) {
      const serverMessage = error.response.data.message;
      setIsDuplicate(false);
      setErrorMessage(serverMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isDuplicate, errorMessage, checkDuplicate };
};
