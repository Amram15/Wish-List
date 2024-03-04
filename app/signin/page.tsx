'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-center text-indigo-600">Sign in to your Account</h2>
        <form className="space-y-4">
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email address
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

          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-b border-gray-300 focus:outline-none py-2"
              placeholder="Enter your password"
            />
          </div>

          <button
              onClick={() => signIn('credentials', {email, password, redirect: true, callbackUrl: '/profile'})}
              disabled={!email || !password}
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md text-white font-semibold"
          >
            Sign in
          </button>
        </form>
        <div className="text-sm mt-4">
          <div onClick={() => router.push('/forgot-password')} className="cursor-pointer font-semibold text-indigo-400 hover:text-indigo-300">
            Forgot password?
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-gray-700">
          <button onClick={() => router.push('/signup')} className="font-semibold text-indigo-600 hover:text-indigo-700">
            Create New Account
          </button>
        </p>
      </div>
    </div>
  );
}