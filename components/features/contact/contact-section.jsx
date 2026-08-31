"use client";

import { personalData } from '@/data/personal.data';
import Link from 'next/link';
import { BiLogoLinkedin } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { IoLogoGithub, IoMdCall } from 'react-icons/io';
import { MdAlternateEmail } from 'react-icons/md';
import { SiLeetcode } from 'react-icons/si';
import Reveal from '@/components/ui/reveal';
import ContactForm from './contact-form';

export default function ContactSection() {
  return (
    <div id="contact" className="relative z-50 my-12 sm:my-16 lg:my-28">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md shadow-[0_0_20px_rgba(26,20,67,0.8)] border border-violet-800/40">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-gradient-to-b from-[#1a1443] to-transparent"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <Reveal direction="right">
          <ContactForm />
        </Reveal>

        <Reveal direction="left">
          <div className="lg:w-3/4 flex flex-col gap-6">
            <div className="flex flex-col gap-5">
              <p className="text-xs sm:text-sm text-gray-300 flex items-center gap-3">
                <span className="bg-[#1a1443] p-2.5 sm:p-3 rounded-full text-[#16f2b3] border border-violet-700/40 hover:scale-110 transition-transform">
                  <MdAlternateEmail size={18} />
                </span>
                <span className="break-all">{personalData.email}</span>
              </p>

              <p className="text-xs sm:text-sm text-gray-300 flex items-center gap-3">
                <span className="bg-[#1a1443] p-2.5 sm:p-3 rounded-full text-pink-500 border border-violet-700/40 hover:scale-110 transition-transform">
                  <IoMdCall size={18} />
                </span>
                <span>{personalData.phone}</span>
              </p>

              <p className="text-xs sm:text-sm text-gray-300 flex items-center gap-3">
                <span className="bg-[#1a1443] p-2.5 sm:p-3 rounded-full text-purple-400 border border-violet-700/40 hover:scale-110 transition-transform">
                  <CiLocationOn size={18} />
                </span>
                <span>{personalData.address}</span>
              </p>
            </div>

            <div className="pt-4 flex items-center gap-3 sm:gap-4 flex-wrap">
              {[
                { icon: <IoLogoGithub size={22} />, href: personalData.github, label: "GitHub" },
                { icon: <BiLogoLinkedin size={22} />, href: personalData.linkedIn, label: "LinkedIn" },
                { icon: <SiLeetcode size={20} />, href: personalData.leetcode || "#", label: "LeetCode" },
                { icon: <FaInstagram size={20} />, href: personalData.instagram || "#", label: "Instagram" },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  target={item.href !== "#" ? "_blank" : undefined}
                  href={item.href}
                  title={item.label}
                  className="bg-[#1a1443] p-2.5 sm:p-3 rounded-xl text-gray-300 hover:text-[#16f2b3] hover:border-[#16f2b3]/60 hover:bg-[#16f2b3]/10 border border-violet-700/40 hover:shadow-[0_0_20px_rgba(22,242,179,0.3)] hover:-translate-y-1 transition-all duration-300 active:scale-95"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
