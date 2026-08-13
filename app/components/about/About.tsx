"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { useLanguage } from "@/app/components/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#09050D] py-16 md:py-32"
    >
      {/* Декоративные свечения */}

      <div className="pointer-events-none absolute left-[-120px] top-1/4 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-3xl" />

      <div className="pointer-events-none absolute right-[-120px] bottom-1/4 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="container">

        <div className="flex flex-col items-center">

          {/* ========================= */}
          {/* ФОТО */}
          {/* ========================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            whileHover={{
              scale: 1.02,
            }}
            className="relative overflow-hidden rounded-[28px] md:rounded-[40px]"
          >

            <img
              src="/images/about.png"
              alt="День рождения"
              className="h-[360px] w-full rounded-[28px] object-cover shadow-[0_25px_80px_rgba(0,0,0,.45)] transition duration-700 md:h-[680px] md:rounded-[40px]"
            />

            {/* Затемнение */}

            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-t from-[#09050D]/50 via-transparent to-transparent md:rounded-[40px]" />

            {/* Декоративный элемент */}



          </motion.div>

          {/* ========================= */}
          {/* ТЕКСТ */}
          {/* ========================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >

          </motion.div>

        </div>

      </div>
    </section>
  );
}