import { Button, Label, TextInput } from "flowbite-react";
import { useForm, type SubmitHandler, type Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLogin } from "@/hooks/useLogin";
import {
  loginSchema,
  type LoginFormValues,
} from "@/shared/validation/loginSchema";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema) as Resolver<LoginFormValues>,
  });

  const { mutate, isPending, error } = useLogin();

  // Încercăm autentificarea la submit
  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex max-w-md flex-col gap-4"
    >
      <div>
        <Label htmlFor="email">Email</Label>
        <TextInput
          id="email"
          type="email"
          placeholder="name@beeconect.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="password">Parolă</Label>
        <TextInput id="password" type="password" {...register("password")} />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>
      {error && <p className="text-sm text-red-500">{error.message}</p>}
      <Button type="submit" color="cyan" disabled={isPending}>
        {isPending ? "Se autentifică..." : "Autentificare"}
      </Button>
    </form>
  );
}
