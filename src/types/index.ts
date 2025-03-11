export type UserSignupForm = {
  userId: string;
  name: string;
  password: string;
  passwordConfirmation: string;
};

export type UserSignupRequest = Omit<UserSignupForm, "passwordConfirmation">;

export type UserLoginRequest = {
  userId: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
};

export type UserResponse = {
  id: string;
  name: string;
  userId: string;
};
