import { Input, Label } from "./ui";

interface TextFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  isRequired: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextField(props: TextFieldProps) {
  const { id, label, type, placeholder, isRequired, value, onChange } = props;

  return (
    <div className="grid gap-2">
      <div className="flex items-center">
        <Label htmlFor={id}>{label}</Label>
      </div>
      <Input id={id} type={type} placeholder={placeholder} required={isRequired} value={value} onChange={onChange} />
    </div>
  );
}
