import { useQuery } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import { currentUser, type User } from "@/services/auth";

interface CurrentUserError {
  message: string;
}

export const useCurrentUser = () => {
  return useQuery<User, AxiosError<CurrentUserError>>({
    queryKey: ["current-user"],
    queryFn: currentUser,
  });
};
