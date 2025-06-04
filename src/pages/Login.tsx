
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { User, Lock, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{username?: string; password?: string}>({});
  const navigate = useNavigate();
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: {username?: string; password?: string} = {};
    
    if (!username.trim()) {
      newErrors.username = 'Username is required';
    } else if (username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors below",
        variant: "destructive",
      });
      return;
    }

    // Demo login - accept any valid credentials
    if (username.length >= 3 && password.length >= 6) {
      toast({
        title: "स्वागत! Welcome to Hasthakala Bharat",
        description: "Login successful! Redirecting to homepage...",
      });
      
      // Store user session
      localStorage.setItem('hasthakala_user', JSON.stringify({ username, loginTime: Date.now() }));
      
      setTimeout(() => {
        navigate('/home');
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 via-white to-emerald-50 mandala-bg flex items-center justify-center p-4">
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

        <Card className="glass-effect shadow-2xl border-saffron-200">
          <CardHeader className="text-center pb-4">
            <CardTitle className="font-garamond text-2xl text-saffron-700">
              Welcome Back, Artisan
            </CardTitle>
            <p className="text-sm text-gray-600 font-devanagari">
              Continue your journey of discovering Indian crafts
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 font-devanagari">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-saffron-500" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={`pl-10 border-saffron-200 focus:border-saffron-500 ${errors.username ? 'border-red-500' : ''}`}
                  />
                </div>
                {errors.username && (
                  <p className="text-sm text-red-500">{errors.username}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 font-devanagari">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-saffron-500" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`pl-10 pr-10 border-saffron-200 focus:border-saffron-500 ${errors.password ? 'border-red-500' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 h-4 w-4 text-saffron-500 hover:text-saffron-700"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white font-devanagari py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                प्रवेश करें / Enter
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p className="font-devanagari">
                Demo Credentials: Any username (min 3 chars) & password (min 6 chars)
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-xs text-gray-500 font-devanagari">
          <p>© 2024 Hasthakala Bharat. Preserving traditions, inspiring futures.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
