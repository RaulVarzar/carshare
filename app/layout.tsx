import type { Metadata } from "next";
import { Poppins, Jersey_15, Inter, Cairo } from "next/font/google";
import "./globals.css";
import ScrollContext from "./Components/SmoothScroll";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jersey = Jersey_15({
  weight: "400",
  variable: "--font-jersey",
  subsets: ["latin"],
});

const cairo = Cairo({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CarShare",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="emerald"
      className={`${poppins.variable} ${jersey.variable} ${inter.variable} ${cairo.variable}`}
    >
      {/* <body className={inter.className}>{children}</body> */}
      <body>
        <ScrollContext>{children}</ScrollContext>
      </body>
    </html>
  );
}
