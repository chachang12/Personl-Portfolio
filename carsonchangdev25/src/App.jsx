import styles from './style';
import { bgwlogo } from './assets';
import { AboutMe, Button, Footer, Hero, Navbar, Projects, Stats } from './components';

import React from 'react'


const App = () => (
  <div className="bg-[#1E341E] w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} py-6 flex justify-center`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-[#1E341E] ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-[#1E341E] ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        
        <AboutMe />
        <Projects />
        <Footer />
      </div>
    </div>

  </div>
)


export default App


