import { Button, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegister } from "@/hooks/useRegister";
import {
  registerSchema,
  type RegisterFormValues,
} from "@/shared/validation/registerSchema";

interface RegisterFormProps {
  role: string;
}

export default function RegisterForm({ role }: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(registerSchema),
  });

  const { mutate, isPending, error } = useRegister();
  const serverErrors = (error && error.errors) || {};

  const onSubmit = (data: RegisterFormValues): void => {
    mutate({ ...data, role });
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
          name="email"
          type="email"
          placeholder="name@beeconect.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
        {serverErrors.email && (
          <p className="text-sm text-red-500">{serverErrors.email[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="full_name">Nume complet</Label>
        <TextInput
          id="full_name"
          name="full_name"
          type="text"
          placeholder="Ion Popescu"
          {...register("full_name")}
        />
        {errors.full_name && (
          <p className="text-sm text-red-500">{errors.full_name.message}</p>
        )}
        {serverErrors.full_name && (
          <p className="text-sm text-red-500">{serverErrors.full_name[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="phone_number">Telefon</Label>
        <TextInput
          id="phone_number"
          name="phone_number"
          type="tel"
          placeholder="07********"
          {...register("phone_number")}
        />
        {errors.phone_number && (
          <p className="text-sm text-red-500">
            {errors.phone_number.message}
          </p>
        )}
        {serverErrors.phone_number && (
          <p className="text-sm text-red-500">
            {serverErrors.phone_number[0]}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="password">Parolă</Label>
        <TextInput
          id="password"
          name="password"
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
        {serverErrors.password && (
          <p className="text-sm text-red-500">{serverErrors.password[0]}</p>
        )}
      </div>
      {error && !error.errors && (
        <p className="text-sm text-red-500">{error.message}</p>
      )}
      <Button type="submit" color="cyan" disabled={isPending}>
        {isPending ? "Se trimit..." : "Creează cont"}
      </Button>
    </form>
  );
}
