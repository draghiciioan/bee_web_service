import RegisterForm from "@/shared/components/forms/RegisterForm";

export default function RegisterClient() {
  return (
    <div className="py-10">
      <h2 className="mb-6 text-center text-2xl font-bold text-cyan-400">
        Înregistrare Client
      </h2>
      <RegisterForm role="client" />
    </div>
  );
}
