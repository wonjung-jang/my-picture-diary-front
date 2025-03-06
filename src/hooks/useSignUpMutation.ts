import { signUp } from "@/api";
import { UserResponse, UserSignupRequest } from "@/types";
import { useMutation } from "@tanstack/react-query";

export const useSignUpMutation = () => {
  return useMutation({
    mutationFn: (requestData: UserSignupRequest) => signUp(requestData),
    onSuccess: (data: UserResponse) => {
      console.log(data);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });
};
