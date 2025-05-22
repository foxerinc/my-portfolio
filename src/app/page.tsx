import type { Metadata } from 'next';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export const metadata: Metadata = {
  title: 'Dedi Yanto | Portfolio',
  description: 'Personal portfolio website of Dedi Yanto, a passionate developer.',
};

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}