import { loginSchema } from "@/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useLoginForm = () => {
  return useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userId: "",
      password: "",
    },
    mode: "onSubmit",
  });
};
