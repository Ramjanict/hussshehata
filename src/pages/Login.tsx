import { Eye, EyeOff, KeyRound, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@vibecheck.io");
  const [password, setPassword] = useState("admin123");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      if (email.toLowerCase().includes("dj")) {
        navigate("/dj");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  const handleSelectRole = (role: "admin" | "dj") => {
    if (role === "admin") {
      setEmail("admin@vibecheck.io");
      setPassword("admin123");
    } else {
      setEmail("dj@vibecheck.io");
      setPassword("dj123");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-br from-background via-background to-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/10 to-primary/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative w-full max-w-md">
        <div className="backdrop-blur-xl bg-card/50 border border-border rounded-2xl p-8 shadow-2xl">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="text-3xl font-extrabold text-card">V</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-center mb-1">VibeCheck</h1>
          <p className="text-center text-muted-foreground text-sm mb-6">
            Sign in to access your platform dashboard
          </p>

          {/* Quick Demo Access Box */}
          <div className="mb-6 p-3.5 rounded-xl border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-xs font-semibold text-primary mb-2">
              <Sparkles size={14} />
              <span>Quick Demo Access (Pre-filled):</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleSelectRole("admin")}
                className={`py-1.5 px-2 text-xs font-medium rounded-lg border transition text-center ${
                  email.includes("admin")
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-background/60 text-muted-foreground border-border hover:bg-background"
                }`}
              >
                👔 Admin Portal
              </button>
              <button
                type="button"
                onClick={() => handleSelectRole("dj")}
                className={`py-1.5 px-2 text-xs font-medium rounded-lg border transition text-center ${
                  email.includes("dj")
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-background/60 text-muted-foreground border-border hover:bg-background"
                }`}
              >
                🎧 DJ Portal
              </button>
            </div>
            <div className="mt-2 text-[11px] text-muted-foreground/80 flex items-center justify-between">
              <span>User: <strong className="text-foreground">{email}</strong></span>
              <span>Pass: <strong className="text-foreground">{password}</strong></span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Password:
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive-foreground text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 disabled:opacity-50 transition duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              <KeyRound size={18} />
              Sign In Now
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link
              to="/forgot-password"
              className="text-primary hover:underline text-sm"
            >
              Forgot password?
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-center text-muted-foreground text-sm">
              Don&apos;t have an account?{" "}
              <Link
                to="/signup"
                className="text-primary hover:underline"
              >
                Create one
              </Link>
            </p>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="flex-1 py-2 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition flex items-center justify-center gap-2 text-xs"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="#4285F4" />
              </svg>
              Google
            </button>
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="flex-1 py-2 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition flex items-center justify-center gap-2 text-xs"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="white" />
              </svg>
              Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
