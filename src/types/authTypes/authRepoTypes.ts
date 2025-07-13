export type existingUserOutput = {
  id: string;
  fullName: string;
  email: string;
  password: string;
};

export type createUserInput = {
  fullName: string;
  email: string;
  hashedPassword: string;
};
export type createUserOutput = {
  id: string;
  fullName: string;
  email: string;
};
