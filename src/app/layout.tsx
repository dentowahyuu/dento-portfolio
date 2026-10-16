import type { Metadata } from "next";
import { Oswald, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dento Wahyu — Portfolio",
  description:
    "Design-Driven Full-Stack Engineer operating at the intersection of robust system architecture and seamless user experiences.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${spaceGrotesk.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <body className="bg-surface font-body-md text-on-surface antialiased selection:bg-secondary selection:text-on-secondary">
        {children}
      </body>
    </html>
  );
}
