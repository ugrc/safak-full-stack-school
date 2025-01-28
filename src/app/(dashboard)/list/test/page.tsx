"use client";

// https://www.youtube.com/watch?v=RxMFztEB6a4
// https://react-hook-form.com/get-started#TypeScript

import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
};

const Page = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <form onSubmit={onSubmit}>
      <label>First Name</label>
      <input {...register("firstName")} />
      <label>Last Name</label>
      <input {...register("lastName")} />
      <button
        type="button"
        onClick={() => {
          setValue("lastName", "Luo");
        }}
      >
        SetValue
      </button>
      <button type="submit">Submit</button> 

    </form>
  );
};

export default Page;
