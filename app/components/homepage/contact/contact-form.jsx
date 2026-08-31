"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
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
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    try {
      setIsLoading(true);
      await axios.post("/api/contact", userInput);

      toast.success("Message sent successfully!");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to send message. Please try again!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-[#0d122b]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <p className="font-semibold text-lg sm:text-xl text-white mb-1.5 sm:mb-2">
          Send a Message
        </p>
        <p className="text-xs sm:text-sm text-gray-400 mb-5 sm:mb-6">
          Fill out the form below and I&apos;ll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSendMail} className="flex flex-col gap-3.5 sm:gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-mono uppercase text-gray-300">Your Name *</label>
            <input
              className="bg-[#080c1b]/80 w-full border rounded-xl border-white/10 focus:border-[#16f2b3] focus:shadow-[0_0_15px_rgba(22,242,179,0.25)] ring-0 outline-0 transition-all duration-300 px-3.5 sm:px-4 py-2.5 sm:py-3 text-base sm:text-sm text-white placeholder-gray-500"
              type="text"
              placeholder="e.g. John Doe"
              maxLength={100}
              required
              onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
              value={userInput.name}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-mono uppercase text-gray-300">Your Email *</label>
            <input
              className="bg-[#080c1b]/80 w-full border rounded-xl border-white/10 focus:border-[#16f2b3] focus:shadow-[0_0_15px_rgba(22,242,179,0.25)] ring-0 outline-0 transition-all duration-300 px-3.5 sm:px-4 py-2.5 sm:py-3 text-base sm:text-sm text-white placeholder-gray-500"
              type="email"
              placeholder="e.g. john@example.com"
              maxLength={100}
              required
              value={userInput.email}
              onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(userInput.email) });
              }}
            />
            {error.email && <p className="text-xs text-rose-400 mt-1">Please provide a valid email address!</p>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-mono uppercase text-gray-300">Your Message *</label>
            <textarea
              className="bg-[#080c1b]/80 w-full border rounded-xl border-white/10 focus:border-[#16f2b3] focus:shadow-[0_0_15px_rgba(22,242,179,0.25)] ring-0 outline-0 transition-all duration-300 px-3.5 sm:px-4 py-2.5 sm:py-3 text-base sm:text-sm text-white placeholder-gray-500 resize-none"
              maxLength={500}
              name="message"
              placeholder="Tell me about your project, idea, or questions..."
              required
              onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
              onBlur={checkRequired}
              rows={4}
              value={userInput.message}
            />
          </div>

          {error.required && (
            <p className="text-xs text-rose-400">All fields are required!</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="shimmer-effect mt-2 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-[#16f2b3] px-6 py-3 sm:py-3.5 text-center text-xs sm:text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_0_25px_rgba(236,72,153,0.35)] disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending Message...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Send Message
                <TbMailForward size={18} />
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;