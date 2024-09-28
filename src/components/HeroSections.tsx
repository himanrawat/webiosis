"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import schoolErp from "@/assets/schoolerp.png";
import Iamart from "@/assets/I-Am-Art.png";

const HeroSections = () => {
	return <HeroParallax products={products} />;
};

export const products = [
	{
		title: "School ERP",
		link: "#",
		thumbnail: schoolErp.src,
	},
	{
		title: "I Am Art",
		link: "https://iamart-ochre.vercel.app/",
		thumbnail: Iamart.src,
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
