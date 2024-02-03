import { Inter } from "next/font/google";
import "./globals.css";
import MyNavbar from "../components/Navbar"
import Footer from "../components/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Renew Planet",
  description: "Renew The Planet! it's Hard to search for 'Second Earth'!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <MyNavbar />
      {children}
      <Footer />
      </body>
    </html>
  );
}
