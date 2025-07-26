import { Button, Label, TextInput } from "flowbite-react";
import { useForm, type SubmitHandler, type Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useResetPassword } from "@/hooks/useResetPassword";
import {
  resetPasswordSchema,
  type ResetPasswordValues,
} from "@/shared/validation/resetPasswordSchema";

interface ResetPasswordFormProps {
  token: string;
}

export default function ResetPasswordForm({ token }: ResetPasswordFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordValues>({
    resolver: yupResolver(resetPasswordSchema) as Resolver<ResetPasswordValues>,
  });

  const { mutate, isPending, isSuccess, error } = useResetPassword();

  const onSubmit: SubmitHandler<ResetPasswordValues> = (data) => {
    mutate({ ...data, token });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto flex max-w-md flex-col gap-4">
      <div>
        <Label htmlFor="password">Parolă nouă</Label>
        <TextInput id="password" type="password" {...register("password")}/>
        {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
      </div>
      {error && <p className="text-sm text-red-500">{error.message}</p>}
      {isSuccess && (
        <p className="text-sm text-green-500">Parola a fost resetată cu succes.</p>
      )}
      <Button type="submit" color="cyan" disabled={isPending}>
        {isPending ? "Se trimite..." : "Resetează"}
      </Button>
    </form>
  );
}
