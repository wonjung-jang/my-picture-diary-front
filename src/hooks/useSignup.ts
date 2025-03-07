import { signup } from "@/api";
import { UserSignupRequest } from "@/types";

export const useSignup = () => {
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

  return { signup: signupFn };
};
