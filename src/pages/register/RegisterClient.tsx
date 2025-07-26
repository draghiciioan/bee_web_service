import RegisterForm from "@/shared/components/forms/RegisterForm";
import { ROLE_CLIENT } from "@/shared/constants/roles";

export default function RegisterClient() {
  return (
    <div className="py-10">
      <h2 className="mb-6 text-center text-2xl font-bold text-cyan-400">
        Înregistrare Client
      </h2>
      {/* Trimite rolul corespunzător către formular */}
      <RegisterForm role={ROLE_CLIENT} />
    </div>
  );
}
