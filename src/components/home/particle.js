// Particle.js

import React, { useEffect } from 'react';
import Particles from 'particles.js';

const Particle = () => {
  useEffect(() => {
    Particles.init({
      selector: '.background',
      color: '#ffffff',
      connectParticles: true,
      sizeVariations: 3,
      maxParticles: 150,
    });
  }, []);

  return <div className="background" />;
};

export default Particle;

