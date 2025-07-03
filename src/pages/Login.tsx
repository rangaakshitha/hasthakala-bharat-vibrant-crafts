import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

  const navigate = useNavigate();
  const { toast } = useToast();

  const validate = () => {
    const newErrors: { username?: string; password?: string } = {};
    if (username.trim().length < 3) newErrors.username = "Username must be at least 3 characters.";
    if (password.length < 6) newErrors.password = "Password must be at least 6 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        toast({
          title: "Welcome to Hasthakala Bharat",
          description: "Login successful!",
        });

        localStorage.setItem('hasthakala_token', data.token);
        localStorage.setItem('hasthakala_user', JSON.stringify({ username }));
        navigate('/homepage');
      } else {
        toast({
          title: "Login Failed",
          description: data.error || "Invalid username or password.",
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Could not connect to server.",
        variant: 'destructive',
      });
    }
  };

  return (
    <div
      className="min-h-screen w-full relative px-4 py-10 flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://img.pikbest.com/wp/202344/craft-texture-artfully-crafted-handmade-paper-background_9922246.jpg!bw700')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* White Overlay */}
      <div className="absolute inset-0 bg-white/50 z-0" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-6xl h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row backdrop-blur-lg bg-white/60 border border-orange-100">
        {/* LEFT SIDE: LOGIN FORM */}
        <div className="w-full md:w-2/5 flex flex-col justify-center px-8 py-10 bg-white/60">
          <div className="text-center mb-8 animate-fade-in">
            <h3 className="font-cinzel text-3xl md:text-6xl font-bold text-gradient mb-6">
              हस्तकला भारत
            </h3>
            <h2 className="font-garamond text-2xl text-orange-600 mb-2">
              Hasthakala Bharat
            </h2>
            <p className="text-gray-600 font-devanagari">
              Celebrating India's Rich Handicraft Heritage
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-gray-700">Username</label>
              <Input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && (
                <p className="text-sm text-red-600 mt-1">{errors.username}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-500"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-600 mt-1">{errors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 text-gray-700">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="accent-orange-500"
                />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-orange-600 hover:underline">
                Forgot?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full py-2"
            >
              Login
            </Button>

            <p className="text-sm text-center text-gray-600 mt-2">
              Don’t have an account?{' '}
              <Link to="/create-account" className="text-orange-600 hover:underline">
                Create one
              </Link>
            </p>
          </form>
        </div>

        {/* RIGHT SIDE: IMAGE CARD */}
        <div className="hidden md:flex w-full md:w-3/5 items-center justify-center p-6 bg-white/80">
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://thebusinessrule.com/wp-content/uploads/2023/02/Handicraft-2-1.jpg"
              alt="Handicraft Art"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
