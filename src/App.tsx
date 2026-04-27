import { Suspense, lazy, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollShowcase from './components/ScrollShowcase';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Certificates = lazy(() => import('./components/Certificates'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const CustomCursor = lazy(() => import('./components/CustomCursor'));

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

function SectionFallback({ minHeight = '50vh' }: { minHeight?: string }) {
  return <div style={{ minHeight }} aria-hidden="true" />;
}

export default function App() {
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });

    lenis.on('scroll', ScrollTrigger.update);
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen text-white selection:bg-indigo-500/30">
      <ScrollShowcase />
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>
      <div className="atmosphere"></div>
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionFallback minHeight="60vh" />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionFallback minHeight="80vh" />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionFallback minHeight="55vh" />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<SectionFallback minHeight="45vh" />}>
        <Certificates />
      </Suspense>
      <Suspense fallback={<SectionFallback minHeight="55vh" />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<SectionFallback minHeight="15vh" />}>
        <Footer />
      </Suspense>
    </main>
  );
}
