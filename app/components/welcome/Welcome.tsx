"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/app/components/context/LanguageContext";

interface WelcomeProps {
  onEnter: () => void;
}

export default function Welcome({ onEnter }: WelcomeProps) {
  const { setLanguage, t } = useLanguage();

  function handleEnter(language: "ru" | "kz") {
    setLanguage(language);

    const audio = new Audio("/audio/theme.mp3");
    audio.volume = 0.4;

    audio.play().catch(() => {
      console.log("Автовоспроизведение запрещено браузером.");
    });

    onEnter();
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-[999] flex items-center justify-center overflow-y-auto bg-[#09050D] p-4"
      >
        {/* Фон */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(217,70,239,.20),transparent_35%),radial-gradient(circle_at_75%_70%,rgba(124,58,237,.25),transparent_40%),radial-gradient(circle_at_center,rgba(244,114,182,.08),transparent_65%)]" />

        {/* Декоративные свечения */}

        <div className="pointer-events-none absolute left-[8%] top-[15%] h-32 w-32 rounded-full bg-fuchsia-500/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-[10%] right-[8%] h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />

        {/* Карточка */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="relative z-10 w-full max-w-3xl overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] px-6 py-8 text-center shadow-[0_25px_100px_rgba(0,0,0,.5)] backdrop-blur-2xl md:rounded-[40px] md:px-10 md:py-16"
        >
          {/* Золотой декоративный элемент */}

          <div className="mx-auto mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/40 bg-amber-300/10 text-xl text-amber-200 md:mb-8">
            ✦
          </div>

          <p className="text-xs uppercase tracking-[5px] text-fuchsia-300 md:text-sm md:tracking-[8px]">
            {t.welcome.company}
          </p>

          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-amber-300/80 to-transparent md:mt-8 md:w-40" />

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-8 text-4xl font-black uppercase tracking-tight md:mt-10 md:text-6xl"
          >
            {t.welcome.title}
          </motion.h1>

          <p className="mt-5 text-lg text-white/70 md:mt-6 md:text-xl">
            17 августа 2026
          </p>

          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent md:mt-10 md:w-40" />

          <p className="mt-8 text-xl font-light md:mt-10 md:text-3xl">
            {t.welcome.welcome}
          </p>

          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-white/70 md:mt-6 md:text-lg md:leading-8">
            {t.welcome.text}
          </p>

          {/* Выбор языка */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center md:mt-14">
            <motion.button
              whileHover={{
                scale: 1.04,
                boxShadow: "0 15px 50px rgba(217,70,239,.30)",
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() => handleEnter("ru")}
              className="w-full rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-600 px-8 py-4 text-base font-bold shadow-[0_15px_40px_rgba(217,70,239,.20)] transition md:w-auto md:px-10 md:py-5 md:text-lg"
            >
              🇷🇺 Русский
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.04,
                borderColor: "rgba(251,191,36,.5)",
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() => handleEnter("kz")}
              className="w-full rounded-full border border-amber-300/30 bg-white/[0.04] px-8 py-4 text-base font-bold text-white transition hover:bg-white/[0.08] md:w-auto md:px-10 md:py-5 md:text-lg"
            >
              🇰🇿 Қазақша
            </motion.button>
          </div>

          {/* Декоративная линия */}

          <div className="mx-auto mt-8 flex items-center justify-center gap-3 text-amber-200/50">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-amber-300/40" />
            <span className="text-xs">✦</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-amber-300/40" />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}