import { GoogleTagManager } from "@next/third-parties/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import CustomCursor from "@/components/ui/custom-cursor";
import InteractiveBackground from "@/components/ui/interactive-background";
import ScrollToTop from "@/components/ui/scroll-to-top";
import "@/styles/card.scss";
import "@/styles/globals.scss";

export const metadata = {
  title: "Portfolio of SUDIPTO BHADRA - Software Engineer",
  description:
    "This is the portfolio of SUDIPTO BHADRA. I am a passionate software engineer and full stack developer with expertise in AI, Python, FastAPI, Django, React, Next.js, and Machine Learning.",
  keywords: [
    "Sudipto Bhadra",
    "Portfolio",
    "Software Engineer",
    "Full-Stack Developer",
    "AI Developer",
    "Python",
    "FastAPI",
    "Next.js",
    "React",
    "Tata Steel InsightAI",
    "Vyapar AI",
    "EcoTrack"
  ],
  authors: [{ name: "Sudipto Bhadra" }],
  creator: "Sudipto Bhadra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen relative selection:bg-[#16f2b3] selection:text-black font-sans">
        <CustomCursor />
        <InteractiveBackground />
        <ToastContainer position="bottom-right" theme="dark" autoClose={3000} />
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
