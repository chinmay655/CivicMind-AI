import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950">
      {children}
    </main>
  );
};

export default AuthLayout;