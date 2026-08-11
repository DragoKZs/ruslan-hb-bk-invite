"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Sparkles,
  Clock3,
  CalendarDays,
} from "lucide-react";

import { useLanguage } from "@/app/components/context/LanguageContext";

export default function Location() {
  const { t } = useLanguage();

  return (
    <section
      id="location"
      className="relative bg-[#09050D] py-16 md:py-28"
    >
      <div className="container">

        {/* Заголовок */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-10 text-center md:mb-16"
        >

          <span className="inline-flex rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-xs uppercase tracking-[3px] text-fuchsia-300 md:px-5 md:text-sm md:tracking-[4px]">
            {t.location.badge}
          </span>

          <h2 className="mt-6 text-3xl font-black uppercase md:mt-8 md:text-5xl">
            {t.location.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/60 md:mt-6 md:text-lg md:leading-8">
            {t.location.text}
          </p>

        </motion.div>

        {/* Основной блок */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#1A0B24] via-[#100916] to-[#08050B] p-6 shadow-[0_25px_80px_rgba(0,0,0,.35)] md:rounded-[40px] md:p-12"
        >

          {/* Свечение */}

          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-fuchsia-600/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

            {/* Левая часть */}

            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-black/20 p-8 text-center backdrop-blur-xl md:min-h-[380px] md:p-12">

              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="flex h-20 w-20 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10 shadow-[0_0_50px_rgba(251,191,36,.08)]"
              >
                <MapPin
                  size={38}
                  className="text-amber-200"
                />
              </motion.div>

              <h3 className="mt-7 text-2xl font-bold md:text-3xl">
                {t.location.restaurant}
              </h3>

              <p className="mt-4 text-base leading-7 text-white/50 md:text-lg">
                {t.location.address}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-fuchsia-300/70">
                <Sparkles size={16} />
                <span>
                  {t.location.city}
                </span>
                <Sparkles size={16} />
              </div>

            </div>

            {/* Правая часть */}

            <div>

              <div className="space-y-4 md:space-y-5">

                {/* Дата */}

                <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl md:gap-5 md:p-6">

                  <CalendarDays
                    size={30}
                    className="shrink-0 text-amber-200 md:size-[34px]"
                  />

                  <div>

                    <div className="text-xs uppercase tracking-[2px] text-white/40 md:text-sm md:tracking-[3px]">
                      {t.program.dateTitle}
                    </div>

                    <div className="mt-1 text-lg font-bold md:text-xl">
                      {t.program.date}
                    </div>

                  </div>

                </div>

                {/* Время */}

                <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl md:gap-5 md:p-6">

                  <Clock3
                    size={30}
                    className="shrink-0 text-fuchsia-300 md:size-[34px]"
                  />

                  <div>

                    <div className="text-xs uppercase tracking-[2px] text-white/40 md:text-sm md:tracking-[3px]">
                      {t.location.start}
                    </div>

                    <div className="mt-1 text-lg font-bold md:text-xl">
                      {t.location.datetime}
                    </div>

                  </div>

                </div>

              </div>

              {/* Нижняя подпись */}

              <div className="mt-8 flex items-center justify-center gap-3 text-center text-sm text-white/40 md:mt-10 md:text-base">

                <span className="h-px w-12 bg-gradient-to-r from-transparent to-fuchsia-400/30" />

                <Sparkles
                  size={16}
                  className="text-amber-200/60"
                />

                <span>
                  {t.location.button}
                </span>

                <Sparkles
                  size={16}
                  className="text-amber-200/60"
                />

                <span className="h-px w-12 bg-gradient-to-l from-transparent to-fuchsia-400/30" />

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}