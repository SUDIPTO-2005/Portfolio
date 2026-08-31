"use client";

import { useState } from "react";
import axios from "axios";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    email: false,
    required: false,
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userInput.email)) {
      setError({ ...error, email: true });
      return;
    }

    try {
      setIsLoading(true);
      const res = await axios.post("/api/contact", userInput);

      if (res.data.success) {
        toast.success(res.data.message || "Message sent successfully!");
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to send message. Please try emailing directly!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <p className="font-semibold mb-5 text-[#16f2b3] text-sm sm:text-base uppercase tracking-wider glow-text-cyan flex items-center gap-2">
        <span className="h-[2px] w-4 bg-[#16f2b3]"></span>
        Send a Message
      </p>

      <div className="max-w-3xl text-white rounded-2xl border border-[#1b224b] bg-[#0c102a]/80 backdrop-blur-xl p-4 sm:p-6 lg:p-8 shadow-[0_0_30px_rgba(13,18,36,0.8)]">
        <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
          If you have any questions or want to collaborate on a project, feel free to drop a message. I will get back to you as soon as possible!
        </p>

        <form onSubmit={handleSendMail} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs sm:text-sm font-medium text-gray-300">Your Name: </label>
            <input
              className="bg-[#050816] w-full border rounded-xl border-[#2a2e5a] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-gray-500 focus:shadow-[0_0_15px_rgba(22,242,179,0.2)]"
              type="text"
              maxLength={100}
              placeholder="e.g. Alex Smith"
              required={true}
              onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
              value={userInput.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs sm:text-sm font-medium text-gray-300">Your Email: </label>
            <input
              className="bg-[#050816] w-full border rounded-xl border-[#2a2e5a] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-gray-500 focus:shadow-[0_0_15px_rgba(22,242,179,0.2)]"
              type="email"
              maxLength={100}
              placeholder="e.g. alex@example.com"
              required={true}
              value={userInput.email}
              onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                setError({ ...error, email: !emailRegex.test(userInput.email) });
              }}
            />
            {error.email && (
              <p className="text-[11px] sm:text-xs text-red-400">Please provide a valid email address.</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs sm:text-sm font-medium text-gray-300">Your Message: </label>
            <textarea
              className="bg-[#050816] w-full border rounded-xl border-[#2a2e5a] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-gray-500 focus:shadow-[0_0_15px_rgba(22,242,179,0.2)] resize-y min-h-[110px]"
              maxLength={1000}
              placeholder="Type your message or project requirements here..."
              required={true}
              onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
              onBlur={checkRequired}
              rows={4}
              value={userInput.message}
            />
          </div>

          <div className="flex flex-col items-start gap-3 mt-2">
            {error.required && (
              <p className="text-[11px] sm:text-xs text-red-400">All fields are required!</p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="shimmer-effect flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 sm:px-8 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(236,72,153,0.35)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none w-full sm:w-auto"
            >
              {isLoading ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <TbMailForward size={18} className="text-[#16f2b3]" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
