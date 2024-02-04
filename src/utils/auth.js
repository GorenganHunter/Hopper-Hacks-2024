import GoogleProvider from "next-auth/providers/google";
import { AuthOptions, getServerSession } from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./connect";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    // CredentialsProvider({
    //   name: "Password",
    //   credentials: {
    //     email: {
    //       type: "email",
    //       label: "Email",
    //       placeholder: "Masukkan email anda"
    //     },
    //    password: {
    //       type: "password",
    //       label: "Password",
    //       placeholder: "Masukkan password anda"
    //     }
    //   }
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
};

export const getAuthSession = () => getServerSession(authOptions);