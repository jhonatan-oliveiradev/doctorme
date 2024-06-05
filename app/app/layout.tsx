import type { Metadata } from "next";
import { PreloadResources } from "./preload-resources";
import { Roboto, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "600", "700"],
  variable: "--font-source-sans-3",
});

export const metadata: Metadata = {
  title: "DoctorMe",
  description: "Assistente pessoal para agendar consultas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <PreloadResources />
      <body
        className={`${roboto.variable} ${sourceSans3.variable} bg-zinc-100`}
      >
        <div className="mx-auto mt-10 w-full max-w-[382px] rounded-3xl bg-white px-7 py-10 shadow-md">
          {children}
        </div>
      </body>
    </html>
  );
}
