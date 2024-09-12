import { cn } from "@/lib/utils";
import {
	IconDeviceMobileCode,
	IconAi,
	IconBug,
	IconHelp,
	IconTableRow,
	IconCode,
	IconArrowRight,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
	const features = [
		{
			title: "Custom Software Development",
			description:
				"Create custom software tailored for your unique needs, including front-end, and core back-end technology.",
			icon: <IconCode color="orange" />,
		},
		{
			title: "QA and Testing",
			description:
				"Make your technology bulletproof, with manual and automated testing.",
			icon: <IconBug color="orange" />,
		},
		{
			title: "AI and Data Science",
			description:
				"Use leading AI, machine learning, and data engineering technologies to unlock business value.",
			icon: <IconAi color="orange" />,
		},
		{
			title: "Mobile App Development",
			description:
				"Build performant, scalable, and secure mobile applications for iOS and Android devices.",
			icon: <IconDeviceMobileCode color="orange" />,
		},
		{
			title: "UX/UI Design",
			description: "You can simply share passwords instead of buying new seats",
			icon: <IconTableRow color="orange" />,
		},
		{
			title: "Platform and Infrastructure",
			description:
				"Ensure applications are secure, fault tolerant and highly available with our DevOps and Security engineers.",
			icon: <IconHelp color="orange" />,
		},
	];
	return (
		<>
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
					<Feature key={feature.title} {...feature} index={index} />
				))}
			</div>
		</>
	);
}

const Feature = ({
	title,
	description,
	icon,
	index,
}: {
	title: string;
	description: string;
	icon: React.ReactNode;
	index: number;
}) => {
	return (
		<div
			className={cn(
				"flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
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
