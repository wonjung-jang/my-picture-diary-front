import { Control, Controller } from "react-hook-form";
import { InputWithButton } from "./InputWithButton";
import { UserSignupForm } from "@/types";
import { useAuthEmail } from "@/hooks/useAuthEmail";
import { Dispatch, SetStateAction } from "react";

interface EmailVerifyInput {
  control: Control<UserSignupForm, any>;
  onChangeAuthEmail: Dispatch<SetStateAction<boolean>>;
}

export const EmailVerifyInput = (props: EmailVerifyInput) => {
  const { control, onChangeAuthEmail } = props;
  const { isAuthEmail, errorMessage, sendEmail } = useAuthEmail();
  const onClickSendCode = (email: string) => {
    sendEmail(email);
    onChangeAuthEmail(isAuthEmail);
  };

  return (
    <Controller
      control={control}
      name="email"
      rules={{ required: true }}
      render={({ field }) => (
        <InputWithButton
          id="email"
          type="email"
          placeholder="이메일을 입력해주세요."
          error={errorMessage}
          {...field}
          buttonLabel="전송"
          onButtonClick={() => onClickSendCode(field.value)}
        />
      )}
    />
  );
};
