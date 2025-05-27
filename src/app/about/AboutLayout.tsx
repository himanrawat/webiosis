import FloatingNavbar from "@/components/FloatingNavbar";
import React from "react";

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			{/* Use the same FloatingNavbar */}
			<FloatingNavbar />
			{children}
		</div>
	);
}
