/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/404.html',
				destination: '/',
			},
		];
	},
	distDir: 'dist',
	output: 'export',
};

export default nextConfig;
