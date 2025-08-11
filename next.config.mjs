/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images:{
        domains:['res.cloudinary.com', 'lh3.googleusercontent.com','gravatar.com', 'https://doctor-appointment-booking-app-strapi.onrender.com'],
        unoptimized: true,
    }
};

export default nextConfig;
