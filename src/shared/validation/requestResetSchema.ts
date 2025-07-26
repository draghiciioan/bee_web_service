import * as yup from "yup";

export const requestResetSchema = yup.object({
  email: yup
    .string()
    .email("Email invalid")
    .required("Emailul este obligatoriu"),
});

export type RequestResetValues = yup.InferType<typeof requestResetSchema>;
