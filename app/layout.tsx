import "./globals.css";
import { Manrope } from "next/font/google";

import { LanguageProvider } from "./components/context/LanguageContext";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
});

export const metadata = {
  title: "День рождения Руслана 🎉",
  description: "Приглашение на день рождения Руслана",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={manrope.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}