"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:scale-110 hover:shadow-[0_0_30px_rgba(22,242,179,0.6)] active:scale-95 transition-all duration-300";
const SCROLL_THRESHOLD = 50;

export default function ScrollToTop() {
  const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS + " hidden");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setBtnCls(DEFAULT_BTN_CLS);
      } else {
        setBtnCls(DEFAULT_BTN_CLS + " hidden");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClickBtn = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button className={btnCls} onClick={onClickBtn} title="Back to Top">
      <FaArrowUp size={16} />
    </button>
  );
}
