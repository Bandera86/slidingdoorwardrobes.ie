/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    // This is the property you need to add
    compiler: {
        // ssr and displayName are configured by default
        styledComponents: true,
    },
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
    images: {
        domains: ['localhost', 'lh3.googleusercontent.com', 'scontent.fdub5-1.fna.fbcdn.net'],
    },
};

module.exports = nextConfig;