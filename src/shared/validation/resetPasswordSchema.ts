import * as yup from "yup";

export const resetPasswordSchema = yup.object({
  password: yup
    .string()
    .min(8, "Parola trebuie să aibă minim 8 caractere")
    .required("Parola este obligatorie"),
});

export type ResetPasswordValues = yup.InferType<typeof resetPasswordSchema>;
