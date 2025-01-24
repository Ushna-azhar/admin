import React, { useState } from 'react';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (password === 'admin123') {
      router.push('/dashboard');
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-semibold mb-4 text-center">Admin Login</h2>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <button
          onClick={handleLogin}
          className="w-full py-2 bg-blue-500 text-white rounded-md"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
