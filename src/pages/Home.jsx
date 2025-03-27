import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLeaf, FaHandshake, FaChartLine, FaTractor, FaUsers, FaSeedling } from 'react-icons/fa';
import './Home.css';

function Home() {
  const [ref1, inView1] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ref4, inView4] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ref5, inView5] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ref6, inView6] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div className="home-container">
      <section className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <h1>Welcome to Annadhatha Bazaar</h1>
          <p>Empowering farmers, connecting communities, and revolutionizing agricultural trade</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      <section ref={ref1} className="features-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="feature-card"
        >
          <FaLeaf className="feature-icon" />
          <h2>Direct Farm to Market</h2>
          <p>Connect directly with buyers and eliminate middlemen for better profits</p>
        </motion.div>
      </section>

      <section ref={ref2} className="stats-section">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="stats-container"
        >
          <div className="stat-item">
            <FaUsers className="stat-icon" />
            <h3>10,000+</h3>
            <p>Active Farmers</p>
          </div>
          <div className="stat-item">
            <FaHandshake className="stat-icon" />
            <h3>50,000+</h3>
            <p>Successful Trades</p>
          </div>
          <div className="stat-item">
            <FaChartLine className="stat-icon" />
            <h3>₹1 Crore+</h3>
            <p>Daily Trading Volume</p>
          </div>
        </motion.div>
      </section>

      <section ref={ref3} className="how-it-works-section">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView3 ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          How It Works
        </motion.h2>
        <div className="steps-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView3 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="step"
          >
            <FaTractor className="step-icon" />
            <h3>List Your Products</h3>
            <p>Create listings for your agricultural products</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView3 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="step"
          >
            <FaHandshake className="step-icon" />
            <h3>Connect with Buyers</h3>
            <p>Receive offers and negotiate prices</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView3 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="step"
          >
            <FaSeedling className="step-icon" />
            <h3>Complete Transactions</h3>
            <p>Secure payments and delivery tracking</p>
          </motion.div>
        </div>
      </section>

      <section ref={ref4} className="testimonials-section">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={inView4 ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8 }}
    className="testimonial-container"
  >
    {[
      {
        name: "Rajesh Kumar",
        location: "Punjab Farmer",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        review: "Annadhatha Bazaar has transformed how I sell my produce. Better prices, direct buyers!",
      },
      {
        name: "Suresh Patil",
        location: "Maharashtra Farmer",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        review: "Selling directly to consumers has helped me get fair rates for my organic vegetables.",
      },
      {
        name: "Amit Singh",
        location: "Uttar Pradesh Farmer",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        review: "I no longer depend on middlemen. The platform is easy to use and very helpful.",
      },
      {
        name: "Manoj Das",
        location: "West Bengal Farmer",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
        review: "Fresh produce, better connections, and great customer support!",
      },
    ].map((testimonial, index) => (
      <motion.div
        key={index}
        className="testimonial"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
        <p>"{testimonial.review}"</p>
        <h4>{testimonial.name}</h4>
        <p className="farmer-location">{testimonial.location}</p>
      </motion.div>
    ))}
  </motion.div>
</section>


      <section ref={ref5} className="market-insights-section">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView5 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="insights-container"
        >
          <h2 className="market-insight">Market Insights</h2>
          <div className="insights-grid">
            <div className="insight-card">
              <h3>Price Trends</h3>
              <p>Real-time agricultural commodity prices</p>
            </div>
            <div className="insight-card">
              <h3>Demand Analysis</h3>
              <p>Know what buyers are looking for</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section ref={ref6} className="cta-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView6 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="cta-container"
        >
          <h2>Join Our Growing Community</h2>
          <p>Start trading on India's leading agricultural marketplace today</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
          >
            Register Now
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;