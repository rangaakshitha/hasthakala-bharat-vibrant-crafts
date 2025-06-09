import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff } from 'lucide-react';

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

        // Save token for authenticated requests
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
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="font-cinzel text-4xl font-bold text-gradient mb-2">
            हस्तकला भारत
          </h1>
          <h2 className="font-garamond text-2xl text-saffron-600 mb-2">
            Hasthakala Bharat
          </h2>
          <p className="text-gray-600 font-devanagari">
            Celebrating India's Rich Handicraft Heritage
          </p>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-800">Login to Continue</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
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
                <label className="block text-sm font-medium text-gray-700">Password</label>
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
                    className="absolute right-2 top-2 text-gray-500"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-600 mt-1">{errors.password}</p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="accent-orange-500"
                  />
                  <span>Remember me</span>
                </label>
              
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                Login
              </Button>

              <div className="text-center text-sm mt-4">
                <p>
                  Don't have an account?{' '}
                  <Link to="/create-account" className="text-orange-600 hover:underline">
                    Create one
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
