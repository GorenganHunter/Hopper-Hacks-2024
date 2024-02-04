"use client";
import { signIn, signOut, useSession, SessionProvider } from "next-auth/react";
import { useState, useEffect } from "react";

function Button() {
  const { data: session } = useSession();
  const [buttonText, setButtonText] = useState("Sign in");
  const [buttonStyle, setButtonStyle] = useState("btn-outline-success");

  useEffect(() => {
    // Memeriksa apakah session tersedia saat komponen pertama kali dirender
    if (session) {
      setButtonText("Sign out");
      setButtonStyle("btn-outline-danger");
    } else {
      setButtonText("Sign in");
      setButtonStyle("btn-outline-success");
    }
  }, [session]); // Menjalankan efek setiap kali session berubah

  const handleSignIn = async () => {
    await signIn();
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <button
      className={`btn ${buttonStyle} ml-auto`}
      onClick={session ? handleSignOut : handleSignIn}>
      {buttonText}
    </button>
  );
}

export default function SignInButton(pageProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Button {...pageProps} />
    </SessionProvider>
  );
}
