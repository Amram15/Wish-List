'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@mui/material";
import { toast } from 'react-hot-toast';
import React, { useEffect } from "react";

export default function SignupPage() {

 

    
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  })

  const [buttonDisabled, setButtonDisabled] = React.
  useState(false);

  const [loading, setLoading] = React.useState(false);

  const [error, setError] = React.useState("");

  const onSignup = async () => {
    // try{
    //   setLoading(true);

    // } catch (error:any) {
    //   toast.error(error.message);

    // } finally {
    //   setLoading(false);

    // }

    if(!user.email || !user.password || !user.username) {
      setError("Please fill in all fields.");
      return;
    }

    //signup logic
    try {

      toast.success("Signup successful!");
    } catch (error:any){
      toast.error(error.message);
    }
    
    // If signup is successful, reset the form fields
    try {
      setLoading(true);
      setUser({
        email: "",
        password: "",
        username: "",
      });
    } catch (error:any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }

  }
  

  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }

  }, [user])
  

  return (
    <div className="flex flex-col items-center
    justify-center min-h-screen py-2">
        <h1>Wish-List<hr/></h1>
        <hr />
        <label htmlFor="username">Username</label>
        <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({...user, username: e.
          target.value})}
          placeholder="username"
        />
      <label htmlFor="email">Email</label>
      <input         
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.
        target.value})}
        placeholder="email"

      />
      <label htmlFor="password">Password</label>
      <input
       className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
       id="password"
       type="text"
       value={user.password}
       onChange={(e) => setUser({...user, password: e.
       target.value})}
       placeholder="password"
      />

      <button
      onClick={onSignup}
      className="p-2 border border-gray-300 rounded-lg mb4 
      focus:outline-none focus:border-gray-600">Signup</button>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <hr/><hr/><hr/>
      <h2>Already have an acconut?</h2>
      {/* <Link href="/login"
        className="p-2 border border-gray-300 rounded-lg mb4 
        focus:outline-none focus:border-gray-600">Login</Link> */}

    </div>
  )
}
