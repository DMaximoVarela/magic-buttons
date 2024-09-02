import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/navDesktop/nav";
import NavMobile from "@/components/navMobile/nav";
import Modal from "@/components/modal/modal";
import Toast from "@/components/toast/toast";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <NavMobile />
        <Nav />
        <Modal />
        <Toast />
        {}
        {children}
      </body>
    </html>
  );
}
