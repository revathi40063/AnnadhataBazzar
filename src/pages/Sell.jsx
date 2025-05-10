import React from 'react';
import { motion } from 'framer-motion';
import { FaUpload, FaChartLine, FaHandshake } from 'react-icons/fa';
import './Sell.css';

function Sell() {
  return (
    <div className="sell-container">
      <div className="sell-hero">
        <h1>Sell Your Agricultural Products</h1>
        <p>Connect directly with buyers and get the best price for your produce</p>
      </div>

      <div className="sell-features">
        <motion.div 
          className="feature-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaUpload className="feature-icon" />
          <h3>Easy Listing</h3>
          <p>List your products in minutes with our simple upload process. Add photos, set prices, and describe your produce.</p>
        </motion.div>

        <motion.div 
          className="feature-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FaChartLine className="feature-icon" />
          <h3>Market Analysis</h3>
          <p>Get real-time market prices and trends to help you set competitive prices for your products.</p>
        </motion.div>

        <motion.div 
          className="feature-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FaHandshake className="feature-icon" />
          <h3>Direct Negotiations</h3>
          <p>Communicate directly with buyers and negotiate the best deals for your produce.</p>
        </motion.div>
      </div>

      <div className="sell-guide">
        <h2>How to Start Selling</h2>
        <div className="steps-grid">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Create Your Account</h3>
            <p>Sign up and verify your farmer profile with basic details</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>List Your Products</h3>
            <p>Add your agricultural products with details and photos</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Set Your Prices</h3>
            <p>Set competitive prices based on market analysis</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Connect with Buyers</h3>
            <p>Receive inquiries and negotiate with buyers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sell;