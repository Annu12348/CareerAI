
import SignupLeft from "@/features/auth/components/signup/SignupLeft";
import SignupForm from "@/features/auth/components/signup/SignupForm";

export const metadata = {
  title: "Create Account | CareerAI",
  description:
    "Create your CareerAI account and start building your professional career.",
};

export default function SignupPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50">
      <div className="flex min-h-screen w-full flex-col md:flex-row">
        <SignupLeft />
        <SignupForm />
      </div>
    </main>
  );
}
