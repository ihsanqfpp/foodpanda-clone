import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CartDrawer from './components/common/CartDrawer';

function App() {
  return (
    <Router>
      <CartDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Placeholder for future routes */}
        {/* <Route path="/restaurant/:id" element={<RestaurantDetail />} /> */}
        {/* <Route path="/checkout" element={<Checkout />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
