import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-50 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="pt-12 lg:pt-24 order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
            It's the food and groceries you love,<br className="hidden md:block"/> delivered.
          </h1>
          
          <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-col sm:flex-row gap-3">
            <input 
              type="text" 
              placeholder="Your street and street number" 
              className="flex-grow px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-foodpanda-primary focus:border-transparent"
            />
            <button className="bg-foodpanda-primary hover:bg-foodpanda-hover text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-sm whitespace-nowrap">
              Find food
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 lg:order-2 pt-8 lg:pt-0">
          <img 
            src="/src/assets/images/panda1.png" 
            alt="Hero delivery" 
            className="w-full max-w-xl mx-auto object-contain"
          />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
