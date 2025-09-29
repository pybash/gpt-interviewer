import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";


const spacemono = Space_Mono({
  variable: "--font-space-mono",
  weight: "400"
});

export const metadata: Metadata = {
  title: "GPT Interviewer",
  description: "Another ChatGPT Wrapper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spacemono.variable} antialiased min-w-screen min-h-screen`}
      >
        <div className="min-w-screen min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
