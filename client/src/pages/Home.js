import React from "react";
import Footer from "../components/Footer/Footer";
import TransfersSvg from "../assets/transfers.svg";
import EncryptSvg from "../assets/encrypt.svg";
import { Link } from "react-router-dom";
import { TiCloudStorage } from "react-icons/ti";
import { AiFillFileText } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="home"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}  
    >
      <div className="home-container">
        <div className="home-container__text">
          <h1>Free Cloud-Based</h1>
          <h1>Reliable Storage</h1>
          <p>Take advantage of free fast and reliable storage now!</p>
        </div>
        <div className="home-container__drop">
          <div className="home-container__drop-inner">
            <p>Drag & Drop files here to upload</p>
            <input type="button" value="Browse Files" />
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="home-features__header">
          <h1>Unique Features of WS Share!</h1>
          <p>
            WS Share has much more advanced features than its competitors. We
            know very well what you need
          </p>
        </div>
        <div className="home-features__body">
          <div className="home-features__body-item">
            <TiCloudStorage style={{ color: "#FFBFCB" }} />
            <div>
              <h1>Unlimited Bandwidth</h1>
              <p>
                Download speed should not be a trouble, we offer all users
                unmetered bandwidth
              </p>
            </div>
          </div>
          <div className="home-features__body-item">
            <AiFillFileText style={{ color: "#FFCFC3" }} />
            <div>
              <h1>Advanced File Options</h1>
              <p>
                File password, timed or one-time download links, available for
                all users
              </p>
            </div>
          </div>
          <div className="home-features__body-item">
            <IoSettingsSharp style={{ color: "#BDEDDC" }} />
            <div>
              <h1>Highly Available</h1>
              <p>All files stored in distributed object storage system</p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-info">
        <div className="home-info__item">
          <img src={TransfersSvg} alt="Transfers svg" />
        </div>
        <div className="home-info__item">
          <h1>Reliable Storage & Fast Transfers</h1>
          <p>
            We make secure cloud storage simple and convenient. Create a free
            account today!
          </p>
          <Link to="/">Learn more</Link>
        </div>
      </div>
      <div className="home-info">
        <div className="home-info__item">
          <h1>Reliable Storage & Fast Transfers</h1>
          <p>
            We make secure cloud storage simple and convenient. Create a free
            account today!
          </p>
          <Link to="/">Learn more</Link>
        </div>
        <div className="home-info__item">
          <img src={EncryptSvg} alt="Transfers svg" />
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Home;
