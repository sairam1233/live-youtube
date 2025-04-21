import React from 'react';
import { Heart, ArrowDown } from 'lucide-react';
import "./index.css"

const HomeSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-rose-100 to-white flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-300 via-transparent to-transparent opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-rose-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-rose-200 rounded-full filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="b-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 animate-fade-up">
              <Heart size={16} className="text-rose-500" />
              <span className="text-rose-700 font-medium">Live Wedding Ceremony</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight font-serif animate-fade-up delay-100">
              Sarah & Michael's
              <br />
              <span className="text-rose-600">Wedding Day</span>
            </h1>
            
            <p className="text-gray-700 text-lg md:text-xl mb-8 animate-fade-up delay-200">
              Join us in celebrating the union of two hearts, streaming live for our loved ones around the world.
            </p>
            
            <div className="btn flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-300">
              <a 
                href="#invitation" 
                className="bt inline-flex items-center px-8 py-4 bg-rose-600 text-white text-lg font-medium rounded-full hover:bg-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                View Wedding Details
                <ArrowDown className="ml-2 group-hover:animate-bounce" />
              </a>
            </div>
          </div>
          
          <div className="b-2 relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border-8 border-white transform hover:scale-105 transition-transform duration-300 animate-fade-up delay-400">
            <div className="absolute inset-0 bg-rose-100 animate-pulse"></div>
            <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/aUEeAK0hMR8"
            title="Wedding live stream"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
           ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;