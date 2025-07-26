import RegisterForm from "@/shared/components/forms/RegisterForm";

export default function RegisterPartner() {
  return (
    <div className="py-10">
      <h2 className="mb-6 text-center text-2xl font-bold text-yellow-400">
        Înregistrare Partener
      </h2>
      <RegisterForm role="partner" />
    </div>
  );
}
