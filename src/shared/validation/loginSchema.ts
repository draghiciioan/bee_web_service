import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email("Email invalid").required("Emailul este obligatoriu"),
  password: yup.string().required("Parola este obligatorie"),
});

export type LoginFormValues = yup.InferType<typeof loginSchema>;
