"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
	IconBrandGithub,
	IconBrandGoogle,
	IconBrandOnlyfans,
} from "@tabler/icons-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const GradientTextarea = React.forwardRef<
	HTMLTextAreaElement,
	React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
	const radius = 100;
	const [visible, setVisible] = React.useState(false);

	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	function handleMouseMove({
		currentTarget,
		clientX,
		clientY,
	}: React.MouseEvent<HTMLDivElement>) {
		let { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	return (
		<motion.div
			style={{
				background: useMotionTemplate`
            radial-gradient(
              ${
								visible ? radius + "px" : "0px"
							} circle at ${mouseX}px ${mouseY}px,
              var(--orange),
              transparent 80%
            )
          `,
			}}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
			className="p-[2px] rounded-lg transition duration-300 group/input"
		>
			<textarea
				className={cn(
					`flex h-20 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm
            placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
            disabled:cursor-not-allowed disabled:opacity-50
            dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
            group-hover/input:shadow-none transition duration-400`,
					className
				)}
				ref={ref}
				{...props}
			/>
		</motion.div>
	);
});
GradientTextarea.displayName = "GradientTextarea";

const GradientRadio = ({
	children,
	...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
	children: React.ReactNode;
}) => {
	const radius = 100;
	const [visible, setVisible] = React.useState(false);

	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	function handleMouseMove({
		currentTarget,
		clientX,
		clientY,
	}: React.MouseEvent<HTMLLabelElement>) {
		let { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	return (
		<motion.label
			style={{
				background: useMotionTemplate`
          radial-gradient(
            ${
							visible ? radius + "px" : "0px"
						} circle at ${mouseX}px ${mouseY}px,
            var(--orange),
            transparent 80%
          )
        `,
			}}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
			className="p-[2px] rounded-lg transition duration-300 group/input flex items-center space-x-2 cursor-pointer"
		>
			<input
				type="radio"
				className="form-radio text-orange focus:ring-orange border-gray-300 dark:border-gray-700"
				{...props}
			/>
			<span className="text-sm text-neutral-600 dark:text-neutral-300">
				{children}
			</span>
		</motion.label>
	);
};

export default function ScheduleCall() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Form submitted");
	};
	return (
		<div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
			<h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
				Webiosis
			</h2>
			<p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
				Thank you for your interest in Webiosis. We'd like to ask a few
				questions to better understand your software development needs.
			</p>

			<form className="my-8" onSubmit={handleSubmit}>
				<LabelInputContainer className="mb-4">
					<Label htmlFor="firstname">Your name</Label>
					<Input id="firstname" placeholder="Your name" type="text" />
				</LabelInputContainer>

				<LabelInputContainer className="mb-4">
					<Label htmlFor="email">Your work email</Label>
					<Input id="email" placeholder="Your work email" type="email" />
				</LabelInputContainer>

				<LabelInputContainer className="mb-4">
					<Label htmlFor="service">Select your service</Label>
					<div className="flex gap-2">
						<GradientRadio name="service" value="staff">
							Staff
						</GradientRadio>
						<GradientRadio name="service" value="dedicated-teams">
							Dedicated Teams
						</GradientRadio>
						<GradientRadio name="service" value="software-outsourcing">
							Software Outsourcing
						</GradientRadio>
					</div>
				</LabelInputContainer>

				<LabelInputContainer className="mb-4">
					<Label htmlFor="details">How can we help?</Label>
					<GradientTextarea
						id="details"
						placeholder="Tell us how we can help?"
					/>
				</LabelInputContainer>

				<button
					className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
					type="submit"
				>
					Submit &rarr;
					<BottomGradient />
				</button>
			</form>
		</div>
	);
}

const BottomGradient = () => {
	return (
		<>
			<span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-orange to-transparent" />
			<span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-orange to-transparent" />
		</>
	);
};

const LabelInputContainer = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn("flex flex-col space-y-2 w-full", className)}>
			{children}
		</div>
	);
};
