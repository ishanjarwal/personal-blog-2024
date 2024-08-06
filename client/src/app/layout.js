import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import MobileMenu from "@/components/navbar/mobileMenu/MobileMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "All Tech News at One Place",
  description: "Blog created by Ishan Jarwal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full">
          <Navbar />
          {/* <MobileMenu /> */}
          <div className="max-w-screen-2xl mx-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
