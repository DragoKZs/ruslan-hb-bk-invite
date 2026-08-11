"use client";

import { useState } from "react";
import {
  User,
  Briefcase,
  MessageCircle,
  CheckCircle2,
  Loader2,
  PartyPopper,
} from "lucide-react";

import { useLanguage } from "@/app/components/context/LanguageContext";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz7vO-HDhbIGoHMIz49gHTS6W6AlCiupRdTV0x6w8MioP2ydgLWK9wTl_3LFgpmrOZuTg/exec";

export default function Registration() {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    fullname: "",
    position: "",
    department: "",
    attendance: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (
      !form.fullname ||
      !form.position ||
      !form.department ||
      !form.attendance
    ) {
      alert(t.registration.validation);
      return;
    }

    try {
      setLoading(true);

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      setSuccess(true);

      setForm({
        fullname: "",
        position: "",
        department: "",
        attendance: "",
      });
    } catch {
      alert(t.registration.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="registration"
      className="relative overflow-hidden bg-[#09050D] py-16 md:py-32"
    >
      {/* Фоновые свечения */}

      <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-10 right-[-120px] h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl">

          {/* Заголовок */}

          <div className="mb-10 text-center md:mb-14">

            <span className="inline-flex rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-xs uppercase tracking-[3px] text-fuchsia-300 md:px-5 md:text-sm md:tracking-[4px]">
              {t.registration.badge}
            </span>

            <h2 className="mt-6 text-3xl font-black uppercase md:mt-8 md:text-5xl">
              {t.registration.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/60 md:mt-6 md:text-lg">
              {t.registration.subtitle}
            </p>

          </div>

          {success ? (

            /* Успешная отправка */

            <motionSuccess
              title={t.registration.successTitle}
              text={t.registration.successText}
            />

          ) : (

            /* Форма */

            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_25px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl md:rounded-[40px] md:p-10"
            >

              {/* Декоративный элемент */}

              <div className="pointer-events-none absolute right-6 top-6 text-amber-200/30">
                <SparklesIcon />
              </div>

              <div className="space-y-7 md:space-y-8">

                {/* ФИО */}

                <div>

                  <label className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[2px] text-white/60 md:text-sm md:tracking-[3px]">

                    <User
                      size={18}
                      className="text-fuchsia-300"
                    />

                    {t.registration.fullname}

                  </label>

                  <input
                    type="text"
                    name="fullname"
                    value={form.fullname}
                    onChange={handleChange}
                    placeholder={t.registration.fullnamePlaceholder}
                    className="w-full rounded-2xl border border-white/10 bg-[#100916] px-5 py-4 text-base text-white outline-none transition placeholder:text-white/30 focus:border-fuchsia-400/50 focus:ring-1 focus:ring-fuchsia-400/20 md:px-6 md:py-5 md:text-lg"
                  />

                </div>

                {/* Кто ты */}

                <div>

                  <label className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[2px] text-white/60 md:text-sm md:tracking-[3px]">

                    <Briefcase
                      size={18}
                      className="text-fuchsia-300"
                    />

                    {t.registration.position}

                  </label>

                  <input
                    type="text"
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                    placeholder={t.registration.positionPlaceholder}
                    className="w-full rounded-2xl border border-white/10 bg-[#100916] px-5 py-4 text-base text-white outline-none transition placeholder:text-white/30 focus:border-fuchsia-400/50 focus:ring-1 focus:ring-fuchsia-400/20 md:px-6 md:py-5 md:text-lg"
                  />

                </div>

                {/* Комментарий */}

                <div>

                  <label className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[2px] text-white/60 md:text-sm md:tracking-[3px]">

                    <MessageCircle
                      size={18}
                      className="text-fuchsia-300"
                    />

                    {t.registration.department}

                  </label>

                  <textarea
                    name="department"
                    value={form.department}
                    onChange={handleChange}
                    placeholder={t.registration.departmentPlaceholder}
                    rows={3}
                    className="w-full resize-none rounded-2xl border border-white/10 bg-[#100916] px-5 py-4 text-base text-white outline-none transition placeholder:text-white/30 focus:border-fuchsia-400/50 focus:ring-1 focus:ring-fuchsia-400/20 md:px-6 md:py-5 md:text-lg"
                  />

                </div>

                {/* Подтверждение */}

                <div>

                  <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[2px] text-white/60 md:text-sm md:tracking-[3px]">

                    <PartyPopper
                      size={18}
                      className="text-amber-200"
                    />

                    {t.registration.attendanceTitle}

                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">

                    {/* Буду */}

                    <label
                      className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-5 transition ${
                        form.attendance === "С радостью буду! 🎉"
                          ? "border-fuchsia-400/60 bg-fuchsia-500/10 shadow-[0_0_30px_rgba(217,70,239,.10)]"
                          : "border-white/10 bg-white/[0.03] hover:border-fuchsia-400/30 hover:bg-white/[0.05]"
                      }`}
                    >

                      <input
                        type="radio"
                        name="attendance"
                        value="С радостью буду! 🎉"
                        checked={
                          form.attendance === "С радостью буду! 🎉"
                        }
                        onChange={handleChange}
                        className="h-5 w-5 shrink-0 accent-fuchsia-500"
                      />

                      <span className="text-sm leading-6 md:text-base">
                        {t.registration.attendanceConfirm}
                      </span>

                    </label>

                    {/* Не буду */}

                    <label
                      className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-5 transition ${
                        form.attendance === "К сожалению, не смогу 😢"
                          ? "border-white/30 bg-white/[0.06]"
                          : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                      }`}
                    >

                      <input
                        type="radio"
                        name="attendance"
                        value="К сожалению, не смогу 😢"
                        checked={
                          form.attendance === "К сожалению, не смогу 😢"
                        }
                        onChange={handleChange}
                        className="h-5 w-5 shrink-0 accent-fuchsia-500"
                      />

                      <span className="text-sm leading-6 text-white/80 md:text-base">
                        {t.registration.attendanceDecline}
                      </span>

                    </label>

                  </div>

                </div>

                {/* Кнопка */}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-600 py-4 text-base font-bold shadow-[0_15px_40px_rgba(217,70,239,.15)] transition hover:scale-[1.01] hover:shadow-[0_15px_50px_rgba(217,70,239,.25)] disabled:cursor-not-allowed disabled:opacity-60 md:py-5 md:text-lg"
                >

                  {loading ? (
                    <>
                      <Loader2
                        size={22}
                        className="animate-spin"
                      />

                      {t.registration.loading}
                    </>
                  ) : (
                    <>
                      <PartyPopper size={21} />

                      {t.registration.button}
                    </>
                  )}

                </button>

              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
}

/* Успешная отправка */

function motionSuccess({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-fuchsia-400/20 bg-white/[0.045] p-10 text-center shadow-[0_25px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl md:rounded-[40px] md:p-16">

      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10 md:h-24 md:w-24">

        <CheckCircle2
          size={52}
          className="text-amber-200"
        />

      </div>

      <h3 className="mt-7 text-3xl font-black md:mt-8 md:text-4xl">
        {title}
      </h3>

      <p className="mt-5 whitespace-pre-line text-base leading-8 text-white/60 md:mt-6 md:text-lg">
        {text}
      </p>

    </div>
  );
}

function SparklesIcon() {
  return (
    <span className="text-2xl">
      ✦
    </span>
  );
}