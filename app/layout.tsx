import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Photographs",
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
