import { useMutation } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import { requestPasswordReset, type PasswordResetRequest } from "@/services/auth";

interface RequestResetError {
  message: string;
}

export const useRequestReset = () => {
  return useMutation<void, AxiosError<RequestResetError>, PasswordResetRequest>({
    mutationFn: requestPasswordReset,
  });
};
