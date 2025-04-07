import React from "react";
import OtpModal from "./OtpModal";

const Help = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      {/* Header */}
      <header className="w-full py-6 px-8 flex justify-between items-center border-b border-gray-200/60 backdrop-blur-sm bg-white/70 sticky top-0 z-10">
        <div className="font-medium text-xl text-apple-black">MyApp</div>
        <nav>
          <ul className="flex space-x-8">
            {["Home", "Features", "Pricing", "About"].map((item) => (
              <li key={item}>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-apple-black transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto px-8 py-24 flex flex-col items-center text-center">
        <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
          Welcome to our platform
        </span>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-apple-black max-w-3xl">
          Clean design that focuses on what matters most
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl">
          Experience a beautifully crafted interface that puts your needs first. Simple, intuitive, and powerful.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 bg-apple-blue text-white rounded-md font-medium transition-all hover:bg-apple-light-blue">
            Get Started
          </button>
          <button className="px-8 py-3 bg-gray-100 text-gray-800 rounded-md font-medium transition-all hover:bg-gray-200">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Intuitive Design",
              description: "Carefully crafted interface that feels natural and easy to use."
            },
            {
              title: "Powerful Tools",
              description: "Access to advanced features that help you accomplish more."
            },
            {
              title: "Reliable Performance",
              description: "Built for speed and efficiency, so you can focus on what's important."
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl border border-gray-200/60 bg-white/60 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <span className="text-apple-blue font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-apple-black mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OTP Modal - appears after 30 seconds of browsing */}
      <OtpModal />
    </div>
  );
};

export default Help;