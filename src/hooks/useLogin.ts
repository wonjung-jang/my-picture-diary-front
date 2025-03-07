import { login } from "@/api/auth/login";
import { UserLoginRequest } from "@/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  const loginFn = async (requestData: UserLoginRequest) => {
    try {
      await login(requestData);
      setIsError(false);
      setErrorMessage("");
      navigate("/");
    } catch (error: any) {
      setIsError(true);
      setErrorMessage(error.message);
    }
  };

  return { login: loginFn, isError, errorMessage };
};
