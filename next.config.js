/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    },
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dfstudio-d420.kxcdn.com',
                port: '',
                pathname: '/wordpress/**',
            },
        ],
    },
}

module.exports = nextConfig;