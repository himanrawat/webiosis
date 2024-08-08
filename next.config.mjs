/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["aceternity.com", "assets.aceternity.com", "images.unsplash.com"],
	},
	distDir: "build",
	output: "export",
};

export default nextConfig;
