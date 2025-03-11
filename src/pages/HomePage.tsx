import { LoginForm } from "@/components";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4">
        <LoginForm />
      </div>
      <div className="flex justify-between items-center text-center text-sm">
        <Link to={"#"} className="underline underline-offset-4">
          비밀번호 찾기
        </Link>
        <Link to={"/signup"} className="underline underline-offset-4">
          회원 가입
        </Link>
      </div>
    </div>
  );
}
