import React from 'react';
import CityCard from '../common/CityCard';

const cities = [
  { id: 1, name: 'Islamabad', image: '/src/assets/images/islmbad.webp' },
  { id: 2, name: 'Karachi', image: '/src/assets/images/karachi.webp' },
  { id: 3, name: 'Lahore', image: '/src/assets/images/bwp.avif' },
  { id: 4, name: 'Peshawar', image: '/src/assets/images/pesh.jpg' },
  { id: 5, name: 'Bahawalpur', image: '/src/assets/images/gujrat.avif' },
  { id: 6, name: 'Gujrat', image: '/src/assets/images/gujrat.jpg' },
  { id: 7, name: 'Gujranwala', image: '/src/assets/images/nwla.jpg' },
  { id: 8, name: 'Mardan', image: '/src/assets/images/mardan.jpg' },
  { id: 9, name: 'Abbottabad', image: '/src/assets/images/abad.jpg' },
  { id: 10, name: 'Jhelum', image: '/src/assets/images/jhlm.jpg' },
  { id: 11, name: 'Rawalpindi', image: '/src/assets/images/pindi.jpg' },
  { id: 12, name: 'Murree', image: '/src/assets/images/mree.jpg' },
  { id: 13, name: 'Multan', image: '/src/assets/images/mltn.jpg' },
  { id: 14, name: 'Quetta', image: '/src/assets/images/qutta.jpg' },
  { id: 15, name: 'Sahiwal', image: '/src/assets/images/lahore.avif' },
  { id: 16, name: 'Sialkot', image: '/src/assets/images/slkt.jpg' },
];

const CityGrid = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Find us in these cities and many more!</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cities.map((city) => (
            <CityCard 
              key={city.id} 
              name={city.name} 
              imageUrl={city.image} 
              onClick={() => console.log(`Navigating to ${city.name}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityGrid;
