// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="relative border-t bg-[#080c1b]/90 border-white/10 text-white mt-12 sm:mt-16">
      <div className="mx-auto px-4 sm:px-8 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 sm:py-8">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-gray-400 flex items-center gap-1.5 text-center">
            Crafted with <FaHeart size={13} className="text-pink-500 animate-pulse" /> by{" "}
            <span className="text-[#16f2b3] font-semibold">{personalData.name}</span>
          </p>
          <div className="flex items-center justify-center gap-3.5 sm:gap-6 text-[11px] sm:text-xs text-gray-400 flex-wrap text-center">
            <Link href="#about" className="hover:text-[#16f2b3] transition-colors">About</Link>
            <Link href="#experience" className="hover:text-[#16f2b3] transition-colors">Experience</Link>
            <Link href="#skills" className="hover:text-[#16f2b3] transition-colors">Skills</Link>
            <Link href="#projects" className="hover:text-[#16f2b3] transition-colors">Projects</Link>
            <Link href="#education" className="hover:text-[#16f2b3] transition-colors">Education</Link>
            <Link href="#achievements" className="hover:text-[#16f2b3] transition-colors">Achievements</Link>
            <Link href="#contact" className="hover:text-[#16f2b3] transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;