import { useMutation } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import { refreshToken, type RefreshTokenRequest, type JwtPair } from "@/services/auth";

interface RefreshError {
  message: string;
}

export const useRefreshToken = () => {
  return useMutation<JwtPair, AxiosError<RefreshError>, RefreshTokenRequest>({
    mutationFn: refreshToken,
  });
};
