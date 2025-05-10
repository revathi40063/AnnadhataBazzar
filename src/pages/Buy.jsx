import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaShoppingCart, FaTruck } from 'react-icons/fa';
import './Buy.css';
import grainsImage from '../images/grains.jpeg';
import vegImg from '../images/vegetables.webp';



function Buy() {
  return (
    <div className="buy-container">
      <div className="buy-hero">
        <h1>Buy Fresh Agricultural Products</h1>
        <p>Direct from farmers to your doorstep - Fresh, Fair, and Transparent</p>
      </div>

      <div className="product-categories">
        <h2>Browse by Category</h2>
        <div className="category-grid">
          <motion.div 
            className="category-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={vegImg} alt="Vegetables" />
            <h3>Vegetables</h3>
          </motion.div>
          <motion.div 
            className="category-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80" alt="Fruits" />
            <h3>Fruits</h3>
          </motion.div>
          <motion.div  
            className="category-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={grainsImage} alt="Grains" />
            <h3>Grains</h3>
          </motion.div>
        </div>
      </div>

      <div className="buy-features">
        <div className="feature">
          <FaSearch className="feature-icon" />
          <h3>Easy Search</h3>
          <p>Find exactly what you need with our advanced search filters</p>
        </div>
        <div className="feature">
          <FaShoppingCart className="feature-icon" />
          <h3>Secure Payments</h3>
          <p>Safe and secure payment options for your purchases</p>
        </div>
        <div className="feature">
          <FaTruck className="feature-icon" />
          <h3>Quick Delivery</h3>
          <p>Fast and reliable delivery to your location</p>
        </div>
      </div>

      <div className="quality-guarantee">
        <h2>Our Quality Guarantee</h2>
        <p>Every product on our platform is verified for quality and freshness. We ensure that you get the best agricultural products directly from trusted farmers.</p>
      </div>
    </div>
  );
}

export default Buy;