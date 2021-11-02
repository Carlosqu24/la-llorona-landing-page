import React from 'react';

import { Hero } from '../Hero';
import { Foods } from '../Foods';
import { FoodPackages } from '../FoodPackages'; 
import { Contact } from '../Contact';

import './Main.css';

export const Main = () => {
      return (
            <main className="main">
                  <Hero />
                  <Foods />
                  {/* <FoodPackages /> */}
                  <Contact />
            </main>
      )
}
