import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="load-dark-mode" strategy="beforeInteractive">
          {`
            function updateTheme(e) {
              document.documentElement.classList.toggle("dark", e.matches);
            }

            const darkModeMediaQuery = window.matchMedia(
              "(prefers-color-scheme: dark)"
            );
            // Initial check
            updateTheme(darkModeMediaQuery);

            // Add listener for changes
            darkModeMediaQuery.addEventListener("change", updateTheme);

            // Cleanup when page unloads
            window.addEventListener("unload", () => {
              darkModeMediaQuery.removeEventListener("change", updateTheme);
            });
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
