import { ComponentProps } from "react";
import { Input, Label } from "./ui";

interface TextFieldProps extends ComponentProps<"input"> {
  label: string;
  error?: string;
}

export function TextField({ id, label, error, ...props }: TextFieldProps) {
  return (
    <div className="grid gap-2">
      <div className="flex items-center">
        <Label htmlFor={id}>{label}</Label>
      </div>
      <Input {...props} />
      {error && (
        <p className="text-sm font-medium leading-none text-red-500">{error}</p>
      )}
    </div>
  );
}
