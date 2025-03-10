import { Button, TextField } from "@/components";
import { EmailVerifyInput } from "@/components/EmailVerifyInput";
import { useSignup, useSignupForm } from "@/hooks";
import { UserSignupForm } from "@/types";
import { useState } from "react";
import { Controller } from "react-hook-form";

export function SignupPage() {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useSignupForm();
  const { signup } = useSignup();
  const [isAuthEmail, setIsAuthEmail] = useState<boolean>(false);
  const isAllVerify = isAuthEmail && isValid;

  const onSubmit = (data: UserSignupForm) => {
    const { passwordConfirmation: _, ...requestData } = data;
    signup(requestData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-6">
        <div className="grid gap-6">
          <EmailVerifyInput control={control} onChangeAuthEmail={setIsAuthEmail} />
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
          <Button type="submit" className="w-full" disabled={!isAllVerify}>
            회원가입
          </Button>
        </div>
      </div>
    </form>
  );
}
