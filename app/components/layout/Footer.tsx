"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

import { useLanguage } from "@/app/components/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#07040B] py-10 md:py-14">

      {/* Декоративные свечения */}

      <div className="pointer-events-none absolute left-1/4 top-0 h-40 w-40 rounded-full bg-fuchsia-600/10 blur-3xl" />

      <div className="pointer-events-none absolute right-1/4 bottom-0 h-40 w-40 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="container relative z-10">

        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">

          {/* Название */}

          <Link
            href="/"
            className="group flex items-center gap-3"
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10 text-amber-200 transition group-hover:border-amber-300/50">
              ✦
            </div>

            <div>

              <div className="text-xs uppercase tracking-[3px] text-fuchsia-300">
                {t.footer.company}
              </div>

              <div className="mt-1 text-sm font-bold text-white/80">
                {t.footer.date}
              </div>

            </div>

          </Link>

          {/* Центр */}

          <div className="flex items-center gap-3 text-sm text-white/40">

            <Sparkles
              size={15}
              className="text-amber-200/60"
            />

            <span>
              {t.footer.title}
            </span>

            <Sparkles
              size={15}
              className="text-amber-200/60"
            />

          </div>

          {/* Наверх */}

          <a
            href="#"
            className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-xs uppercase tracking-[2px] text-white/50 transition hover:border-fuchsia-400/30 hover:text-fuchsia-300"
          >
            ↑ {t.footer.top}
          </a>

        </div>

        {/* Нижняя линия */}

        <div className="mx-auto mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent md:mt-10" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-white/30 md:flex-row">

          <span>
            {t.footer.place}
          </span>

          <span>
            {t.footer.copyright}
          </span>

        </div>

      </div>

    </footer>
  );
}