import { useMutation } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import { resetPassword, type ResetPasswordData } from "@/services/auth";

interface ResetPasswordError {
  message: string;
}

export const useResetPassword = () => {
  return useMutation<void, AxiosError<ResetPasswordError>, ResetPasswordData>({
    mutationFn: resetPassword,
  });
};
