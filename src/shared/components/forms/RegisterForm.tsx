import { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // TODO: trimite datele către API
    console.log({ ...formData, role });
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
      </div>
      <Button type="submit" color="cyan">Creează cont</Button>
    </form>
  );
}
