import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useVerifyEmail } from "@/hooks/useVerifyEmail";

export default function VerifyEmail() {
  const [params] = useSearchParams();
  const token = params.get("token");

  const { mutate, isPending, isSuccess, error } = useVerifyEmail();

  useEffect(() => {
    if (token) {
      mutate(token);
    }
  }, [token, mutate]);

  if (isSuccess) {
    return (
      <p className="py-10 text-center text-green-500">Email verificat cu succes!</p>
    );
  }

  return (
    <div className="py-10 text-center">
      {isPending && <p>Se verifică...</p>}
      {error && <p className="text-red-500">{error.message}</p>}
      {!token && <p className="text-red-500">Token lipsă</p>}
    </div>
  );
}
