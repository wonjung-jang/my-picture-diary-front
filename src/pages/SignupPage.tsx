import { Button, TextField } from "@/components";
import { useSignUpMutation } from "@/hooks";
import { useState } from "react";

export function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const { mutate: signUp } = useSignUpMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUp({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6">
        <div className="grid gap-6">
          <TextField
            id="email"
            type="email"
            label="이메일"
            isRequired={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="password"
            type="password"
            label="비밀번호"
            isRequired={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            id="passwordConfirmation"
            type="password"
            label="비밀번호 확인"
            isRequired={true}
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <Button type="submit" className="w-full">
            회원가입
          </Button>
        </div>
      </div>
    </form>
  );
}
