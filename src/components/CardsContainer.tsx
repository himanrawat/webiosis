"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { IconArrowRight } from "@tabler/icons-react";

export default function CardContainer() {
	const cards = data.map((card, index) => (
		<Card key={card.src} card={card} index={index} />
	));

	return (
		<div className="w-full h-full py-20">
			{/* <h2 className="max-w-7xl pl-4 pb-2 mx-auto text-xl md:text-5xl font-medium text-neutral-800 dark:text-neutral-200 font-sans">
      Our latest insights.
      </h2> */}

			<div className="flex max-w-7xl mx-auto justify-between items-center flex-wrap px-8">
				<div className=" ">
					<h2 className="text-4xl  mb-4 font-medium">
						From Concept to Completion:{" "}
					</h2>
					<h2 className="text-4xl mt-4 font-medium">
						Our Full-Stack Expertise.
					</h2>
				</div>
				<div className="">
					<div className="border-b-2">
						<button className="flex gap-4 group w-fit h-fit py-4 pr-4 transition-transform duration-300 transform hover:translate-x-4">
							View All <IconArrowRight />
						</button>
					</div>
				</div>
			</div>
			<Carousel items={cards} />
		</div>
	);
}

const DummyContent = () => {
	return (
		<>
			{[...new Array(3).fill(1)].map((_, index) => {
				return (
					<div
						key={"dummy-content" + index}
						className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
					>
						<p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
							<span className="font-bold text-neutral-700 dark:text-neutral-200">
								The first rule of Apple club is that you boast about Apple club.
							</span>{" "}
							Keep a journal, quickly jot down a grocery list, and take amazing
							class notes. Want to convert those notes to text? No problem.
							Langotiya jeetu ka mara hua yaar is ready to capture every
							thought.
						</p>
						<Image
							src="https://assets.aceternity.com/macbook.png"
							alt="Macbook mockup from Aceternity UI"
							height="500"
							width="500"
							className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
						/>
					</div>
				);
			})}
		</>
	);
};

const data = [
	{
		category: "Development",
		title: "Tailored Software Solutions: Front-End to Back-End Expertise",
		src: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent />,
	},
	{
		category: "Strategy & Consulting",
		title: "Revolutionize Your Business with Cutting-Edge Technology",
		src: "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent />,
	},
	{
		category: "Design",
		title: "Crafting Intuitive and Engaging UX/UI Designs",
		src: "https://img.freepik.com/free-photo/man-working-with-computer-side-view_23-2149930994.jpg?t=st=1731907015~exp=1731910615~hmac=5f4991dd9777f9fa25f12d172c7665e269c7ccad8e18c17a01e88950f92dd003&w=996",
		content: <DummyContent />,
	},
	{
		category: "Development",
		title: "Unlock Business Value with Advanced AI and Data Engineering",
		src: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent />,
	},

	{
		category: "Development",
		title: "Scalable and Secure Mobile Apps for iOS and Android",
		src: "https://img.freepik.com/free-photo/ui-ux-representations-with-smartphone_23-2150201874.jpg?t=st=1731906579~exp=1731910179~hmac=28d448b597f6011b4719473afd8c686b84df478ed8282616c3e3c49463524fd4&w=740",
		content: <DummyContent />,
	},

	{
		category: "Platform & Infrastructure",
		title:
			"Secure, Reliable, and Scalable Solutions with DevOps & Security Expertise",
		src: "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399295.jpg?t=st=1731907259~exp=1731910859~hmac=a89aa6c006b3b227714871636c8933477db08e624b756cec736e93f3815ea07d&w=996",
		content: <DummyContent />,
	},
	{
		category: "Hiring",
		title: "Hiring for a Staff Software Engineer",
		src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent />,
	},
];
