import { useMutation } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import { loginUser, type UserLogin, type LoginResponse } from "@/services/auth";

interface LoginError {
  message: string;
}

export const useLogin = () => {
  return useMutation<LoginResponse, AxiosError<LoginError>, UserLogin>({
    mutationFn: loginUser,
  });
};
