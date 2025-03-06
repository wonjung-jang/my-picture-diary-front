import { Button, TextField } from "@/components";
import { useSignUpMutation } from "@/hooks";
import { UserSignupForm } from "@/types";
import { signupSchema } from "@/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

export function SignupPage() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserSignupForm>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      passwordConfirmation: "",
    },
    mode: "onSubmit",
  });
  const { mutate: signUp } = useSignUpMutation();

  const onSubmit = (data: UserSignupForm) => {
    const { passwordConfirmation: _, ...requestData } = data;
    signUp(requestData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-6">
        <div className="grid gap-6">
          <Controller
            control={control}
            name="email"
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                id="email"
                type="email"
                label="이메일"
                error={errors.email?.message}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="name"
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                id="name"
                type="text"
                label="이름"
                error={errors.name?.message}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                id="password"
                type="password"
                label="비밀번호"
                error={errors.password?.message}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="passwordConfirmation"
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                id="passwordConfirmation"
                type="password"
                label="비밀번호 확인"
                error={errors.passwordConfirmation?.message}
                {...field}
              />
            )}
          />
          <Button type="submit" className="w-full">
            회원가입
          </Button>
        </div>
      </div>
    </form>
  );
}
