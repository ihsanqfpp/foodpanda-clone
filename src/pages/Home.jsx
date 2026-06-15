import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import CityGrid from '../components/home/CityGrid';

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Partner Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">You prepare the food, we handle the rest</h2>
          <div className="bg-cover bg-center rounded-3xl overflow-hidden relative shadow-lg" style={{ backgroundImage: "url('/images/panda2.webp')", minHeight: "400px" }}>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 p-8 md:p-16 max-w-xl">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">List your restaurant or shop on foodpanda</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Would you like millions of new customers to enjoy your amazing food and groceries? So would we!
                  It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!
                  Interested? Let's start our partnership today!
                </p>
                <button className="bg-foodpanda-primary hover:bg-foodpanda-hover text-white font-bold py-3 px-6 rounded-xl transition-colors w-full sm:w-auto shadow-sm">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </section>

        <CityGrid />
        
        {/* App Download Section */}
        <section className="bg-foodpanda-primary py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Put us in your pocket</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Download the food and groceries you love</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  It's all at your fingertips – the restaurants and shops you love. Find the right food and groceries to suit your mood, and make the first bite last. Go ahead, download us.
                </p>
                <img src="/images/pic.jpg" alt="App Preview" className="w-full rounded-xl shadow-md border object-cover" style={{maxHeight: '200px'}}/>
              </div>
              <div className="flex justify-center">
                 <img src="/images/panda4.webp" alt="Hands holding phone" className="w-full max-w-md object-contain rounded-3xl" />
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Home;
