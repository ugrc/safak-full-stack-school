"use client";

import { z } from "zod";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(20),
});
type SignUpSchemaType = z.infer<typeof SignUpSchema>;

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

  //we should here call like API or something...

  // const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => console.log(data);
  const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => console.log(data);

  const onError: SubmitErrorHandler<SignUpSchemaType> = (data) =>
    console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError) } className="flex flex-col">
      <input className="input" placeholder="email" {...register("email")} />
      {errors.email && (
        <span className="text-red-600">{errors.email.message}</span>
      )}

      <input
        className="input"
        placeholder="password"
        {...register("password")}
      />

      {errors.password && (
        <span className="text-red-600">{errors.password.message}</span>
      )}

      <button type="submit">submit!</button>
    </form>
  );
}
