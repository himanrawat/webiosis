"use client";
import React, { useState } from "react";
import {
	motion,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import FullLogo from "@/assets/fulllogo.svg";
import Image from "next/image";

export const FloatingNav = ({
	navItems,
	className,
}: {
	navItems: {
		name: string;
		link: string;
		icon?: JSX.Element;
	}[];
	className?: string;
}) => {
	const { scrollY } = useScroll();
	const [visible, setVisible] = useState(false);

	useMotionValueEvent(scrollY, "change", (current) => {
		if (typeof current === "number") {
			if (current <= window.innerHeight) {
				setVisible(false);
			} else {
				setVisible(true);
			}
		}
	});

	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{
					opacity: 0,
					y: -100,
				}}
				animate={{
					y: visible ? 0 : -100,
					opacity: visible ? 1 : 0,
				}}
				transition={{
					duration: 0.2,
				}}
				className={cn(
					"flex w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] dark:bg-black/30 rounded-full backdrop-filter backdrop-blur-sm bg-opacity-10 bg-black/40 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 py-2 items-center gap-4 justify-between",
					className
				)}
			>
				<div className="flex items-center justify-between space-x-4">
					<Image
						src={FullLogo}
						alt="logo"
						className="h-12 w-fit hidden md:block"
					/>
					{navItems.map((navItem: any, idx: number) => (
						<Link
							key={`link-${idx}`}
							href={navItem.link}
							className={cn(
								"relative dark:text-neutral-50 items-center flex space-x-1 text-white dark:hover:text-orange hover:text-orange"
							)}
						>
							<span className="block sm:hidden">{navItem.icon}</span>
							<span className="hidden sm:block text-sm">{navItem.name}</span>
						</Link>
					))}
				</div>
				<button className="border text-sm font-medium relative border-black dark:border-white/[0.2] text-orange dark:text-orange px-4 py-2 rounded-full bg-black">
					<span>Schedule a Call</span>
					<span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-orange to-transparent h-px" />
				</button>
			</motion.div>
		</AnimatePresence>
	);
};
