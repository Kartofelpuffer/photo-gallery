import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Journey of Eduardo Sato",
  description: "A personal collection of photographs.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
