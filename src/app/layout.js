import "./globals.css";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: "Forhad Khan — Frontend Engineer",
  description:
    "Frontend Engineer specializing in React, Next.js, and React Native. Shipped a production e-commerce platform and a real-time clinic system.",
  openGraph: {
    title: "Forhad Khan — Frontend Engineer",
    description:
      "Frontend Engineer focused on React, Next.js, and React Native.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#060608",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-base`}
    >
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
