"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import { citSchema, CitSchema } from "@/lib/formValidationSchemas";
import { createCit, updateCit } from "@/lib/actions";
import { useFormState } from "react-dom";
import { Dispatch, SetStateAction, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const CitForm = ({
  type,
  data,
  setOpen,
  relatedData,
}: {
  type: "create" | "update";
  data?: any;
  setOpen: Dispatch<SetStateAction<boolean>>;
  relatedData?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CitSchema>({
    resolver: zodResolver(citSchema),
  });

  // AFTER REACT 19 IT'LL BE USEACTIONSTATE

  const [state, formAction] = useFormState(
    type === "create" ? createCit : updateCit,
    {
      success: false,
      error: false,
    }
  );

  const onSubmit = handleSubmit((data) => {
    formAction(data);
  });

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      toast(`Cit has been ${type === "create" ? "created" : "updated"}!`);
      setOpen(false);
      router.refresh();
    }
  }, [state, router, type, setOpen]);

  const { cobs } = relatedData;


  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "新建法规条文" : "修改法规条文"}
      </h1>

      <div className="flex justify-between flex-wrap gap-4">
      {data && (
          <InputField
            label="Id"
            name="id"
            defaultValue={data?.id}
            register={register}
            error={errors?.id}
            hidden
          />
        )}
        <InputField
          label="条文名称"
          name="name"
          defaultValue={data?.name}
          register={register}
          error={errors?.name}
        />
          <InputField
          label="条文内容"
          name="description"
          defaultValue={data?.description}
          register={register}
          error={errors?.name}
        />
   
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">关联控制目标</label>
          <select
            multiple
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("cobs")}
            defaultValue={data?.cobs}
          >
            {cobs.map(
              (cob: { id: string; name: string; description: string }) => (
                <option value={cob.id} key={cob.id}>
                  {cob.name + " " + cob.description }
                </option>
              )
            )}
          </select>
          {errors.cobs?.message && (
            <p className="text-xs text-red-400">
              {errors.cobs.message.toString()}
            </p>
          )}
        </div>
      </div>
      {state.error && (
        <span className="text-red-500">Something went wrong!</span>
      )}
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default CitForm;
