"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { useLanguage } from "@/app/components/context/LanguageContext";

export default function Program() {
  const { t } = useLanguage();

  return (
    <section
      id="program"
      className="relative bg-[#09050D] py-16 md:py-28"
    >
      <div className="container">

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
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
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#1A0B24] via-[#100916] to-[#08050B] md:rounded-[40px]"
        >

          {/* Декоративное свечение */}

          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-2">

            {/* Левая часть */}

            <div className="p-6 md:p-10 lg:p-16">

              <span className="inline-flex rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-xs uppercase tracking-[3px] text-fuchsia-300 md:px-5 md:text-sm md:tracking-[4px]">
                {t.program.badge}
              </span>

              <h2 className="mt-6 text-3xl font-black uppercase leading-tight md:mt-8 md:text-5xl">
                {t.program.title}
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/70 md:mt-8 md:text-lg md:leading-9">
                {t.program.text}
              </p>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/60 md:text-lg md:leading-9">
                {t.program.text2}
              </p>

              {/* Декоративный элемент */}

              <div className="mt-10 flex items-center gap-4 text-amber-200/60">
                <Sparkles size={20} />

                <div className="h-px w-20 bg-gradient-to-r from-amber-300/50 to-transparent" />

                <span className="text-sm uppercase tracking-[3px]">
                  17.08.2026
                </span>
              </div>

            </div>

            {/* Правая часть */}

            <div className="flex items-center justify-center border-t border-white/10 bg-white/[0.035] p-6 md:p-10 lg:border-l lg:border-t-0 lg:p-12">

              <div className="w-full max-w-md space-y-4 md:space-y-6">

                {/* Дата */}

                <div className="rounded-3xl border border-white/10 bg-black/25 p-5 backdrop-blur-xl md:p-7">

                  <div className="flex items-center gap-4 md:gap-5">

                    <CalendarDays
                      size={30}
                      className="shrink-0 text-amber-200 md:size-[34px]"
                    />

                    <div>

                      <div className="text-xs uppercase tracking-[2px] text-white/40 md:text-sm md:tracking-[3px]">
                        {t.program.dateTitle}
                      </div>

                      <div className="mt-2 text-2xl font-bold md:text-3xl">
                        {t.program.date}
                      </div>

                    </div>

                  </div>

                </div>

                {/* Время */}

                <div className="rounded-3xl border border-white/10 bg-black/25 p-5 backdrop-blur-xl md:p-7">

                  <div className="flex items-center gap-4 md:gap-5">

                    <Clock3
                      size={30}
                      className="shrink-0 text-fuchsia-300 md:size-[34px]"
                    />

                    <div>

                      <div className="text-xs uppercase tracking-[2px] text-white/40 md:text-sm md:tracking-[3px]">
                        {t.program.timeTitle}
                      </div>

                      <div className="mt-2 text-xl font-bold md:text-2xl">
                        {t.program.time}
                      </div>

                    </div>

                  </div>

                </div>

                {/* Место */}

                <div className="rounded-3xl border border-white/10 bg-black/25 p-5 backdrop-blur-xl md:p-7">

                  <div className="flex items-center gap-4 md:gap-5">

                    <MapPin
                      size={30}
                      className="shrink-0 text-purple-300 md:size-[34px]"
                    />

                    <div>

                      <div className="text-xs uppercase tracking-[2px] text-white/40 md:text-sm md:tracking-[3px]">
                        {t.program.placeTitle}
                      </div>

                      <div className="mt-2 text-lg font-bold md:text-2xl">
                        {t.program.place}
                      </div>

                    </div>

                  </div>

                </div>

                {/* Кнопка */}

                <a
                  href="#registration"
                  className="mt-2 flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-600 py-4 text-base font-bold shadow-[0_15px_40px_rgba(217,70,239,.15)] transition hover:scale-[1.01] hover:shadow-[0_15px_50px_rgba(217,70,239,.25)] md:py-5 md:text-lg"
                >
                  {t.program.button}

                  <ArrowRight size={21} />
                </a>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}