import FixedNavbar from "@/components/FixedNavbar";
import Navbar from "@/components/Navbar";
import React from "react";

const About = () => {
	return (
		<>
			{/* <Navbar /> */}
			<FixedNavbar />
			<div className="h-screen pt-32">
				<h1>Hello about</h1>
			</div>
			<div className="h-screen">
				<p>Second page</p>
			</div>
		</>
	);
};

export default About;
