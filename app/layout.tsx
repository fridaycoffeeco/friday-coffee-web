import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter-var",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Friday Coffee Co. | Mobile Coffee Catering Dallas-Fort Worth",
    template: "%s | Friday Coffee Co.",
  },
  description:
    "Friday Coffee Co. provides custom espresso bars, expert baristas, and unforgettable coffee experiences for weddings, corporate events, and brand activations across Dallas-Fort Worth.",
  keywords: [
    "coffee catering Dallas",
    "mobile coffee cart DFW",
    "wedding coffee bar Dallas",
    "corporate coffee catering Dallas Fort Worth",
    "espresso bar catering Texas",
  ],
  authors: [{ name: "Friday Coffee Co." }],
  creator: "Friday Coffee Co.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.fridaycoffee.co",
    siteName: "Friday Coffee Co.",
    title: "Friday Coffee Co. | Mobile Coffee Catering Dallas-Fort Worth",
    description:
      "Custom espresso bars, expert baristas, and unforgettable coffee experiences for events across Dallas-Fort Worth.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Friday Coffee Co. | Mobile Coffee Catering DFW",
    description:
      "Custom espresso bars for weddings, corporate events, and brand activations across Dallas-Fort Worth.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
