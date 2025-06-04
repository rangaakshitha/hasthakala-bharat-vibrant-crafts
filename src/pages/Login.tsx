
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username.length >= 3 && password.length >= 6) {
      toast({
        title: "Welcome to Hasthakala Bharat",
        description: "Login successful!",
      });
      
      localStorage.setItem('hasthakala_user', JSON.stringify({ username }));
      navigate('/home');
    } else {
      toast({
        title: "Error",
        description: "Username must be 3+ chars, password 6+ chars",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-orange-600 mb-2">
            🏺 Hasthakala Bharat
          </h1>
          <p className="text-gray-600">
            Celebrating India's Handicraft Heritage
          </p>
        </div>

        <Card className="simple-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-800">
              Welcome Back
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <Input
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-gray-300"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                Login
              </Button>
            </form>

            <div className="mt-4 text-center text-sm text-gray-600">
              <p>Demo: Any username (3+ chars) & password (6+ chars)</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
