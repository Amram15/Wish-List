'use client';import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  const signup = async () => {
    try {
      setError('');
      if (password !== passwordConfirm) {
        throw new Error("Passwords don't match");
      }
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      setError(error.message);
    }
  };
  
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-center text-indigo-600">Sign up for an Account</h2>
        <form className="space-y-4">
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-b border-gray-300 focus:outline-none py-2"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full border-b border-gray-300 focus:outline-none rounded-none shadow-none py-2"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <label htmlFor="passwordConfirm" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
              required
              className="block w-full border-b border-gray-300 focus:outline-none rounded-none shadow-none py-2"
              placeholder="Confirm your password"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            disabled={(!email || !password || !passwordConfirm) || (password !== passwordConfirm)}
            onClick={signup}
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md text-white font-semibold"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>

  );
}
