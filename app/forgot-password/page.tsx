'use client';
import { sendPasswordResetEmail } from 'firebase/auth';
import React, { use, useState } from "react";
import { auth } from '../firebase';

export default function ForgotPassword() {

    const [email, setEmail] = useState('');

    const resetEmail = () => {
        sendPasswordResetEmail(auth, email);
    };

  return (

    <div className="min-h-screen flex justify-center items-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-3xl font-bold mb-4 text-center text-indigo-600">Forgot Password</h2>
      <form className="space-y-6" action="#" method="POST">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="border-b border-gray-300 focus:outline-none py-2"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        <button
          onClick={() => resetEmail()}
          disabled={!email}
          className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md text-white font-semibold"
          >
          Send Email
        </button>
      </form>
    </div>
  </div>
);
}
