import type { NextConfig } from "next";

const allowedDevOrigins = [
	'localhost',
	'127.0.0.1',
	...(process.env.ALLOWED_DEV_ORIGINS ?? '')
		.split(',')
		.map((value) => value.trim())
		.filter(Boolean),
]

const nextConfig: NextConfig = {
	allowedDevOrigins,
};

export default nextConfig;
