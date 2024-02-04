"use client";
import { signIn, signOut, getSession } from "next-auth/react";
import { useState } from "react";

export default async function SignInButton() {
  const session = await getSession();
  const [buttonText, setButtonText] = useState("Sign in");
  const [buttonStyle, setButtonStyle] = useState("btn-outline-success");

  const handleSignIn = async () => {
    await signIn();
    setButtonText("Sign out");
    setButtonStyle("btn-outline-danger"); // Mengubah warna outline menjadi danger
  };

  const handleSignOut = async () => {
    await signOut();
    setButtonText("Sign in");
    setButtonStyle("btn-outline-success"); // Mengembalikan warna outline menjadi success
  };

  return (
    <button
      className={`btn ${buttonStyle} ml-auto`}
      onClick={session ? handleSignOut : handleSignIn}>
      {buttonText}
    </button>
  );
}
