import { UserSignupForm } from "@/types";
import { signupSchema } from "@/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useSignupForm = () => {
  return useForm<UserSignupForm>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      userId: "",
      name: "",
      password: "",
      passwordConfirmation: "",
    },
    mode: "onChange",
  });
};
