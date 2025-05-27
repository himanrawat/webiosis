"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>(null);
	return (
		<div
			className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
		>
			<Menu setActive={setActive}>
				<Link href={"/"}>Home</Link>
				<Link href={"/about"}>About</Link>
				<Link href={"/service"}>Service</Link>
				<Link href={"/contact"}>Contact</Link>
				<Link href={"/about"}>Schedule call</Link>
			</Menu>
		</div>
	);
}
