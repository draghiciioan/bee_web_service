import { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { useRegister } from "@/hooks/useRegister";

interface RegisterFormProps {
  role: string;
}

export default function RegisterForm({ role }: RegisterFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    full_name: "",
    phone_number: "",
    password: "",
  });
  const { mutate, isPending, error } = useRegister();
  const validationErrors = (error && error.errors) || {};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    mutate({ ...formData, role });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-md flex-col gap-4"
    >
      <input type="hidden" name="role" value={role} />
      <div>
        <Label htmlFor="email">Email</Label>
        <TextInput
          id="email"
          name="email"
          type="email"
          placeholder="name@beeconect.com"
          required
          value={formData.email}
          onChange={handleChange}
        />
        {validationErrors.email && (
          <p className="text-sm text-red-500">{validationErrors.email[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="full_name">Nume complet</Label>
        <TextInput
          id="full_name"
          name="full_name"
          type="text"
          placeholder="Ion Popescu"
          required
          value={formData.full_name}
          onChange={handleChange}
        />
        {validationErrors.full_name && (
          <p className="text-sm text-red-500">{validationErrors.full_name[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="phone_number">Telefon</Label>
        <TextInput
          id="phone_number"
          name="phone_number"
          type="tel"
          placeholder="07********"
          required
          value={formData.phone_number}
          onChange={handleChange}
        />
        {validationErrors.phone_number && (
          <p className="text-sm text-red-500">
            {validationErrors.phone_number[0]}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="password">Parolă</Label>
        <TextInput
          id="password"
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={handleChange}
        />
        {validationErrors.password && (
          <p className="text-sm text-red-500">{validationErrors.password[0]}</p>
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
