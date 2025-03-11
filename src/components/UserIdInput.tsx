import { Control, Controller } from "react-hook-form";
import { InputWithButton } from "./InputWithButton";
import { UserSignupForm } from "@/types";
import { useDuplicateUserId } from "@/hooks";
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";

interface UserIdInputProps {
  isNotDuplicateId: boolean;
  setIsNotDuplicateId: Dispatch<SetStateAction<boolean>>;
  control: Control<UserSignupForm, any>;
}

export const UserIdInput = (props: UserIdInputProps) => {
  const { control, isNotDuplicateId, setIsNotDuplicateId } = props;
  const { isLoading, errorMessage, checkDuplicate } = useDuplicateUserId();

  const onClickDuplicate = (userId: string) => {
    checkDuplicate(userId);
    setIsNotDuplicateId(true);
    toast("사용가능한 아이디입니다.");
  };

  return (
    <Controller
      control={control}
      name="userId"
      rules={{ required: true }}
      render={({ field }) => (
        <InputWithButton
          {...field}
          id="userId"
          type="text"
          placeholder="아이디를 입력해주세요."
          error={errorMessage}
          buttonLabel="중복 검사"
          isLoading={isLoading}
          onButtonClick={() => onClickDuplicate(field.value)}
          disabled={isNotDuplicateId}
        />
      )}
    />
  );
};
