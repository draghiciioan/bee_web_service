import RequestResetForm from "@/shared/components/forms/RequestResetForm";

export default function RequestResetPassword() {
  return (
    <div className="py-10">
      <h2 className="mb-6 text-center text-2xl font-bold text-cyan-400">
        Resetare Parolă
      </h2>
      <RequestResetForm />
    </div>
  );
}
