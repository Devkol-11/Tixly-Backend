export type serviceSignUpInput = {
  fullName: string;
  email: string;
  password: string;
};
export type serviceSignUpOutput = {
  id: string;
  fullName: string;
  email: string;
  accessToken: string;
};
export type serviceSignInInput = {
  fullName: string;
  email: string;
  password: string;
};
export type serviceSignInOutput = {
  fullName: string;
  email: string;
  accessToken: string;
};
