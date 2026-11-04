import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BOXPACK — Фулфилмент для вашего бизнеса",
  description:
    "Фулфилмент BOXPACK: приёмка, хранение, сборка заказов и отправка на маркетплейсы.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
