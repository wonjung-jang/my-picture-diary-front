import { login } from "@/api/users/login";
import { UserResponse } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLoginMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({email, password}: {email: string, password: string}) => login({email, password}),
        onSuccess: (data: UserResponse) => {
            queryClient.setQueryData(['user'], data);
        },
        onError: (error: Error) => {
            console.log(error);
        },
    })
}