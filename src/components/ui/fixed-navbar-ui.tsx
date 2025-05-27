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
import Logo from "@/assets/webiosis-logo-1.svg";
import Image from "next/image";
import { SignupFormDemo } from "../schedulecall";

export const FixedNav = ({
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
	const [isFormOpen, setIsFormOpen] = useState(false);

	return (
		<>
			<motion.div
				initial={{
					opacity: 1,
					y: 0,
				}}
				className={cn(
					"flex w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] dark:bg-black/30 rounded-full backdrop-filter backdrop-blur-sm bg-opacity-10 bg-black/40 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 py-2 items-center gap-4 justify-between",
					className
				)}
			>
				<div className="flex items-center justify-between space-x-4">
					<Image src={Logo} alt="logo" className="h-12 w-fit hidden md:block" />
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
				<Link
					href="/scheduleCall"
					className="border text-sm font-medium relative border-black dark:border-white/[0.2] text-orange dark:text-orange px-4 py-2 rounded-full bg-black"
				>
					<span>Schedule a Call</span>
					<span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-orange to-transparent h-px" />
				</Link>
			</motion.div>

			{isFormOpen && (
				<div className="fixed inset-0 z-[5001] flex items-center justify-center bg-black bg-opacity-50">
					<motion.div
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						className="bg-white dark:bg-black p-8 rounded-lg shadow-lg"
					>
						<SignupFormDemo />
						<button
							className="mt-4 text-sm text-red-500"
							onClick={() => setIsFormOpen(false)}
						>
							Close
						</button>
					</motion.div>
				</div>
			)}
		</>
	);
};
