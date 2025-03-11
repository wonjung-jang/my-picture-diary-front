import { signup } from "@/api";
import { UserSignupRequest } from "@/types";
import { useState } from "react";

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [isError, setIsError] = useState<boolean>(false);
  // const [errorMessage, setErrorMessage] = useState<string>("");

  const signupFn = async (requestData: UserSignupRequest) => {
    // try {
    await signup(requestData);
    // setIsError(false);
    // setErrorMessage("");
    // } catch (error) {
    // setIsError(true);
    // setErrorMessage(error.message);
    // }
  };

  return { signup: signupFn, isLoading };
};
