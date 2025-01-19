"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import { cobSchema, CobSchema } from "@/lib/formValidationSchemas";
import { createCob, updateCob } from "@/lib/actions";
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
  } = useForm<CobSchema>({
    resolver: zodResolver(cobSchema),
  });

  // AFTER REACT 19 IT'LL BE USEACTIONSTATE

  const [state, formAction] = useFormState(
    type === "create" ? createCob : updateCob,
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

  const { cits } = relatedData;

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "新建控制目标" : "修改控制目标"}
      </h1>

      <div className="h-[75vh]  overflow-scroll flex flex-col bg-gray-100 rounded-md p-4">
        <div className="w-full flex flex-col justify-between flex-wrap gap-4">
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
            label="控制目标名称"
            name="name"
            defaultValue={data?.name}
            register={register}
            error={errors?.name}
          />
          <InputField
            label="控制目标内容"
            name="description"
            defaultValue={data?.description}
            register={register}
            error={errors?.name}
          />

          <div className="flex flex-col gap-2 w-full">
            <label className="text-xs text-gray-500">关联合规条文</label>
            <select
              multiple
              className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
              {...register("cits")}
              defaultValue={data?.cits}
            >
              {cits.map(
                (cit: { id: string; name: string; description: string }) => (
                  <option value={cit.id} key={cit.id}>
                    {cit.name + " " + cit.description}
                  </option>
                )
              )}
            </select>
            {errors.cits?.message && (
              <p className="text-xs text-red-400">
                {errors.cits.message.toString()}
              </p>
            )}
          </div>
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
