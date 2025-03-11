import { SpinnerButton, TextField } from "@/components";
import { UserIdInput } from "@/components/UserIdInput";
import { useSignup, useSignupForm } from "@/hooks";
import { UserSignupForm } from "@/types";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function SignupPage() {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useSignupForm();
  const { signup, isLoading } = useSignup();
  const [isAvailableId, setIsAvailableId] = useState<boolean>(false);
  const navigate = useNavigate();
  const isAllVerify = isAvailableId && isValid;

  const onSubmit = (data: UserSignupForm) => {
    const { passwordConfirmation: _, ...requestData } = data;
    signup(requestData);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-6">
        <div className="grid gap-6">
          <UserIdInput control={control} onChangeAvailableId={setIsAvailableId} />
          <Controller
            control={control}
            name="name"
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                id="name"
                type="text"
                label="이름"
                placeholder="이름을 입력해주세요."
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
                placeholder="비밀번호를 입력해주세요."
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
                placeholder="비밀번호를 입력해주세요."
                error={errors.passwordConfirmation?.message}
                {...field}
              />
            )}
          />
          <SpinnerButton
            type="submit"
            disabled={!isAllVerify}
            isLoading={isLoading}
            defaultText="회원가입"
          />
        </div>
      </div>
    </form>
  );
}
