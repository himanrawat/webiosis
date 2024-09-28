"use client";

import React from "react";
import CtaButton from "./CtaButton";
import logo from "@/assets/webiosis-white.svg";
import Image from "next/image";
import {
	IconArrowRight,
	IconBrandLinkedin,
	IconBrandX,
	IconBrandGoogleFilled,
	IconBrandWhatsapp,
} from "@tabler/icons-react";
import { TextHoverEffect } from "./ui/text-hover-effect";

const Footer = () => {
	return (
		<footer className="  ">
			<div className="flex justify-center items-start flex-wrap">
				<div className="flex flex-wrap justify-between items-center rounded-none md:w-2/3 w-full bg-orange md:rounded-r-full">
					<div className="md:w-1/2  p-8 ">
						<Image
							src={logo}
							alt="logo"
							className="lg:w-40 lg:h-40 mx-auto w-20 h-20 "
						/>
						<h1 className="lg:text-4xl text-lg font-bold text-center">
							Webiosis Systems
						</h1>
					</div>
					<div className="md:w-1/2  p-8 ">
						<h6 className="lg:text-4xl text-lg mb-6">
							Discover Webiosis<span className="text-6xl text-orange">.</span>
						</h6>
						<div className="flex flex-col justify-center items-start">
							<CtaButton text="About Us" href="/about" />
							<CtaButton text="Services" href="/services" />
							<CtaButton text="Contact" href="/contact" />
						</div>
					</div>
				</div>
				<div className="dark:bg-black bg-white h-full md:w-1/3 w-full p-8">
					<h6 className="lg:text-4xl text-lg ">
						Get in touch<span className="text-6xl text-orange">.</span>
					</h6>
					<div className="flex justify-start items-center flex-wrap my-8">
						<button className="px-6 py-4 border-2 rounded-full dark:border-white border-black w-full lg:w-fit mx-4 transition-all duration-300 ease-in-out hover:bg-black hover:text-white dark:hover:bg-orange hover:text-xl">
							Contact Us
						</button>
						<button className="flex justify-center items-center py-4 px-4 bg-orange rounded-full hover:border-white hover:border-2 border-2 border-orange hover:text-xl text-white text-lg mx-4 transition-all duration-300 ease-in-out w-full lg:w-fit lg:my-0 my-4">
							Schedule a Call <IconArrowRight />
						</button>
					</div>
					<div>
						<p className="text-lg my-4">
							Follow Us<span className="text-6xl text-orange">.</span>
						</p>
						<div className="flex gap-4 mb-8">
							<IconBrandWhatsapp className="text-orange dark:hover:text-white hover:text-black cursor-pointer " />
							<IconBrandGoogleFilled className="text-orange dark:hover:text-white hover:text-black cursor-pointer " />
							<IconBrandLinkedin className="text-orange dark:hover:text-white hover:text-black cursor-pointer " />
							<IconBrandX className="text-orange dark:hover:text-white hover:text-black cursor-pointer " />
						</div>
					</div>
				</div>
			</div>
			<div className=" bg-black">
				<div className="h-full items-center justify-center md:block hidden">
					<TextHoverEffect text="Webiosis" />
				</div>
				<div>
					<p className="text-sm text-white/30 text-center">
						© Copyright 2024 Webiosis Systems
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
