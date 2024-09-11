import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Nav from "@/components/navDesktop/nav";
import NavMobile from "@/components/navMobile/nav";
import Modal from "@/components/modal/modal";
import Toasts from "@/components/toasts/toasts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Magic Buttons",
  description: "Discover +100 Buttons With CSS Code",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <NavMobile />
          <Nav />
          <Modal />
          <Toasts />
          {}
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
