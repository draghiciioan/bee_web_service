import LoginForm from "@/shared/components/forms/LoginForm";

export default function Login() {
  return (
    <div className="py-10">
      <h2 className="mb-6 text-center text-2xl font-bold text-cyan-400">
        Autentificare
      </h2>
      <LoginForm />
    </div>
  );
}
