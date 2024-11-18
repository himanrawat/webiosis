"use client";
import React, { useRef, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

const scriptURL =
	"https://script.google.com/macros/s/AKfycbyvrVDECz9pT_mOvmK6sdYc_PGWe7vFHBQXZxob_SztApaSPTTC3J_gt4O7V0e7Kk8/exec";

export function SignupFormDemo() {
	const formRef = useRef<HTMLFormElement>(null); // Reference to form
	const [showSnackbar, setShowSnackbar] = useState(false); // State to show/hide the snackbar
	const [formSubmitted, setFormSubmitted] = useState(false); // State to handle form submission
	const [loading, setLoading] = useState(false); // State to show/hide loader

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = formRef.current;
		if (!form) return;

		setLoading(true); // Show loader when form is submitted

		// Submit the form data via fetch to Google Apps Script
		fetch(scriptURL, { method: "POST", body: new FormData(form) })
			.then((response) => {
				setShowSnackbar(true); // Show the success snackbar
				setFormSubmitted(true); // Close the form
				form.reset(); // Reset form fields after submission
				setLoading(false); // Hide loader after success

				// Automatically hide the snackbar after 3 seconds
				setTimeout(() => {
					setShowSnackbar(false);
				}, 3000);
			})
			.catch((error) => {
				console.error("Error!", error.message);
				setLoading(false); // Hide loader if there's an error
			});
	};

	return (
		<>
			<h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
				Schedule a call with us
			</h2>
			<p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
				We are just a call away from turning your ideas into reality.
			</p>

			<form
				className="my-4"
				ref={formRef}
				onSubmit={handleSubmit}
				name="demo-form"
			>
				<LabelInputContainer className="mb-4">
					<Label htmlFor="firstname">Full name</Label>
					<Input
						id="firstname"
						name="firstname"
						placeholder="Tyler Swift"
						type="text"
						required
					/>
				</LabelInputContainer>

				<LabelInputContainer className="mb-4">
					<Label htmlFor="email">Email Address</Label>
					<Input
						id="email"
						name="email"
						placeholder="projectmayhem@fc.com"
						type="email"
						required
					/>
				</LabelInputContainer>

				<LabelInputContainer className="mb-4">
					<Label htmlFor="phone">Phone Number</Label>
					<Input
						id="phone"
						name="phone"
						placeholder="0000000000"
						type="tel"
						required
					/>
				</LabelInputContainer>

				<LabelInputContainer className="mb-4">
					<Label htmlFor="looking-for">Looking for</Label>
					<select
						id="looking-for"
						name="lookingFor"
						className="border border-gray-300 rounded-md p-2 dark:bg-zinc-800 dark:border-zinc-700 dark:text-neutral-200"
						required
					>
						<option value="custom-software">Custom Software Development</option>
						<option value="strategy-consulting">Strategy & Consulting</option>
						<option value="ai-data-science">AI and Data Science</option>
						<option value="mobile-app-development">
							Mobile App Development
						</option>
						<option value="ux-ui-design">UX/UI Design</option>
						<option value="platform-infrastructure">
							Platform and Infrastructure
						</option>
					</select>
				</LabelInputContainer>

				<div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-2 h-[1px] w-full" />

				<button
					className={cn(
						"bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]",
						{ "opacity-50 cursor-not-allowed": loading } // Disable the button during loading
					)}
					type="submit"
					disabled={loading} // Disable the button during loading
				>
					{loading ? (
						<span className="loader">Loading...</span> // Show loader when loading
					) : (
						<>
							Submit
							<BottomGradient />
						</>
					)}
				</button>
			</form>

			{/* Success Snackbar */}
			{showSnackbar && (
				<div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-md shadow-lg z-50">
					Thank you! We will contact you shortly.
				</div>
			)}
		</>
	);
}

const BottomGradient = () => {
	return (
		<>
			<span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
			<span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
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
