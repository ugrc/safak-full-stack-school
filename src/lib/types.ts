import { FieldError, UseFormRegister } from "react-hook-form";

export type FormData = {
  email: string;
  githubUrl: string;
  yearsOfExperience: string;
  password: string;
  confirmPassword: string;
};

export type ValidFieldNames =
  | "email"
  | "githubUrl"
  | "yearsOfExperience"
  | "password"
  | "confirmPassword";

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

