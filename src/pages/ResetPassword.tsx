import { useSearchParams } from "react-router-dom";
import ResetPasswordForm from "@/shared/components/forms/ResetPasswordForm";

export default function ResetPassword() {
  const [params] = useSearchParams();
  const token = params.get("token") ?? "";

  return (
    <div className="py-10">
      <h2 className="mb-6 text-center text-2xl font-bold text-cyan-400">
        Setează Parolă Nouă
      </h2>
      <ResetPasswordForm token={token} />
    </div>
  );
}
