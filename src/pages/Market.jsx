import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaNewspaper, FaCalendarAlt } from 'react-icons/fa';
import './Market.css';

function Market() {
  return (
    <div className="market-container">
      <div className="market-hero">
        <h1>Market Insights & Trends</h1>
        <p>Stay updated with real-time agricultural market data and analysis</p>
      </div>

      <div className="price-trends">
        <h2>Current Price Trends</h2>
        <div className="trends-grid">
          <motion.div 
            className="trend-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Vegetables</h3>
            <div className="price-chart">
              <FaChartLine className="chart-icon" />
              <span className="trend-up">↑ 5.2%</span>
            </div>
            <p>Prices trending upward due to seasonal demand</p>
          </motion.div>

          <motion.div 
            className="trend-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Fruits</h3>
            <div className="price-chart">
              <FaChartLine className="chart-icon" />
              <span className="trend-stable">→ 0.1%</span>
            </div>
            <p>Stable prices with consistent supply</p>
          </motion.div>

          <motion.div 
            className="trend-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3>Grains</h3>
            <div className="price-chart">
              <FaChartLine className="chart-icon" />
              <span className="trend-down">↓ 2.3%</span>
            </div>
            <p>Slight decrease due to increased production</p>
          </motion.div>
        </div>
      </div>

      <div className="market-news">
        <h2>Latest Market News</h2>
        <div className="news-grid">
          <div className="news-card">
            <FaNewspaper className="news-icon" />
            <h3>Government Announces New Agricultural Policies</h3>
            <p>New initiatives to support farmers and agricultural markets</p>
            <span className="news-date">March 15, 2025</span>
          </div>
          <div className="news-card">
            <FaCalendarAlt className="news-icon" />
            <h3>Upcoming Farmer's Market Events</h3>
            <p>Schedule of agricultural trade shows and farmer markets</p>
            <span className="news-date">March 20, 2025</span>
          </div>
        </div>
      </div>

      <div className="market-analysis">
        <h2>Expert Analysis</h2>
        <div className="analysis-content">
          <p>Our agricultural experts provide detailed market analysis and forecasts to help you make informed decisions. Stay ahead of market trends and optimize your trading strategy.</p>
        </div>
      </div>
    </div>
  );
}

export default Market;