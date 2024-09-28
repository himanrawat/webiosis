import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingNavbar from "@/components/FloatingNavbar";
import { ThemeProvider } from "@/components/ThemeContext";
import ThemeToggleButton from "@/components/ThemeToggleButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webiosis",
  description: "Created By Webiosis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          <div className="relative w-full flex justify-center items-center">
            <FloatingNavbar />
          </div>
          {children}
          <ThemeToggleButton />
        </body>
      </ThemeProvider>
    </html>
  );
}