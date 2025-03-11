import { Control, Controller } from "react-hook-form";
import { InputWithButton } from "./InputWithButton";
import { UserSignupForm } from "@/types";
import { useDuplicateUserId } from "@/hooks";
import { Dispatch, SetStateAction } from "react";

interface UserIdInputProps {
  control: Control<UserSignupForm, any>;
  onChangeAvailableId: Dispatch<SetStateAction<boolean>>;
}

export const UserIdInput = (props: UserIdInputProps) => {
  const { control, onChangeAvailableId } = props;
  const { isLoading, isDuplicate, errorMessage, checkDuplicate } = useDuplicateUserId();
  const onClickDuplicate = (userId: string) => {
    checkDuplicate(userId);
    onChangeAvailableId(isDuplicate);
  };

  return (
    <Controller
      control={control}
      name="userId"
      rules={{ required: true }}
      render={({ field }) => (
        <InputWithButton
          id="userId"
          type="text"
          placeholder="아이디를 입력해주세요."
          error={errorMessage}
          {...field}
          buttonLabel="중복 검사"
          isLoading={isLoading}
          onButtonClick={() => onClickDuplicate(field.value)}
        />
      )}
    />
  );
};
