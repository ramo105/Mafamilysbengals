import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6"; // Ajout de l'importation de l'icône TikTok
import './App.css';
import ferfe from './ferfe.png';

const App = () => {
  return (
    <div className="maintenance-container">
      <div className="Maintenance">
        <br />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="main-title"
        >
          Site en construction 🚧
        </motion.h1>

        <div className="Maintenance-top">
          <motion.div
            className="content-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.div
              className="logo-text-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <img src={ferfe} alt="Logo" className="image-class" />
              <div className="text-container">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                >
                  <span> Chez Ma Family's On pense que ... </span> <br /> <br />
                  👉 " Avoir ou désirer un bengal est déjà une marque de bon goût 😊 <br />
                  A vous maintenant d'écrire la suite de votre aventure féline ! "
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="bottom-text"
          >
            Nous préparons quelque chose d'incroyable...  Restez connectés !
          </motion.p>
        </div>

        <div className="Maintenance-bottom">
          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
          >
            <h1 className="res">Mes réseaux sociaux :</h1>
            <div className="social-icons">
              <a href="https://www.facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} className="facebook" />
              </a>
              <a href="https://www.instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} className="instagram" />
              </a>
              <a href="https://www.tiktok.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaTiktok size={30} className="tiktok" /> {/* Remplacé Twitter par TikTok */}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default App;
