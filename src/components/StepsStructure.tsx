import Image from "next/image";
import React from "react";

const StepsStructure = ({
	icon,
	stepNum,
	stepHeading,
	stepDescription,
}: {
	icon: string;
	stepNum: string;
	stepHeading: string;
	stepDescription: string;
}) => {
	return (
		<div className="flex">
			<div className="flex flex-col justify-center items-center">
				<div className="p-4 rounded-full bg-orange">
					<Image src={icon} alt="icon" />
				</div>
				<div className="w-0 h-full border-dashed border-white border-2"></div>
			</div>
			<div className="max-w-[520px] pb-32 ml-8 space-y-4">
				<p className="uppercase  text-orange font-bold">{stepNum}</p>
				<h2 className="text-3xl">{stepHeading}</h2>
				<p className="text-2xl">{stepDescription}</p>
			</div>
		</div>
	);
};

export default StepsStructure;
