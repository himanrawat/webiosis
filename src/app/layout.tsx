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
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.className} overflow-x-hidden`}
				suppressHydrationWarning
			>
				<ThemeProvider>
					{children}
					<ThemeToggleButton />
				</ThemeProvider>
			</body>
		</html>
	);
}
