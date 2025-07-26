import RegisterForm from "@/shared/components/forms/RegisterForm";

export default function RegisterCollaborator() {
  return (
    <div className="py-10">
      <h2 className="mb-6 text-center text-2xl font-bold text-green-400">
        Înregistrare Colaborator
      </h2>
      <RegisterForm role="collaborator" />
    </div>
  );
}
