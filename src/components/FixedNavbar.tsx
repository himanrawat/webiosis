"use client";
import React from "react";
import { FixedNav } from "./ui/fixed-navbar-ui";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

const FixedNavbar = () => {
	const navItems = [
		{
			name: "Home",
			link: "/",
			icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
		},
		{
			name: "About",
			link: "/about",
			icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
		},
		{
			name: "Service",
			link: "/service",
			icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
		},
		{
			name: "Contact",
			link: "/contact",
			icon: (
				<IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
			),
		},
	];
	return (
		<div className="relative w-full">
			<FixedNav navItems={navItems} />
		</div>
	);
};

export default FixedNavbar;
