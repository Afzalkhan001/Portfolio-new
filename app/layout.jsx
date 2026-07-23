import "./globals.css";
import { Inter_Tight, Instrument_Serif, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter-tight",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
  variable: "--font-instrument",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata = {
  title: "Afzal Khan — AI Engineer",
  description:
    "AI Engineer, AI Automation Engineer, and Full Stack AI Developer. I build AI-powered products that solve real-world business problems — LLM applications, agents, automation systems, and modern full-stack development.",
  openGraph: {
    title: "Afzal Khan — AI Engineer",
    description:
      "AI-powered products that solve real business problems: LLM apps, agents, automation, full-stack AI development.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${instrument.variable} ${geistMono.variable}`}
    >
      <body className="grain">
        <Cursor />
        <Loader />
        <SmoothScroll>
          <Nav />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
