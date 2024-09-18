"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import schoolErp from "@/assets/schoolerp.png";

const HeroSections = () => {
	return <HeroParallax products={products} />;
};

export const products = [
	{
		title: "Moonbeam",
		link: "#",
		thumbnail: schoolErp.src,
	},
	{
		title: "Cursor",
		link: "#",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/cursor.png",
	},
	{
		title: "School ERP",
		link: "#",
		thumbnail: schoolErp.src,
	},

	{
		title: "Editorially",
		link: "#",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/editorially.png",
	},
	{
		title: "Editrix AI",
		link: "#",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/editrix.png",
	},
	{
		title: "Pixel Perfect",
		link: "#",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
	},
];

export default HeroSections;
