import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          <div className="col-span-1">
            <h4 className="text-gray-800 font-bold mb-4">© foodpanda</h4>
          </div>

          <div className="col-span-1 flex flex-col gap-3">
            <h4 className="text-gray-800 font-bold mb-2">Press</h4>
            <a href="#" className="text-gray-500 hover:text-foodpanda-primary transition-colors text-sm">pandapay Terms and Conditions</a>
            <a href="#" className="text-gray-500 hover:text-foodpanda-primary transition-colors text-sm">Security</a>
            <a href="#" className="text-gray-500 hover:text-foodpanda-primary transition-colors text-sm">Careers</a>
            <a href="#" className="text-gray-500 hover:text-foodpanda-primary transition-colors text-sm">Cashback Terms and Conditions</a>
            <a href="#" className="text-gray-500 hover:text-foodpanda-primary transition-colors text-sm">Partner with Us</a>
          </div>

          <div className="col-span-1 flex flex-col gap-3">
            <h4 className="text-gray-800 font-bold mb-2">Help Center</h4>
            <a href="#" className="text-gray-500 hover:text-foodpanda-primary transition-colors text-sm">Terms and Conditions</a>
            <a href="#" className="text-gray-500 hover:text-foodpanda-primary transition-colors text-sm">Download Apps</a>
            <a href="#" className="text-gray-500 hover:text-foodpanda-primary transition-colors text-sm">Suggest a Restaurant</a>
            <a href="#" className="text-gray-500 hover:text-foodpanda-primary transition-colors text-sm">All cuisines</a>
            <a href="#" className="text-gray-500 hover:text-foodpanda-primary transition-colors text-sm">foodpanda Home Chef</a>
          </div>

          <div className="col-span-1 flex flex-col gap-3">
            <h4 className="text-gray-800 font-bold mb-2">Refunds with pandapay</h4>
            <a href="#" className="text-gray-500 hover:text-foodpanda-primary transition-colors text-sm">Privacy policy</a>
            <a href="#" className="text-gray-500 hover:text-foodpanda-primary transition-colors text-sm">Human rights policy</a>
            <a href="#" className="text-gray-500 hover:text-foodpanda-primary transition-colors text-sm">Corporate Customer</a>
            <a href="#" className="text-gray-500 hover:text-foodpanda-primary transition-colors text-sm">foodpanda Vouchers</a>
          </div>

        </div>

        <hr className="mb-6 border-gray-200" />

        {/* Bottom Footer Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
             <span className="text-foodpanda-primary font-bold text-xl tracking-tight hidden sm:block">foodpanda</span>
          </div>
          <div className="flex gap-4">
             {/* Social mockups */}
             <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-foodpanda-primary hover:text-white cursor-pointer transition-colors text-sm">Fb</div>
             <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-foodpanda-primary hover:text-white cursor-pointer transition-colors text-sm">Ig</div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
