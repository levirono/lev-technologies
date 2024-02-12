import React from 'react';
import ImageSlider from './ImageSlider'; // Adjust the path based on your directory structure

const featuresData = [
  {
    title: 'Feature 1',
    description: 'Description of Feature 1.',
    imageSrc: '/images/feature1.jpg',
    videoSrc: '/videos/feature1.mp4',
  },
  // Add more feature objects as needed
];

const Home = () => {
  return (
<div className="relative bg-gradient-to-r from-gray-800 to-gray-500 text-white overflow-hidden">
      {/* Background Animation */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0 animate-background"
        style={{
          animation: 'backgroundAnimation 5s infinite', // Adjust duration (20s) as needed
        }}
      ></div>

      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen flex items-center relative z-10">
        <div className="container mx-auto text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-green-600 relative" style={{ textShadow: '0 0 4px rgba(0, 255, 0, 0.8), 0 0 8px rgba(0, 255, 0, 0.5), 0 0 12px rgba(0, 255, 0, 0.3)' }}>
  Welcome to Lev Technologies
</h1>
          <p className="text-lg lg:text-xl mb-8">
            Your Gateway to Cutting-edge Technology
          </p>
          <p className="text-lg lg:text-xl mb-8">
            Lev Technologies is your one-stop destination for all things tech-related. As a pioneering force in the industry, we are committed to not only delivering comprehensive tech reviews but also providing an extensive online store where you can explore and purchase the latest tech products. Our store boasts a curated selection of cutting-edge gadgets, from smartphones and laptops to smart home devices and wearables. With Lev Technologies, you're not just keeping up with the future; you're living it. Welcome to the future of tech.
          </p>
          <a
            href="#products"
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Explore More
          </a>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto text-center">
          <ImageSlider />
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-16 relative z-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">our engagement</h2>
          {/* ... (rest of your featured products section) */}
        </div>
      </section>

      {/* Dynamic Features Section */}
      <section id="dynamic-features" className="py-16 relative z-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Get a tour</h2>
          {/* ... (rest of your dynamic features section) */}
        </div>
      </section>

      {/* Best Things Offered Section */}
      <section id="best-things" className="py-16 bg-gray-800 text-white relative z-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">our products</h2>
          {/* ... (rest of your best things section) */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl lg:text-4xl font-bold mb-8">Reach Us</h2>
    {/* Social Media Section */}
    <div className="flex justify-center space-x-4 mb-4">
      <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
        <img src="x.png" alt="Twitter" className="w-6 h-6" />
      </a>
      <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
        <img src="facebook.png" alt="Facebook" className="w-6 h-6" />
      </a>
      <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
        <img src="Instagram.png" alt="Twitter" className="w-6 h-6" />
      </a>
      <a href="https://mail.google.com/ronolawi3@gmail.com" target="_blank" rel="noopener noreferrer">
        <img src="youtube.png" alt="Twitter" className="w-6 h-6" />
      </a>    </div>
    <p>&copy; 2024 Lev Technologies. All rights reserved.</p>
  </div>
</footer>
    </div>
  );
};

export default Home;
