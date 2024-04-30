/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "www.thecocktaildb.com",
                protocol: "https",
                port: "",
                pathname: "/images/**"
            }
        ]
    }
};

export default nextConfig;
