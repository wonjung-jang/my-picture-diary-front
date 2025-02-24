import { Button, TextField } from "@/components";
import { useLoginMutation } from "@/hooks";
import { userSchema } from "@/validators";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserRequest } from "@/types";
import { ErrorMessage } from "@/components/ErrorMessage";

export function LoginPage() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });
  const { mutate: login, isError, error: apiError } = useLoginMutation();

  const onSubmit = (data: UserRequest) => {
    login(data);
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
                {...field}
                id="email"
                label="이메일"
                error={errors.email?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                id="password"
                label="비밀번호"
                type="password"
                error={errors.password?.message}
              />
            )}
          />
          {isError && <ErrorMessage error={apiError.message} />}
          <Button type="submit" className="w-full">
            로그인
          </Button>
        </div>
        <div className="text-center text-sm">
          <a href="#" className="underline underline-offset-4">
            비밀번호 찾기
          </a>
        </div>
      </div>
    </form>
  );
}
