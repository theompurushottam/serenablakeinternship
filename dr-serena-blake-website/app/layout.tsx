import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Dr. Serena Blake, PsyD - Clinical Psychologist in Los Angeles",
  description: "Licensed clinical psychologist in Los Angeles specializing in anxiety, relationship counseling, and trauma recovery. 8 years experience with evidence-based therapy. Book your free consultation today.",
  keywords: "therapist, psychologist, Los Angeles, anxiety, trauma, relationship counseling, therapy, mental health",
  authors: [{ name: "Dr. Serena Blake" }],
  openGraph: {
    title: "Dr. Serena Blake, PsyD - Clinical Psychologist",
    description: "Licensed clinical psychologist in Los Angeles specializing in anxiety, relationship counseling, and trauma recovery.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
