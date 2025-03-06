import { z } from "zod";

export const emailSchema = z
  .string({ required_error: "이메일을 입력해주세요." })
  .email("이메일 형식으로 입력해주세요.");

const passwordSchema = z
  .string({ required_error: "비밀번호를 입력해주세요." })
  .min(6, { message: "비밀번호는 6자 이상이어야 합니다." })
  .max(16, { message: "비밀번호는 16자 이하여야 합니다." })
  .regex(/\d/, { message: "비밀번호는 숫자를 포함해야 합니다." })
  .regex(/[^\w\s]/, { message: "비밀번호는 특수문자를 포함해야 합니다." });

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const signupSchema = z
  .object({
    email: emailSchema,
    name: z.string({ required_error: "이름을 입력해주세요." }),
    password: passwordSchema,
    passwordConfirmation: passwordSchema,
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordConfirmation"],
  });
