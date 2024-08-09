import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import MobileMenu from "@/components/navbar/mobileMenu/MobileMenu";
import { MobileMenuContextProvider } from "@/contexts/MobileMenuContext";
import Footer from "@/components/footer/Footer";
import { epilogue } from "../constants/fonts";


export const metadata = {
  title: "All Tech News at One Place",
  description: "Blog created by Ishan Jarwal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <div className="w-full">
          <MobileMenuContextProvider>
            <Navbar />
            <MobileMenu />
          </MobileMenuContextProvider>
          <div className="max-w-screen-2xl mx-auto">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
