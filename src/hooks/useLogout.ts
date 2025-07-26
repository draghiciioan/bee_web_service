import { useMutation } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import { logout } from "@/services/auth";

interface LogoutError {
  message: string;
}

export const useLogout = () => {
  return useMutation<void, AxiosError<LogoutError>, string>({
    mutationFn: logout,
  });
};
