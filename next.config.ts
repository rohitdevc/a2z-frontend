import type { NextConfig } from "next";

const isNetlifyDomain = process.env.URL?.includes("netlify.app");

const nextConfig: NextConfig = {
	output: 'standalone',

	allowedDevOrigins: ['192.168.0.193'],
	
	turbopack: {
		root: __dirname,
	},
	
	basePath: process.env.BASEPATH_PREFIX === "/" ? "" : process.env.BASEPATH_PREFIX,
	
	assetPrefix: process.env.ASSET_PREFIX === "/" ? "" : process.env.ASSET_PREFIX,
  
 	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.a2zonlineservices.com',
				port: '',
				pathname: '/**'
			}
		]
	},
	
	async headers() {
		const headers = [];
		
		if (isNetlifyDomain) {
			headers.push({
				source: "/(.*)",
				headers: [
					{
						key: "X-Robots-Tag",
						value: "noindex, nofollow"
					},
				],
			});
		}

		return headers;
	},

	async redirects() {
		return [
			{
				source: "/copyright",
				destination: "/disclaimer",
				permanent: true,
			},
			{
				source: "/privacy-policy",
				destination: "/disclaimer",
				permanent: true,
			},
			{
				source: "/management",
				destination: "/about-us",
				permanent: true,
			},
			{
				source: "/clientele",
				destination: "/about-us",
				permanent: true,
			},
			{
				source: "/news-and-events",
				destination: "/about-us",
				permanent: true,
			}
		];
	},
};

export default nextConfig;
