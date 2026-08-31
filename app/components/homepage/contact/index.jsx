import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import Reveal from '../../helper/reveal';
import ContactForm from './contact-form';

function ContactSection() {
  const contactInfo = [
    { icon: <MdAlternateEmail size={20} className="text-[#16f2b3]" />, label: "Email", value: personalData.email, href: `mailto:${personalData.email}` },
    { icon: <IoMdCall size={20} className="text-pink-500" />, label: "Phone", value: personalData.phone, href: `tel:${personalData.phone}` },
    { icon: <CiLocationOn size={20} className="text-purple-400" />, label: "Location", value: personalData.address, href: "#" },
  ];

  const socials = [
    { icon: <IoLogoGithub size={22} />, href: personalData.github || "https://github.com", label: "GitHub", color: "hover:text-white hover:border-white" },
    { icon: <BiLogoLinkedin size={22} />, href: personalData.linkedIn || "https://linkedin.com", label: "LinkedIn", color: "hover:text-[#0077b5] hover:border-[#0077b5]" },
    { icon: <SiLeetcode size={20} />, href: personalData.leetcode || "#", label: "LeetCode", color: "hover:text-amber-500 hover:border-amber-500" },
    { icon: <BsInstagram size={20} />, href: personalData.instagram || "#", label: "Instagram", color: "hover:text-pink-500 hover:border-pink-500" },
  ];

  return (
    <div id="contact" className="my-12 sm:my-16 lg:my-28 relative text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md border border-violet-700/40 shadow-[0_0_20px_rgba(26,20,67,0.8)]">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-gradient-to-b from-[#1a1443] to-transparent"></span>
      </div>

      <Reveal direction="down">
        <div className="flex justify-center my-6 lg:py-8">
          <div className="flex items-center">
            <span className="w-8 sm:w-16 md:w-24 h-[2px] bg-gradient-to-r from-transparent to-[#16f2b3]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 sm:p-2.5 px-4 sm:px-6 text-sm sm:text-base md:text-xl rounded-md border border-violet-700/40 shadow-[0_0_20px_rgba(26,20,67,0.8)] font-semibold tracking-wider text-center">
              GET IN TOUCH
            </span>
            <span className="w-8 sm:w-16 md:w-24 h-[2px] bg-gradient-to-l from-transparent to-[#16f2b3]"></span>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start mt-6 sm:mt-8">
        <Reveal direction="right">
          <ContactForm />
        </Reveal>

        <Reveal direction="left">
          <div className="lg:pl-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 sm:mb-3">
                Let&apos;s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16f2b3] to-pink-500 glow-text-cyan">extraordinary</span> together.
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Whether you have a project in mind, a job opportunity, or just want to connect—my inbox is always open.
              </p>

              {/* Contact info list */}
              <div className="flex flex-col gap-3 sm:gap-4">
                {contactInfo.map((info, idx) => (
                  <a
                    key={idx}
                    href={info.href}
                    className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#16f2b3]/50 hover:bg-[#16f2b3]/5 hover:shadow-[0_0_20px_rgba(22,242,179,0.15)] transition-all duration-300 flex items-center gap-3 sm:gap-4 group"
                  >
                    <div className="p-2.5 sm:p-3 rounded-lg bg-black/40 border border-white/5 group-hover:scale-110 transition-transform flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] sm:text-xs text-gray-400 font-mono uppercase tracking-wider">{info.label}</p>
                      <p className="text-xs sm:text-sm md:text-base text-gray-200 font-medium group-hover:text-white transition-colors truncate">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social media links */}
            <div className="mt-6 sm:mt-8 lg:mt-10">
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-gray-400 mb-3 sm:mb-4">Connect on Socials</p>
              <div className="flex items-center gap-2.5 sm:gap-4 flex-wrap">
                {socials.map((s, idx) => (
                  <Link
                    key={idx}
                    target="_blank"
                    href={s.href}
                    title={s.label}
                    className={`p-2.5 sm:p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-gray-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 backdrop-blur-md ${s.color}`}
                  >
                    {s.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default ContactSection;