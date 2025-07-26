import { Button, Label, TextInput } from "flowbite-react";
import { useForm, type SubmitHandler, type Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRequestReset } from "@/hooks/useRequestReset";
import {
  requestResetSchema,
  type RequestResetValues,
} from "@/shared/validation/requestResetSchema";

export default function RequestResetForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestResetValues>({
    resolver: yupResolver(requestResetSchema) as Resolver<RequestResetValues>,
  });

  const { mutate, isPending, isSuccess, error } = useRequestReset();

  const onSubmit: SubmitHandler<RequestResetValues> = (data) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto flex max-w-md flex-col gap-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <TextInput id="email" type="email" placeholder="name@beeconect.com" {...register("email")}/>
        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
      </div>
      {error && <p className="text-sm text-red-500">{error.message}</p>}
      {isSuccess && (
        <p className="text-sm text-green-500">Verifică email-ul pentru link-ul de resetare.</p>
      )}
      <Button type="submit" color="cyan" disabled={isPending}>
        {isPending ? "Se trimite..." : "Trimite link"}
      </Button>
    </form>
  );
}
