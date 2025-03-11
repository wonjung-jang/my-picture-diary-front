import { authClient } from "@/api/common";
import { userIdSchema } from "@/validators";
import { useState } from "react";

export const useDuplicateUserId = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const checkDuplicate = async (useId: string) => {
    setIsLoading(true);
    const result = userIdSchema.safeParse(useId);
    if (!result.success) {
      const errorMessage = result.error.errors[0].message;
      setErrorMessage(errorMessage);
      setIsLoading(false);
      return;
    }

    try {
      const response = await authClient.post("/auth/duplicate", { useId });
      setErrorMessage("");
      return response.data;
    } catch (error: any) {
      const serverMessage = error.response.data.message;
      setErrorMessage(serverMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, errorMessage, checkDuplicate };
};
