import { useMutation } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import { verifyEmail } from "@/services/auth";

interface VerifyEmailError {
  message: string;
}

export const useVerifyEmail = () => {
  return useMutation<void, AxiosError<VerifyEmailError>, string>({
    mutationFn: verifyEmail,
  });
};
