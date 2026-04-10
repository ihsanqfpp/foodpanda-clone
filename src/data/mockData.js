// src/data/mockData.js

export const restaurants = [
  {
    id: 1,
    name: 'Burger Lab',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop',
    rating: 4.8,
    deliveryTime: '25-35 min',
    deliveryFee: 50,
    categories: ['Burgers', 'Fast Food'],
    menu: [
      { id: 101, name: 'Doppler Burger', description: 'Double beef patty with special sauce', price: 650 },
      { id: 102, name: 'Firehouse Burger', description: 'Spicy chicken with jalapeños', price: 450 },
      { id: 103, name: 'Animal Fries', description: 'Fries topped with cheese and secret sauce', price: 350 },
    ]
  },
  {
    id: 2,
    name: 'Pizza Hut',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop',
    rating: 4.5,
    deliveryTime: '40-50 min',
    deliveryFee: 100,
    categories: ['Pizza', 'Italian'],
    menu: [
      { id: 201, name: 'Fajita Sicilian', description: 'Spicy chicken, onions, green peppers', price: 1200 },
      { id: 202, name: 'Chicken Tikka', description: 'Local flavor with cheese', price: 1100 },
      { id: 203, name: 'Garlic Bread', description: '4 pieces with cheese', price: 250 },
    ]
  },
  {
    id: 3,
    name: 'KFC',
    image: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?q=80&w=600&auto=format&fit=crop',
    rating: 4.2,
    deliveryTime: '20-30 min',
    deliveryFee: 99,
    categories: ['Fried Chicken', 'Fast Food'],
    menu: [
      { id: 301, name: 'Zinger Burger', description: 'Classic crispy chicken burger', price: 550 },
      { id: 302, name: 'Hot Wings', description: '6 pieces spicy wings', price: 450 },
      { id: 303, name: 'Dinner Roll', description: 'Soft bread', price: 50 },
    ]
  }
];
