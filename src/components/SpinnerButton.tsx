import { ComponentProps } from "react";
import { Spinner } from "./Spinner";
import { Button } from "./ui";

interface SpinnerButtonProps extends ComponentProps<"button"> {
  disabled?: boolean;
  isLoading: boolean;
  defaultText: string;
}

export function SpinnerButton(props: SpinnerButtonProps) {
  const { disabled, isLoading, defaultText, ...rest } = props;
  return (
    <>
      <Button type="button" className="w-full" disabled={disabled} {...rest}>
        {isLoading ? <Spinner /> : defaultText}
      </Button>
    </>
  );
}
