import React from "react";
import { Input, Label } from "./ui";
import { ErrorMessage } from "./ErrorMessage";

interface TextFieldProps extends React.ComponentProps<"input"> {
  id: string;
  label: string;
  error?: string;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ id, label, error, ...props }: TextFieldProps, ref) => {
    return (
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor={id}>{label}</Label>
        </div>
        <Input id={id} {...props} ref={ref} />
        {error && <ErrorMessage error={error} />}
      </div>
    );
  }
);
