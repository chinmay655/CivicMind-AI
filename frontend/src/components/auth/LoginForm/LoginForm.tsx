import Card from "../../common/Card";
import Input from "../../common/Input";
import Button from "../../common/Button";
import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [loading] = useState(false);
  return (
    <Card
      hover
      padding="lg"
      className="w-full max-w-md"
    >
      <div className="mb-8 text-center">

        <h1 className="text-3xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="mt-2 text-slate-400">
          Sign in to continue to CivicMind AI
        </p>

      </div>

      <form className="space-y-5">

        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          leftIcon={Mail}
        />

        <div className="relative">

            <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                leftIcon={Lock}
            />

            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[42px] text-slate-400 hover:text-white"
            >
                {showPassword ? (
                    <EyeOff size={18} />
                ) : (
                    <Eye size={18} />
                )}
                </button>

            </div>
        <div className="flex items-center justify-between">

            <label className="flex items-center gap-2 text-sm text-slate-300">

                <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-slate-600 bg-slate-800"
                />

                Remember Me

            </label>

            <button
                type="button"
                className="text-sm text-blue-400 hover:text-blue-300"
            >
                Forgot Password?
            </button>

        </div>
        <Button
          fullWidth
          type="submit"
          loading={loading}
        >
          Login
        </Button>

      </form>

      <div className="mt-6 text-center">

        <button
          className="text-sm text-blue-400 hover:text-blue-300"
        >
          Forgot Password?
        </button>

      </div>
      <p className="mt-8 text-center text-sm text-slate-400">

            Don't have an account?

            <button
                className="ml-2 text-blue-400 hover:text-blue-300"
            >
                Create Account
            </button>

        </p>

    </Card>
  );
};

export default LoginForm;