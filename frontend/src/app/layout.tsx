import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Roboto_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-primary",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "Aman Vishwakarma | Software Developer",
  description: "Portfolio of Aman Vishwakarma, Junior Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body
        className={`${poppins.variable} ${robotoMono.variable}`}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          fontFamily: "var(--font-primary), sans-serif",
        }}
      >
        <Navbar />

        <main
          style={{
            flex: 1,
            minWidth: "320px",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "1rem",
            width: "100%",
          }}
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
