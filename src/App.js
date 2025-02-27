import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6"; // Ajout de l'importation de l'icône TikTok
import './App.css';
import videoSrc from './ferfe.mp4'; // Remplacez par le chemin de votre vidéo

const App = () => {
  return (
    <div className="maintenance-container">
      <div className="Maintenance">
        <div className="Header">
        
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="main-title"
        >
          Site en construction 🚧
        </motion.h1>
</div>
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
              <motion.video
                src={videoSrc}
                autoPlay
                loop
                muted
                className="video-class" // Ajoutez une classe pour le style
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              />
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
         <div className="bottom">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="bottom-text"
          >
            Nous travaillons sur une expérience unique pour vous !<br /> 
            Patience... Notre site sera bientôt en ligne avec plein de nouveautés.
             Restez à l'affût !
          </motion.p>
          </div>
        </div>

        <div className="Maintenance-bottom">
          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
          >
            <h1 className="res">Suivez-nous sur les réseaux sociaux pour ne rien manquer ! 📲</h1>
            <div className="social-icons">
              <a href="https://www.facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} className="facebook" />
              </a>
              <a href="https://www.instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} className="instagram" />
              </a>
              <a href="https://www.tiktok.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaTiktok size={30} className="tiktok" />
              </a>
            </div>
          </motion.div>
        </div>
        <div className="Footer">
          <p className="text">Powered by <a href="https://www.facebook.com" className="final">Mafamily's bengals</a></p>
        </div>
      </div>
    </div>
  );
};

export default App;