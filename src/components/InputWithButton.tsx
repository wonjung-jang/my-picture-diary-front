import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { forwardRef } from "react";
import { ErrorMessage } from "./ErrorMessage";
import { Spinner } from "./Spinner";

interface InputWithButtonProps extends React.ComponentProps<"input"> {
  id: string;
  type: string;
  placeholder: string;
  error?: string;
  buttonLabel: string;
  isLoading: boolean;
  onButtonClick: () => void;
}

export const InputWithButton = forwardRef<HTMLInputElement, InputWithButtonProps>(
  (props: InputWithButtonProps, ref) => {
    const { error, buttonLabel, isLoading, onButtonClick, ...rest } = props;
    return (
      <div className="grid gap-2">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input {...rest} ref={ref} />
          <Button type="button" onClick={onButtonClick}>
            {isLoading ? <Spinner /> : buttonLabel}
          </Button>
        </div>
        {error && <ErrorMessage error={error} />}
      </div>
    );
  }
);
