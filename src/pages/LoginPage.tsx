import { Button, TextField } from "@/components";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

interface UserResponse {
  id: string;
  email: string;
}

const login = async ({ email, password }: { email: string, password: string }): Promise<UserResponse> => {
  const response = await fetch('http://localhost:3000/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('로그인 실패');
  }

  return response.json();
};

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const mutation = useMutation<UserResponse, Error, { email: string; password: string }>({
    mutationFn: login,
    onSuccess: (data: UserResponse) => {
      console.log(data);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6">
        <div className="grid gap-6">
          <TextField id="email" type="email" label="이메일" isRequired={true} value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField id="password" type="password" label="비밀번호" isRequired={true} value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit" className="w-full">
            로그인
          </Button>
        </div>
        <div className="text-center text-sm">
          <a href="#" className="underline underline-offset-4">
            비밀번호 찾기
          </a>
        </div>
      </div>
    </form>
  );
}
