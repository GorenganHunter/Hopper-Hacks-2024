"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function SignInButton() {
  // keknya mending make getServerasessionbataubapalahbitu deh
  //p weit
  //pakein aja aku gtw puh
  return (
    <button
      className="btn btn-outline-success ml-auto"
      onClick={() => signIn()}>
      Sign in
    </button>
  );
}
// gausah dihaous woy dah hagus2 tadi
