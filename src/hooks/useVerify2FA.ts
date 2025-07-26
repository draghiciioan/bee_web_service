import { useMutation } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import { verify2FA, type TwoFactorVerify } from "@/services/auth";

interface Verify2FAError {
  message: string;
}

export const useVerify2FA = () => {
  return useMutation<void, AxiosError<Verify2FAError>, TwoFactorVerify>({
    mutationFn: verify2FA,
  });
};
