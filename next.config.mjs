/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["aceternity.com", "assets.aceternity.com", "images.unsplash.com"],
	},
	distDir: "build", // Ensure this matches the directory in firebase.json
};

export default nextConfig;
