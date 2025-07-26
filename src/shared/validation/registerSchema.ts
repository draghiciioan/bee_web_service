import * as yup from "yup";

export const registerSchema = yup.object({
  email: yup
    .string()
    .email("Email invalid")
    .required("Emailul este obligatoriu"),
  full_name: yup.string().required("Numele complet este obligatoriu"),
  phone_number: yup
    .string()
    .matches(/^\d{10}$/, "Număr de telefon invalid")
    .optional()
    .nullable(),
  password: yup
    .string()
    .min(8, "Parola trebuie să aibă minim 8 caractere")
    .required("Parola este obligatorie"),
});

export type RegisterFormValues = yup.InferType<typeof registerSchema>;
