import { Button, TextField } from "@/components";

export function SignupPage() {
  return (
    <form>
      <div className="grid gap-6">
        <div className="grid gap-6">
          <TextField id="email" type="email" label="이메일" isRequired={true} />
          <TextField id="password" type="password" label="비밀번호" isRequired={true} />
          <TextField
            id="passwordConfirmation"
            type="password"
            label="비밀번호 확인"
            isRequired={true}
          />
          <Button type="submit" className="w-full">
            회원가입
          </Button>
        </div>
      </div>
    </form>
  );
}
