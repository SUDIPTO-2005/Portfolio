import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import CustomCursor from "./components/helper/custom-cursor";
import InteractiveBackground from "./components/helper/interactive-background";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sudipto Bhadra | Software Engineer Portfolio",
  description:
    "Portfolio of Sudipto Bhadra - Software Engineer crafting high-impact full stack web applications, AI integrations, and cloud architectures.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.className} bg-[#080c1b] text-white selection:bg-[#16f2b3]/30 selection:text-[#16f2b3]`} suppressHydrationWarning>
        <InteractiveBackground />
        <CustomCursor />
        <ToastContainer theme="dark" />
        <main className="min-h-screen relative mx-auto px-4 sm:px-8 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
        {process.env.NEXT_PUBLIC_GTM && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
        )}
      </body>
    </html>
  );
}
