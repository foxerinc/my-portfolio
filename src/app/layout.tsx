'use client';

import './globals.css';
import { useEffect, useId } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { type RecursivePartial, type IOptions } from '@tsparticles/engine';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const id = useId();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).catch((error) => {
      console.error('Failed to initialize tsParticles:', error);
    });
  }, []);

  const particlesOptions = {
    particles: {
      number: { value: 30, density: { enable: true, value_area: 1000 } },
      color: { value: ['#00ffff', '#39ff14'] }, // primary and tertiary
      shape: { type: 'circle' },
      opacity: { value: 0.7, random: true }, // Brighter particles
      size: { value: 1.5, random: true }, // Smaller particles
      move: {
        enable: true,
        speed: 0.5,
        random: true,
        outModes: 'out',
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        onClick: { enable: true, mode: 'push' },
      },
      modes: {
        repulse: { distance: 80, duration: 0.4 },
        push: { quantity: 3 },
      },
    },
  } as RecursivePartial<IOptions>;

  return (
    <html lang="en">
      <body className="min-h-screen">
        <Particles
          id={id}
          options={particlesOptions}
          className="absolute inset-0 z-0 opacity-50"
        />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}