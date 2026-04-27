import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollShowcase() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [svgMarkup, setSvgMarkup] = useState('');
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
    );

    const updateState = () => setIsAnimated(mediaQuery.matches);
    updateState();

    mediaQuery.addEventListener('change', updateState);
    window.addEventListener('resize', updateState);

    return () => {
      mediaQuery.removeEventListener('change', updateState);
      window.removeEventListener('resize', updateState);
    };
  }, []);

  useEffect(() => {
    if (!isAnimated) {
      setSvgMarkup('');
      return;
    }

    let alive = true;

    fetch('/scroll-showcase-scene.svg')
      .then((response) => response.text())
      .then((markup) => {
        if (alive) {
          setSvgMarkup(markup);
        }
      })
      .catch(() => {
        if (alive) {
          setSvgMarkup('');
        }
      });

    return () => {
      alive = false;
    };
  }, [isAnimated]);

  useEffect(() => {
    if (!isAnimated || !svgMarkup || !stageRef.current) {
      return;
    }

    const stage = stageRef.current;
    const svg = stage.querySelector('svg');
    const scrollElement = stage.querySelector('.scrollElement');

    if (!svg || !scrollElement) {
      return;
    }

    const getVh = () => window.innerHeight;
    const getMaxScroll = () => ScrollTrigger.maxScroll(window);
    const speed = 100;
    const height = svg.getBBox().height;

    const ctx = gsap.context(() => {
      gsap.set('#h2-1', { opacity: 0 });
      gsap.set('#bg_grad', { attr: { cy: '-50' } });
      gsap.set(['#dinoL', '#dinoR'], { y: 80 });
      gsap.set('#dinoL', { x: -10 });

      const mm = gsap.matchMedia();
      mm.add('(max-width: 1922px)', () => {
        gsap.set(['#cloudStart-L', '#cloudStart-R'], { x: 10, opacity: 1 });
      });

      const scene1 = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: 0,
          end: () => getVh() * 3,
          scrub: 3,
          invalidateOnRefresh: true,
        },
      });

      scene1.to('#h1-1', { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: 'power1.in' }, 0);
      scene1.to('#h1-2', { y: 2.6 * speed, x: -0.6 * speed, ease: 'power1.in' }, 0);
      scene1.to('#h1-3', { y: 1.7 * speed, x: 1.2 * speed }, 0.03);
      scene1.to('#h1-4', { y: 3 * speed, x: 1 * speed }, 0.03);
      scene1.to('#h1-5', { y: 2 * speed, x: 1 * speed }, 0.03);
      scene1.to('#h1-6', { y: 2.3 * speed, x: -2.5 * speed }, 0);
      scene1.to('#h1-7', { y: 5 * speed, x: 1.6 * speed }, 0);
      scene1.to('#h1-8', { y: 3.5 * speed, x: 0.2 * speed }, 0);
      scene1.to('#h1-9', { y: 3.5 * speed, x: -0.2 * speed }, 0);
      scene1.to('#cloudsBig-L', { y: 4.5 * speed, x: -0.2 * speed }, 0);
      scene1.to('#cloudsBig-R', { y: 4.5 * speed, x: -0.2 * speed }, 0);
      scene1.to('#cloudStart-L', { x: -300 }, 0);
      scene1.to('#cloudStart-R', { x: 300 }, 0);
      scene1.to('#info', { y: 8 * speed }, 0);

      gsap.fromTo(
        '#bird',
        { opacity: 1 },
        {
          y: -250,
          x: 800,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: document.body,
            start: () => getVh() * 0.9,
            end: () => getVh() * 3.6,
            scrub: 4,
            invalidateOnRefresh: true,
            onEnter: () => {
              gsap.to('#bird', { scaleX: 1, rotation: 0 });
            },
            onLeave: () => {
              gsap.to('#bird', { scaleX: -1, rotation: -15 });
            },
          },
        }
      );

      const clouds = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: 0,
          end: () => getVh() * 4.5,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      clouds.to('#cloud1', { x: 500 }, 0);
      clouds.to('#cloud2', { x: 1000 }, 0);
      clouds.to('#cloud3', { x: -1000 }, 0);
      clouds.to('#cloud4', { x: -700, y: 25 }, 0);

      const sun = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: () => getVh() * 0.08,
          end: () => getVh() * 5,
          scrub: 2,
          invalidateOnRefresh: true,
        },
      });

      sun.fromTo('#bg_grad', { attr: { cy: '-50' } }, { attr: { cy: '330' } }, 0);
      sun.to('#bg_grad stop:nth-child(2)', { attr: { offset: '0.15' } }, 0);
      sun.to('#bg_grad stop:nth-child(3)', { attr: { offset: '0.18' } }, 0);
      sun.to('#bg_grad stop:nth-child(4)', { attr: { offset: '0.25' } }, 0);
      sun.to('#bg_grad stop:nth-child(5)', { attr: { offset: '0.46' } }, 0);
      sun.to('#bg_grad stop:nth-child(6)', { attr: { 'stop-color': '#FF9171' } }, 0);

      const scene2 = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: () => getVh() * 1.25,
          end: () => getVh() * 3.8,
          scrub: 3,
          invalidateOnRefresh: true,
        },
      });

      scene2.fromTo('#h2-1', { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0);
      scene2.fromTo('#h2-2', { y: 500 }, { y: 0 }, 0.1);
      scene2.fromTo('#h2-3', { y: 700 }, { y: 0 }, 0.1);
      scene2.fromTo('#h2-4', { y: 700 }, { y: 0 }, 0.2);
      scene2.fromTo('#h2-5', { y: 800 }, { y: 0 }, 0.3);
      scene2.fromTo('#h2-6', { y: 900 }, { y: 0 }, 0.3);

      gsap.set('#bats', { transformOrigin: '50% 50%' });
      gsap.fromTo(
        '#bats',
        { opacity: 1, y: 400, scale: 0 },
        {
          y: 20,
          scale: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: document.body,
            start: () => getVh() * 3.1,
            end: () => getVh() * 5.2,
            scrub: 3,
            invalidateOnRefresh: true,
            onEnter: () => {
              gsap.utils.toArray<SVGPathElement>('#bats path').forEach((item, index) => {
                gsap.to(item, {
                  scaleX: 0.5,
                  yoyo: true,
                  repeat: 9,
                  transformOrigin: '50% 50%',
                  duration: 0.15,
                  delay: 0.7 + index / 10,
                });
              });
              gsap.set('#bats', { opacity: 1 });
            },
          },
        }
      );

      const sun2 = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: () => getVh() * 3.2,
          end: () => getVh() * 7.8,
          scrub: 2,
          invalidateOnRefresh: true,
        },
      });

      sun2.to('#sun', { attr: { offset: '1.4' } }, 0);
      sun2.to('#bg_grad stop:nth-child(2)', { attr: { offset: '0.7' } }, 0);
      sun2.to('#sun', { attr: { 'stop-color': '#ffff00' } }, 0);
      sun2.to('#lg4 stop:nth-child(1)', { attr: { 'stop-color': '#623951' } }, 0);
      sun2.to('#lg4 stop:nth-child(2)', { attr: { 'stop-color': '#261F36' } }, 0);
      sun2.to('#bg_grad stop:nth-child(6)', { attr: { 'stop-color': '#45224A' } }, 0);

      gsap.set('#scene3', { y: height - 40, visibility: 'visible' });

      const sceneTransition = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: () => getVh() * 4.7,
          end: () => Math.min(getMaxScroll(), getVh() * 7.2),
          scrub: 3,
          invalidateOnRefresh: true,
        },
      });

      sceneTransition.to('#h2-1', { y: -height - 100, scale: 1.5, transformOrigin: '50% 50%' }, 0);
      sceneTransition.to('#bg_grad', { attr: { cy: '-80' } }, 0);
      sceneTransition.to('#bg2', { y: 0 }, 0);

      const scene3 = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: () => getVh() * 5.8,
          end: () => getMaxScroll(),
          scrub: 3,
          invalidateOnRefresh: true,
        },
      });

      scene3.fromTo('#h3-1', { y: 300 }, { y: -550 }, 0);
      scene3.fromTo('#h3-2', { y: 800 }, { y: -550 }, 0.03);
      scene3.fromTo('#h3-3', { y: 600 }, { y: -550 }, 0.06);
      scene3.fromTo('#h3-4', { y: 800 }, { y: -550 }, 0.09);
      scene3.fromTo('#h3-5', { y: 1000 }, { y: -550 }, 0.12);
      scene3.fromTo('#stars', { opacity: 0 }, { opacity: 0.5, y: -500 }, 0);
      scene3.fromTo('#arrow2', { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.25);
      scene3.fromTo('#text2', { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.3);
      scene3.to('#bg2-grad', { attr: { cy: 600 } }, 0);
      scene3.to('#bg2-grad', { attr: { r: 500 } }, 0);

      gsap.set('#fstar', { y: -400 });
      const fstarTL = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: () => getVh() * 7.2,
          end: () => getMaxScroll(),
          scrub: 2,
          invalidateOnRefresh: true,
          onEnter: () => {
            gsap.set('#fstar', { opacity: 1 });
          },
          onLeave: () => {
            gsap.set('#fstar', { opacity: 0 });
          },
        },
      });

      fstarTL.to('#fstar', { x: -700, y: -250, ease: 'power2.out' }, 0);

      [1, 3, 5, 8, 11, 15, 17, 18, 25, 28, 30, 35, 40, 45, 48].forEach((index, order) => {
        gsap.fromTo(
          `#stars path:nth-of-type(${index})`,
          { opacity: 0.3 },
          {
            opacity: 1,
            duration: 0.3,
            repeat: -1,
            repeatDelay: [0.8, 1.8, 1, 1.2, 0.5, 2, 1.1, 1.4, 1.1, 0.9, 1.3, 2, 0.8, 1.8, 1][order],
          }
        );
      });

      ScrollTrigger.refresh();

      return () => {
        mm.revert();
      };
    }, stageRef);

    return () => {
      ctx.revert();
    };
  }, [isAnimated, svgMarkup]);

  if (!isAnimated) {
    return (
      <div className="parallax-site-bg" aria-hidden="true">
        <img
          src="/scroll-showcase-scene.svg"
          alt=""
          className="parallax-fallback-image"
          loading="eager"
          decoding="async"
        />
        <div className="parallax-site-overlay" />
      </div>
    );
  }

  return (
    <div className="parallax-site-bg" aria-hidden="true">
      <div
        ref={stageRef}
        className="parallax-stage"
        dangerouslySetInnerHTML={{ __html: svgMarkup }}
      />
      <div className="parallax-site-overlay" />
    </div>
  );
}
