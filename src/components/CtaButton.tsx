"use client";
import React from "react";
import Link from "next/link";

interface ctaBtnProps {
	text: string;
	href: string;
}

const CtaButton = ({ text, href }: ctaBtnProps) => {
	return (
		<Link
			href={href}
			className="relative inline-flex items-center justify-center py-3 px-4 transition-all duration-200 ease-in-out border-none bg-transparent cursor-pointer group mb-2"
		>
			<div className="absolute left-0 block w-[45px] h-[45px] rounded-full dark:bg-black bg-white transition-all duration-300 ease-in-out group-hover:w-full"></div>
			<h6 className="relative text-base font-medium dark:text-white text-black ">
				{text}
			</h6>
		</Link>
	);
};

export default CtaButton;
