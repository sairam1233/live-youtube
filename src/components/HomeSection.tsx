import React from 'react';
import { Heart, ArrowDown } from 'lucide-react';
import "./index.css";

const HomeSection: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-rose-100 to-white flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-300 via-transparent to-transparent opacity-20"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-rose-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-rose-200 rounded-full filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 animate-fade-up">
                <Heart size={16} className="text-rose-500" />
                <span className="text-rose-700 font-medium">Yannamani's Dhoti Ceremony</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight font-serif animate-fade-up delay-100">
                Bhargava Nandan & Thaman Sandesh
                <br />
                <span className="text-rose-600">Dhoti Ceremony</span>
              </h1>

              <p className="text-gray-700 text-lg md:text-xl mb-8 animate-fade-up delay-200">
                Join us as we celebrate the sacred Dhoti Ceremony, marking a special milestone in the lives of our beloved boys.
                Witness the tradition, blessings, and joy — live streamed for our loved ones near and far.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-300">
                <a 
                  href="#invitation" 
                  className="inline-flex items-center px-8 py-4 bg-rose-600 text-white text-lg font-medium rounded-full hover:bg-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                >
                  View Ceremony Details
                  <ArrowDown className="ml-2 group-hover:animate-bounce" />
                </a>
              </div>
            </div>

            {/* Sample Dhoti Boy Image */}
            <div className="w-full max-w-xs mx-auto lg:max-w-md">
              <img 
                src="/images/2.jpg"  // Path to your image in the public folder
                alt="Dhoti Boy"
                className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="container mx-auto max-w-6xl py-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Watch the Live Stream</h2>
        <div className="relative w-full pb-[56.25%] h-0">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/wp5z6jQbE2g?si=zE8W2whbHgiL-Y83"
            title="Dhoti Ceremony Live Stream"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
