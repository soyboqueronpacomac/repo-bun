import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { bodyFont } from "@repo/fonts/fonts";
import { NavTop } from "@repo/components/components";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.className}`}>
        <NavTop height="4rem" backgroundColor="blue" />
        {children}
      </body>
    </html>
  );
}
