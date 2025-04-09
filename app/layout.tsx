import type { Metadata } from "next";
import { Poppins, Jersey_15, Inter, Cairo, Inria_Sans } from "next/font/google";
import "./globals.css";
import ScrollContext from "./utils/SmoothScroll";
import Navbar from "./Components/menu/Navbar";
import { ViewTransitions } from "next-view-transitions";
import { usePathname } from "next/navigation";

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

const inria = Inria_Sans({
  weight: ["300", "400", "700"],
  variable: "--font-inria",
  subsets: ["latin"],
});

const cairo = Cairo({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Huza Customs",
  description: "Created by Raul Varzar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ViewTransitions>
    <html
      lang="en"
      data-theme="emerald"
      className={`${inria.variable} ${poppins.variable} ${jersey.variable} ${inter.variable} ${cairo.variable} bg-base-100`}
    >
      <body>
        <Navbar />
        <ScrollContext>
          <div id="demo">{children}</div>
        </ScrollContext>
      </body>
    </html>
    // </ViewTransitions>
  );
}
