import { useMutation } from "@tanstack/react-query";
import axios, { type AxiosError } from "axios";
import { registerUser, type RegisterData } from "@/services/auth";

interface ValidationErrors {
  [field: string]: string[];
}

interface RegisterError {
  message: string;
  errors?: ValidationErrors;
}

export const useRegister = () => {
  return useMutation<void, RegisterError, RegisterData>({
    mutationFn: async (data: RegisterData) => {
      try {
        await registerUser(data);
      } catch (err) {
        const error = err as AxiosError<{ errors?: ValidationErrors }>;
        if (axios.isAxiosError(error) && error.response?.status === 422) {
          // Erorile de validare venite de la server
          throw {
            message: "Date invalide",
            errors: (error.response.data as { errors?: ValidationErrors }).errors,
          };
        }
        throw { message: "Eroare la înregistrare" };
      }
    },
  });
};
