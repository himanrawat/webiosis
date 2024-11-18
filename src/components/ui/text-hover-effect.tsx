"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const TextHoverEffect = ({
	text,
	duration = 0,
}: {
	text: string;
	duration?: number;
}) => {
	const svgRef = useRef<SVGSVGElement>(null);
	const [cursor, setCursor] = useState({ x: 0, y: 0 });
	const [hovered, setHovered] = useState(false);

	const handleMouseMove = (e: React.MouseEvent) => {
		if (svgRef.current) {
			const svgRect = svgRef.current.getBoundingClientRect();
			const cxPercentage = ((e.clientX - svgRect.left) / svgRect.width) * 100;
			const cyPercentage = ((e.clientY - svgRect.top) / svgRect.height) * 100;
			setCursor({ x: cxPercentage, y: cyPercentage });
		}
	};

	return (
		<svg
			ref={svgRef}
			width="100%"
			height="100%"
			viewBox="0 0 300 100"
			xmlns="http://www.w3.org/2000/svg"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onMouseMove={handleMouseMove}
			className="select-none"
		>
			<defs>
				<radialGradient
					id="textGradient"
					cx="50%"
					cy="50%"
					r="50%"
					gradientUnits="userSpaceOnUse"
				>
					{hovered && (
						<>
							<stop offset="0%" stopColor="#F66135" /> {/* orange */}
							<stop offset="25%" stopColor="#EAB308" /> {/* yellow-500 */}
							<stop offset="50%" stopColor="#EF4444" /> {/* red-500 */}
							<stop offset="75%" stopColor="#F66135" /> {/* orange */}
							<stop offset="100%" stopColor="#EF4444" /> {/* red-500 */}
						</>
					)}
				</radialGradient>

				<radialGradient
					id="revealMask"
					cx={`${cursor.x}%`}
					cy={`${cursor.y}%`}
					r="20%"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0%" stopColor="white" />
					<stop offset="100%" stopColor="black" />
				</radialGradient>

				<mask id="textMask">
					<rect
						x="0"
						y="0"
						width="100%"
						height="100%"
						fill="url(#revealMask)"
					/>
				</mask>
			</defs>

			{/* Background text */}
			<text
				x="50%"
				y="50%"
				textAnchor="middle"
				dominantBaseline="middle"
				strokeWidth="0.3"
				className="text-6xl font-bold fill-transparent stroke-neutral-200 dark:stroke-neutral-800"
				style={{ opacity: hovered ? 0.7 : 0 }}
			>
				{text}
			</text>

			{/* Animated outline text */}
			<motion.text
				x="50%"
				y="50%"
				textAnchor="middle"
				dominantBaseline="middle"
				strokeWidth="0.3"
				className="text-6xl font-bold fill-transparent stroke-neutral-200 dark:stroke-neutral-800"
				initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
				animate={{
					strokeDashoffset: 0,
					strokeDasharray: 1000,
				}}
				transition={{
					duration: 4,
					ease: "easeInOut",
				}}
			>
				{text}
			</motion.text>

			{/* Gradient text with mask */}
			<text
				x="50%"
				y="50%"
				textAnchor="middle"
				dominantBaseline="middle"
				stroke="url(#textGradient)"
				strokeWidth="0.3"
				mask="url(#textMask)"
				className="text-6xl font-bold fill-transparent"
			>
				{text}
			</text>
		</svg>
	);
};

export default TextHoverEffect;
