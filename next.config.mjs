/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["aceternity.com", "assets.aceternity.com", "images.unsplash.com"],
	},
	distDir: "build",
};

module.exports = nextConfig;
