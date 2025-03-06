export type UserSignupForm = {
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
};

export type UserSignupRequest = Omit<UserSignupForm, "passwordConfirmation">;

export type UserLoginRequest = {
  email: string;
  password: string;
};

export type UserResponse = {
  id: string;
  name: string;
  email: string;
};
