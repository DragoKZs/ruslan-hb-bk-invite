"use client";

import { motion } from "framer-motion";
import {
  Music2,
  Sparkles,
  Gift,
  Users,
} from "lucide-react";

import { useLanguage } from "@/app/components/context/LanguageContext";

const icons = [
  Music2,
  Sparkles,
  Gift,
  Users,
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative bg-[#09050D] py-16 md:py-32"
    >
      <div className="container">

        <div className="grid items-center gap-10 md:gap-20 lg:grid-cols-2">

          {/* Фото */}

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

            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-t from-[#09050D]/40 via-transparent to-transparent md:rounded-[40px]" />

            {/* Золотой блик */}

            <div className="pointer-events-none absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-amber-300/30 bg-black/20 text-amber-200 backdrop-blur-md">
              ✦
            </div>

          </motion.div>

          {/* Текст */}

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

            {/* Бейдж */}

            <span className="inline-flex rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-xs uppercase tracking-[3px] text-fuchsia-300 md:px-5 md:text-sm md:tracking-[4px]">
              {t.about.badge}
            </span>

            {/* Заголовок */}

            <h2 className="mt-6 text-3xl font-black leading-tight md:mt-8 md:text-5xl">
              {t.about.title}
            </h2>

            {/* Текст */}

            <p className="mt-6 text-base leading-8 text-white/70 md:mt-8 md:text-lg md:leading-9">

              {t.about.text1}

              <br />
              <br />

              {t.about.text2}

            </p>

            {/* Карточки */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 md:gap-6">

              {t.about.cards.map((card, index) => {

                const Icon = icons[index];

                return (
                  <motion.div
                    key={card.title}
                    whileHover={{
                      y: -8,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl md:p-7"
                  >

                    {/* Фиолетовое свечение */}

                    <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-fuchsia-500/10 blur-2xl transition group-hover:bg-fuchsia-500/20" />

                    <Icon
                      size={32}
                      className="relative z-10 text-amber-200 md:size-[34px]"
                    />

                    <h3 className="relative z-10 mt-4 text-lg font-bold md:mt-5 md:text-xl">
                      {card.title}
                    </h3>

                    <p className="relative z-10 mt-2 flex-1 text-sm leading-6 text-white/60 md:mt-3 md:text-base md:leading-7">
                      {card.text}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}