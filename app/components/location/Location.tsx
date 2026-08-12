"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Sparkles,
  Clock3,
  CalendarDays,
  Navigation,
} from "lucide-react";

import { useLanguage } from "@/app/components/context/LanguageContext";

const MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2471.242794828613!2d75.3165941!3d51.7134793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42582b6b89eff9c5%3A0x2aa1265ba328657c!2z0JfQtdC90L3QvtC1INCc0L7RgtC10LrRgtCw0YfQsA!5e0!3m2!1sru!2skz!4v1786530000000!5m2!1sru!2skz";

const ROUTE_URL =
  "https://www.google.com/maps/dir/?api=1&destination=51.7134793,75.3165941";

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

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/60 md:mt-6 md:text-lg">
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
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#1A0B24] via-[#100916] to-[#08050B] p-4 shadow-[0_25px_80px_rgba(0,0,0,.35)] md:rounded-[40px] md:p-6"
        >

          {/* Свечение */}

          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-fuchsia-600/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />

          <div className="relative grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:gap-8">

            {/* ========================= */}
            {/* КАРТА */}
            {/* ========================= */}

            <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-black/30 md:min-h-[520px]">

              <iframe
                src={MAP_URL}
                title="Золотой Дракон — Экибастуз"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Небольшая подпись поверх карты */}

              <div className="pointer-events-none absolute left-4 top-4 rounded-2xl border border-white/10 bg-black/70 px-4 py-3 backdrop-blur-xl md:left-6 md:top-6">

                <div className="flex items-center gap-2">

                  <MapPin
                    size={18}
                    className="text-amber-200"
                  />

                  <span className="text-sm font-semibold text-white">
                    {t.location.restaurant}
                  </span>

                </div>

              </div>

            </div>

            {/* ========================= */}
            {/* ИНФОРМАЦИЯ */}
            {/* ========================= */}

            <div className="flex flex-col justify-center rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-xl md:p-8">

              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="flex h-16 w-16 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10 shadow-[0_0_50px_rgba(251,191,36,.08)]"
              >

                <MapPin
                  size={32}
                  className="text-amber-200"
                />

              </motion.div>

              <h3 className="mt-6 text-2xl font-bold md:text-3xl">
                {t.location.restaurant}
              </h3>

              <p className="mt-4 text-base leading-7 text-white/50 md:text-lg">
                {t.location.address}
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm text-fuchsia-300/70">

                <Sparkles size={16} />

                <span>
                  {t.location.city}
                </span>

                <Sparkles size={16} />

              </div>

              {/* Дата */}

              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">

                <CalendarDays
                  size={28}
                  className="shrink-0 text-amber-200"
                />

                <div>

                  <div className="text-xs uppercase tracking-[2px] text-white/40">
                    {t.program.dateTitle}
                  </div>

                  <div className="mt-1 text-lg font-bold">
                    {t.program.date}
                  </div>

                </div>

              </div>

              {/* Время */}

              <div className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">

                <Clock3
                  size={28}
                  className="shrink-0 text-fuchsia-300"
                />

                <div>

                  <div className="text-xs uppercase tracking-[2px] text-white/40">
                    {t.location.start}
                  </div>

                  <div className="mt-1 text-lg font-bold">
                    18:30
                  </div>

                </div>

              </div>

              {/* Кнопка маршрута */}

              <a
                href={ROUTE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-purple-600 py-4 text-base font-bold shadow-[0_15px_40px_rgba(217,70,239,.15)] transition hover:scale-[1.02] hover:shadow-[0_15px_50px_rgba(217,70,239,.25)] md:py-5 md:text-lg"
              >

                <Navigation size={21} />

                {t.location.routeButton}

              </a>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}