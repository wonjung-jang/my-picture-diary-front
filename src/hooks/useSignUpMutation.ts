import { signUp } from "@/api";
import { UserResponse } from "@/types";
import { useMutation } from "@tanstack/react-query";

export const useSignUpMutation = () => {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signUp({ email, password }),
    onSuccess: (data: UserResponse) => {
      console.log(data);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });
};
