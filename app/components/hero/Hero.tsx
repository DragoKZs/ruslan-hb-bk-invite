"use client";

import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Cake, GlassWater } from "lucide-react";

import { useLanguage } from "@/app/components/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#09050D]">

      {/* Фоновое видео */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Затемнение */}

      <div className="absolute inset-0 bg-[#09050D]/25" />

      {/* Luxury градиенты */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,70,239,.20),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(124,58,237,.25),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(245,158,11,.10),transparent_35%)]" />

      {/* Декоративные свечения */}

      <div className="pointer-events-none absolute left-[10%] top-[20%] h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[15%] right-[10%] h-52 w-52 rounded-full bg-purple-600/10 blur-3xl" />

      {/* Контент */}

      <div className="container relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-4xl text-center"
        >

          {/* Декоративный знак */}

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10 shadow-[0_0_40px_rgba(251,191,36,.12)]"
          >
            <Cake
              size={30}
              className="text-amber-200"
            />
          </motion.div>

          {/* Заголовок */}

          <p
            className="mb-6 text-4xl italic text-white md:mb-10 md:text-7xl"
            style={{
              fontFamily: "Georgia, serif",
            }}
          >
            {t.hero.title}
          </p>

          <div className="mx-auto mb-8 h-px w-32 bg-gradient-to-r from-transparent via-amber-300 to-transparent md:mb-12 md:w-56" />

          {/* Приглашение */}

          <h1 className="text-2xl font-light leading-relaxed text-white md:text-5xl">

            {t.hero.invitation}

            <br />

            {t.hero.invitation2}

            <br />

            <span className="mt-3 block bg-gradient-to-r from-fuchsia-300 via-pink-300 to-amber-200 bg-clip-text font-black text-transparent">
              {t.hero.day}
            </span>

          </h1>

          {/* Текст */}

          <p className="mx-auto mt-10 max-w-2xl px-2 text-base leading-8 text-white/75 md:mt-16 md:px-0 md:text-xl md:leading-10">

            {t.hero.text1}

            <br />
            <br />

            {t.hero.text2}

          </p>

          {/* Декоративные элементы */}

          <div className="mx-auto mt-10 flex items-center justify-center gap-6 text-amber-200/50 md:mt-14">

            <Sparkles size={18} />

            <span className="h-px w-16 bg-gradient-to-r from-transparent via-amber-300/40 to-transparent md:w-24" />

            <GlassWater size={18} />

            <span className="h-px w-16 bg-gradient-to-l from-transparent via-amber-300/40 to-transparent md:w-24" />

            <Sparkles size={18} />

          </div>

        </motion.div>

      </div>

      {/* Стрелка */}

      <motion.a
        href="#about"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 md:bottom-10"
      >
        <ChevronDown
          size={38}
          className="text-white/50"
        />
      </motion.a>

    </section>
  );
}