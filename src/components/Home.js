import React from 'react';

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
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen flex items-center">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">Welcome to Lev Technologies</h1>
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

      {/* Featured Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Featured Products</h2>
          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-gray-900 rounded-lg p-30">
              <img src="/images/product1.jpg" alt="Product 1" className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">Product 1</h3>
              <p className="text-gray-600 mb-4">Description of Product 1.</p>
              <a href="#product1" className="text-blue-500 hover:underline">Learn More</a>
            </div>
            {/* Repeat similar structure for other product cards */}
          </div>
        </div>
      </section>

      {/* Dynamic Features Section */}
      <section id="dynamic-features" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Get a tour</h2>
          {/* Dynamic Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-30">
                {feature.imageSrc && (
                  <img src={feature.imageSrc} alt={feature.title} className="w-full h-48 object-cover mb-4" />
                )}
                {feature.videoSrc && (
                  <video controls className="w-full h-48 mb-4">
                    <source src={feature.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <a href={`#${feature.title.toLowerCase().replace(/\s/g, '-')}`} className="text-blue-500 hover:underline">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Things Offered Section */}
<section id="best-things" className="py-16 bg-gray-800 text-white">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl lg:text-4xl font-bold mb-8">our products</h2>

    {/* Zigzag arrangement of paragraphs and images */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {/* Paragraph and Image 1 (Right) */}
      <div className="flex flex-col items-center md:order-1 lg:order-1">
        <p className="text-lg lg:text-xl mb-4">
          Header for Paragraph 1
        </p>
        <img src="/images/image1.jpg" alt="Image 1" className="w-full h-48 object-cover mb-4" />
      </div>

      {/* Paragraph and Image 2 (Left) */}
      <div className="flex flex-col items-center md:order-2 lg:order-2">
        <p className="text-lg lg:text-xl mb-4">
          Header for Paragraph 2
        </p>
        <img src="/images/image2.jpg" alt="Image 2" className="w-full h-48 object-cover mb-4" />
      </div>

      {/* Paragraph and Image 3 (Right) */}
      <div className="flex flex-col items-center md:order-1 lg:order-1">
        <p className="text-lg lg:text-xl mb-4">
          Header for Paragraph 3
        </p>
        <img src="/images/image3.jpg" alt="Image 3" className="w-full h-48 object-cover mb-4" />
      </div>

      {/* Repeat the pattern for additional paragraphs and images */}
    </div>
  </div>
</section>
      {/* Reviews and Blogs Section (Imported from different components) */}
      {/* <ReviewsSection /> */}
      {/* <BlogsSection /> */}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Lev Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
