"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	IconDeviceMobileCode,
	IconAi,
	IconBug,
	IconHelp,
	IconTableRow,
	IconCode,
	IconArrowRight,
	IconX,
} from "@tabler/icons-react";

interface Feature {
	title: string;
	description: string;
	icon: JSX.Element;
	content: string;
}

export function FeaturesSectionDemo() {
	const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

	useEffect(() => {
		if (selectedFeature) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [selectedFeature]);

	const features: Feature[] = [
		{
			title: "Custom Software Development",
			description:
				"Create custom software tailored for your unique needs, including front-end, and core back-end technology.",
			icon: <IconCode color="orange" />,
			content:
				"Our custom software development services deliver tailored solutions that perfectly align with your business objectives. We specialize in creating scalable, maintainable applications using modern technologies and best practices. Our team of experienced developers can handle everything from simple web applications to complex enterprise systems.",
		},
		{
			title: "Strategy & Consulting",
			description:
				"Define and deliver value with cutting edge technology. Reinvent your business model. Transform your business according to new environment.",
			icon: <IconBug color="orange" />,
			content:
				"Our strategic consulting services help you navigate the complex landscape of digital transformation. We work closely with your team to identify opportunities, optimize processes, and implement solutions that drive real business value.",
		},
		{
			title: "AI and Data Science",
			description:
				"Use leading AI, machine learning, and data engineering technologies to unlock business value.",
			icon: <IconAi color="orange" />,
			content:
				"Harness the power of artificial intelligence and data science to transform your business. Our team of AI specialists and data scientists can help you implement machine learning models, develop predictive analytics, and create data-driven solutions.",
		},
		{
			title: "Mobile App Development",
			description:
				"Build performant, scalable, and secure mobile applications for iOS and Android devices.",
			icon: <IconDeviceMobileCode color="orange" />,
			content:
				"Our mobile development team creates engaging, high-performance applications for both iOS and Android platforms. We focus on delivering intuitive user experiences while ensuring robust functionality and security.",
		},
		{
			title: "UX/UI Design",
			description:
				"Create intuitive and engaging user experiences that delight your customers and drive engagement.",
			icon: <IconTableRow color="orange" />,
			content:
				"Our design team creates beautiful, functional interfaces that enhance user engagement and satisfaction. We combine aesthetic excellence with usability principles to deliver designs that not only look great but also perform exceptionally well.",
		},
		{
			title: "Platform and Infrastructure",
			description:
				"Ensure applications are secure, fault tolerant and highly available with our DevOps and Security engineers.",
			icon: <IconHelp color="orange" />,
			content:
				"Build robust, scalable infrastructure that powers your applications reliably and securely. Our DevOps and security engineers implement best practices for deployment, monitoring, and maintenance while ensuring your systems are protected against threats.",
		},
	];

	return (
		<div className="relative">
			<div className="flex max-w-7xl mx-auto justify-between items-center flex-wrap px-8 lg:px-0">
				<div className="">
					<h2 className="text-4xl mb-4 font-medium">
						From Concept to Completion:{" "}
					</h2>
					<h2 className="text-4xl mt-4 font-medium">
						Our Full-Stack Expertise.
					</h2>
				</div>
				<div className="flex w-full justify-end">
					<div className="border-b-2 ">
						<button className="flex gap-4 group w-fit h-fit py-4 pr-4 transition-transform duration-300 transform hover:translate-x-4">
							Everything we do <IconArrowRight />
						</button>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
				{features.map((feature, index) => (
					<Feature
						key={feature.title}
						{...feature}
						index={index}
						onClick={() => setSelectedFeature(feature)}
					/>
				))}
			</div>

			<AnimatePresence>
				{selectedFeature && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 bg-black bg-opacity-50 z-40"
							onClick={() => setSelectedFeature(null)}
						/>
						<motion.div
							initial={{ y: "100%" }}
							animate={{ y: 0 }}
							exit={{ y: "100%" }}
							transition={{
								type: "spring",
								damping: 30,
								stiffness: 300,
							}}
							className="fixed inset-0 bg-white dark:bg-neutral-900 shadow-lg z-50"
						>
							<div className="h-full overflow-y-auto scrollbar-hide">
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.2 }}
									className="relative p-8 max-w-7xl mx-auto"
								>
									<motion.button
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										onClick={() => setSelectedFeature(null)}
										className="fixed top-4 right-4 p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors z-50"
									>
										<IconX className="w-6 h-6" />
									</motion.button>
									<motion.div
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										className="flex items-center gap-4 mb-6 pt-16"
									>
										{selectedFeature.icon}
										<h2 className="text-2xl font-bold">
											{selectedFeature.title}
										</h2>
									</motion.div>
									<motion.p
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.3 }}
										className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300"
									>
										{selectedFeature.content}
									</motion.p>
									<motion.p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Omnis adipisci nesciunt sit, culpa ex corporis dolorum
										temporibus eligendi delectus maxime voluptatibus, deleniti
										architecto facere unde debitis! Voluptate, nemo adipisci!
										Consequatur!
									</motion.p>
								</motion.div>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	);
}

interface FeatureProps extends Feature {
	index: number;
	onClick: () => void;
}

const Feature = ({
	title,
	description,
	icon,
	index,
	onClick,
}: FeatureProps) => {
	return (
		<div
			onClick={onClick}
			className={cn(
				"flex flex-col lg:border-r lg:border-l py-10 relative group/feature dark:border-neutral-800 cursor-pointer",
				(index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
				index < 3 && "lg:border-b dark:border-neutral-800"
			)}
		>
			{index < 3 && (
				<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
			)}
			{index >= 3 && (
				<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
			)}
			<div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
				{icon}
			</div>
			<div className="text-lg font-bold mb-2 relative z-10 px-10">
				<div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-orange transition-all duration-200 origin-center" />
				<span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
					{title}
				</span>
			</div>
			<p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
				{description}
			</p>
		</div>
	);
};

export default FeaturesSectionDemo;
