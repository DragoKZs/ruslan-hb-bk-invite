"use client";

import Link from "next/link";
import { Menu, X, Languages } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useLanguage } from "@/app/components/context/LanguageContext";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const navigation = [
    {
      title: t.header.menu[0],
      href: "#about",
    },
    {
      title: t.header.menu[1],
      href: "#program",
    },
    {
      title: t.header.menu[2],
      href: "#location",
    },
    {
      title: t.header.menu[3],
      href: "#registration",
    },
  ];

  function changeLanguage(lang: "ru" | "kz") {
    setLanguage(lang);
  }

  return (
    <>
      {/* HEADER */}

      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#09050D]/85 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="container flex h-20 items-center justify-between md:h-24">

          {/* Логотип / название */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10 text-amber-200 md:h-12 md:w-12">
              ✦
            </div>

            <div>

              <div className="text-[10px] uppercase tracking-[3px] text-fuchsia-300 md:text-xs md:tracking-[5px]">
                {t.header.company}
              </div>

              <div className="text-base font-black uppercase tracking-[2px] md:text-xl md:tracking-[3px]">
                {t.header.title}
              </div>

            </div>
          </Link>

          {/* DESKTOP */}

          <nav className="hidden items-center gap-7 lg:flex xl:gap-10">

            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs uppercase tracking-[1.5px] text-white/70 transition hover:text-fuchsia-300 xl:text-sm xl:tracking-[2px]"
              >
                {item.title}
              </a>
            ))}

            {/* Переключатель языка */}

            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1">

              <button
                onClick={() => changeLanguage("ru")}
                className={`rounded-full px-3 py-2 text-xs font-bold transition ${
                  language === "ru"
                    ? "bg-fuchsia-600 text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                RU
              </button>

              <button
                onClick={() => changeLanguage("kz")}
                className={`rounded-full px-3 py-2 text-xs font-bold transition ${
                  language === "kz"
                    ? "bg-fuchsia-600 text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                KZ
              </button>

            </div>

            <a
              href="#registration"
              className="rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 px-6 py-3 text-sm font-semibold shadow-[0_10px_30px_rgba(217,70,239,.15)] transition hover:scale-[1.03]"
            >
              {t.header.button}
            </a>

          </nav>

          {/* MOBILE */}

          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] lg:hidden"
            aria-label="Открыть меню"
          >
            <Menu size={25} />
          </button>

        </div>
      </header>

      {/* MOBILE MENU */}

      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-[#09050D]"
          >

            {/* Фон */}

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(217,70,239,.15),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(124,58,237,.12),transparent_45%)]" />

            {/* Верх */}

            <div className="container relative flex h-20 items-center justify-between md:h-24">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10 text-amber-200">
                  ✦
                </div>

                <span className="text-sm font-bold uppercase tracking-[2px]">
                  {t.header.title}
                </span>

              </div>

              <button
                onClick={() => setMobileOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
                aria-label="Закрыть меню"
              >
                <X size={25} />
              </button>

            </div>

            {/* Меню */}

            <div className="relative mt-16 flex flex-col items-center gap-8 px-6">

              {navigation.map((item) => (

                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-bold transition hover:text-fuchsia-300"
                >
                  {item.title}
                </a>

              ))}

              {/* Язык */}

              <div className="mt-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1">

                <button
                  onClick={() => changeLanguage("ru")}
                  className={`rounded-full px-5 py-3 text-sm font-bold transition ${
                    language === "ru"
                      ? "bg-fuchsia-600"
                      : "text-white/50"
                  }`}
                >
                  🇷🇺 RU
                </button>

                <button
                  onClick={() => changeLanguage("kz")}
                  className={`rounded-full px-5 py-3 text-sm font-bold transition ${
                    language === "kz"
                      ? "bg-fuchsia-600"
                      : "text-white/50"
                  }`}
                >
                  🇰🇿 KZ
                </button>

              </div>

              <a
                href="#registration"
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex w-full max-w-sm items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 px-8 py-5 text-lg font-bold shadow-[0_15px_40px_rgba(217,70,239,.2)]"
              >
                {t.header.button}
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}