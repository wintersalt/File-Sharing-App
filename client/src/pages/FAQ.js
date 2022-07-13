import React from "react";
import Footer from "../components/Footer/Footer";
import FaqSvg from "../assets/faq.svg";
import { motion } from "framer-motion";

const FAQ = () => {
  return (
    <div>
      <motion.div
        className="faq"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <img src={FaqSvg} alt="FAQ" />
        <div className="faq-container">
          <div className="faq-container__item">
            <h2>Reach a Global Audience</h2>
            <p>Serving users in 25+ languages and 35+ currencies worldwide</p>
          </div>
          <div className="faq-container__item">
            <h2>Reliable Storage & Fast Transfers</h2>
            <p>
              Industry-leading business tools that help you manage your store
            </p>
          </div>
          <div className="faq-container__item">
            <h2>Unlimited Bandwidth</h2>
            <p>Endless opportunities to get noticed by potential players</p>
          </div>
          <div className="faq-container__item">
            <h2>Advanced File Options</h2>
            <p>
              User-centric features that increase engagement and satisfaction
            </p>
          </div>
          <div
            className="faq-container__item"
            style={{ gridColumn: "content" }}
          >
            <h2>Highly Available</h2>
            <p>
              Tried and tested frameworks to help you add standard - advanced
              features to your game with ease
            </p>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default FAQ;
