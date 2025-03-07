import { login } from "@/api/users/login";
import { LoginResponse } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLoginMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      login({ email, password }),
    onSuccess: (data: LoginResponse) => {
      queryClient.setQueryData(["accessToken"], data.accessToken);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });
};
