import RegisterForm from "@/shared/components/forms/RegisterForm";

export default function RegisterCourier() {
  return (
    <div className="py-10">
      <h2 className="mb-6 text-center text-2xl font-bold text-emerald-400">
        Înregistrare Curier
      </h2>
      <RegisterForm role="courier" />
    </div>
  );
}
