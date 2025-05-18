import React, { useState } from "react";
import { motion } from "framer-motion";
import Social from "../Social/Social.jsx";
import Data from "../Social/Data";
import "./Home.css";

function Home() {
  const [showHand, setShowHand] = useState(false);

  return (
    <section className="home__section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img" onClick={() => setShowHand(true)}>
            {showHand && (
              <motion.div
                initial={{ y: 100, opacity: 0, rotate: -30 }}
                animate={{ y: -20, opacity: 1, rotate: 0 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="fixed inset-0 flex items-center justify-center text-[13vw] z-50"
                onAnimationComplete={() =>
                  setTimeout(() => setShowHand(false), 1000)
                }
              >
                👨🏻‍💻
              </motion.div>
            )}
          </div>
          <Data />
        </div>
      </div>
    </section>
  );
}

export default Home;
