import { Button, TextField } from "@/components";
import { useLogin, useLoginForm } from "@/hooks";
import { Controller } from "react-hook-form";
import { UserLoginRequest } from "@/types";
import { ErrorMessage } from "@/components/ErrorMessage";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useLoginForm();
  const { login, isError, errorMessage } = useLogin();
  const navigate = useNavigate();

  const onSubmit = (data: UserLoginRequest) => {
    login(data);
    navigate("/main");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-6">
        <Controller
          control={control}
          name="userId"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField {...field} id="userId" label="아이디" error={errors.userId?.message} />
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
        {isError && <ErrorMessage error={errorMessage} />}
        <Button type="submit" className="w-full">
          로그인
        </Button>
      </div>
    </form>
  );
}
