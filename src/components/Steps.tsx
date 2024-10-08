import React from "react";
import { IconChevronUp, IconPhone, IconUsers } from "@tabler/icons-react";
import person from "../assets/person.svg";
import phone from "../assets/phone.svg";
import track from "../assets/track.svg";
import StepsStructure from "./StepsStructure";
import Link from "next/link";

const Steps = () => {
	return (
		<div className="flex w-full justify-center p-8 mb-32">
			<div className="relative">
				<StepsStructure
					icon={phone}
					stepNum="step 1"
					stepHeading="Join exploration call."
					stepDescription="Tell us more about your business on a discovery call. We'll discuss team structure and approach, success criteria, timescale, budget, and required skill sets to see how we can help."
				/>
				<StepsStructure
					icon={person}
					stepNum="step 2"
					stepHeading="Discuss solution and team structure."
					stepDescription="In a matter of days, we will finalize your project specifications, agree on an engagement model, select and onboard your team."
				/>
				<StepsStructure
					icon={track}
					stepNum="step 3"
					stepHeading="Get started and track performance."
					stepDescription="Once we've agreed on milestones, we'll immediately get to work. We'll track progress, report updates, and continuously adapt to your needs."
				/>
				<div className="flex items-start ml-[38.5px]">
					<div className="w-16 h-8 border-l-[3.3px] border-b-[3.3px] border-dashed border-white"></div>
					<Link
						href="/scheduleCall"
						className="bg-orange text-white py-4 px-6 rounded-xl text-lg font-semibold hover:bg-orange-600 transition-colors"
					>
						Schedule a Call
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Steps;
