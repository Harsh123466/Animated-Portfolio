import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import NeuralBackground from './components/NeuralBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import About from './components/About';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import ExperienceEdu from './components/ExperienceEdu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

function App() {
  const [toast, setToast] = useState({ message: '', type: 'success' });
  const [selectedProject, setSelectedProject] = useState(null);
  const [theme, setTheme] = useState(() => {
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('portfolio-theme') : null;
    return savedTheme || 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('light-theme', theme === 'light');
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(pointer: fine)');

    const updateScrollProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      document.documentElement.style.setProperty('--scroll-progress', progress.toString());
    };

    const updateParallax = () => {
      document.querySelectorAll('[data-parallax]').forEach((element) => {
        const speed = Number(element.dataset.parallax || 0.08);
        const rect = element.getBoundingClientRect();
        const distance = (window.innerHeight - rect.top) * speed - (window.innerHeight * 0.35 * speed);
        element.style.transform = `translate3d(0, ${distance}px, 0)`;
      });
    };

    const handleScroll = () => {
      updateScrollProgress();
      updateParallax();
    };

    updateScrollProgress();
    updateParallax();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    if (mediaQuery.matches) {
      document.body.classList.add('reduced-motion');
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      };
    }

    const lenis = new Lenis({
      duration: 1.08,
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.15,
      lerp: 0.09,
      syncTouch: true,
      easing: (t) => 1 - Math.pow(2, -10 * t),
    });

    let rafId = null;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const handleAnchorClick = (event) => {
      const targetLink = event.target.closest('a[href^="#"]');
      if (!targetLink || !targetLink.getAttribute('href') || targetLink.getAttribute('href') === '#') return;

      const sectionId = targetLink.getAttribute('href');
      const section = document.querySelector(sectionId);
      if (!section) return;

      event.preventDefault();
      lenis.scrollTo(section, { offset: -72, duration: 1.2 });
    };

    document.addEventListener('click', handleAnchorClick);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    const revealTargets = document.querySelectorAll('section[id], article, .glass-panel, .project-card, .stat-card, .skill-card, .achievement-card, .system-visual');

    revealTargets.forEach((element, index) => {
      const sectionId = element.id;
      const variantMap = {
        hero: 'zoom',
        about: 'up',
        projects: 'left',
        skills: 'right',
        achievements: 'up',
        education: 'left',
        contact: 'zoom',
      };
      const variant = sectionId && variantMap[sectionId] ? variantMap[sectionId] : index % 2 === 0 ? 'up' : 'left';

      element.classList.add('reveal', `reveal-${variant}`);
      element.style.setProperty('--reveal-delay', `${Math.min(index * 55, 260)}ms`);
      observer.observe(element);
    });

    if (!finePointer.matches) {
      return () => {
        observer.disconnect();
        document.removeEventListener('click', handleAnchorClick);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
        cancelAnimationFrame(rafId);
        lenis.destroy();
      };
    }

    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    const cursorRing = document.createElement('div');
    cursorRing.className = 'cursor-ring';
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorRing);

    const setCursorPosition = (x, y) => {
      cursorDot.style.left = `${x}px`;
      cursorDot.style.top = `${y}px`;
      cursorRing.style.left = `${x}px`;
      cursorRing.style.top = `${y}px`;
    };

    const handlePointerMove = (event) => {
      const { clientX: x, clientY: y } = event;
      setCursorPosition(x, y);
    };

    document.addEventListener('pointermove', handlePointerMove);

    const magneticTargets = document.querySelectorAll('.magnetic');
    const tiltTargets = document.querySelectorAll('.tilt-card');
    const spotlightTargets = document.querySelectorAll('.spotlight-card');
    const cleanups = [];

    magneticTargets.forEach((element) => {
      const handleMove = (event) => {
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        element.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
        cursorRing.style.transform = 'scale(1.7)';
      };

      const handleLeave = () => {
        element.style.transform = '';
        cursorRing.style.transform = '';
      };

      element.addEventListener('pointermove', handleMove);
      element.addEventListener('pointerleave', handleLeave);
      cleanups.push(() => {
        element.removeEventListener('pointermove', handleMove);
        element.removeEventListener('pointerleave', handleLeave);
      });
    });

    tiltTargets.forEach((element) => {
      const handleMove = (event) => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const rotateY = (x - 0.5) * 8;
        const rotateX = (0.5 - y) * 8;
        element.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        cursorRing.style.transform = 'scale(1.5)';
      };

      const handleLeave = () => {
        element.style.transform = '';
        cursorRing.style.transform = '';
      };

      element.addEventListener('pointermove', handleMove);
      element.addEventListener('pointerleave', handleLeave);
      cleanups.push(() => {
        element.removeEventListener('pointermove', handleMove);
        element.removeEventListener('pointerleave', handleLeave);
      });
    });

    spotlightTargets.forEach((element) => {
      const handleMove = (event) => {
        const rect = element.getBoundingClientRect();
        element.style.setProperty('--spotlight-x', `${event.clientX - rect.left}px`);
        element.style.setProperty('--spotlight-y', `${event.clientY - rect.top}px`);
      };

      element.addEventListener('pointermove', handleMove);
      cleanups.push(() => element.removeEventListener('pointermove', handleMove));
    });

    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      document.removeEventListener('pointermove', handlePointerMove);
      cursorDot.remove();
      cursorRing.remove();
      cleanups.forEach((cleanup) => cleanup());
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  return (
    <div className={`relative min-h-screen bg-background text-slate-100 selection:bg-neon-emerald/20 selection:text-neon-emerald transition-colors duration-500 ease-out ${theme === 'light' ? 'light-theme' : ''}`}>
      
      {/* Interactive Neural Mesh Canvas Background */}
      <NeuralBackground theme={theme} />

      {/* Cyber Grid Overlay */}
      <div className="fixed inset-0 cyber-grid opacity-60 pointer-events-none z-0"></div>

      {/* Main Sticky Navbar (hidden when modal is open) */}
      <Navbar
        isModalOpen={!!selectedProject}
        theme={theme}
        onToggleTheme={() => setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')}
      />

      {/* Main Content Layout */}
      <main className="relative z-10">
        <Hero />
        <StatsBar />
        <About />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Skills />
        <Achievements />
        <ExperienceEdu />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Project Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Notification Toast */}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: '', type: 'success' })}
      />

    </div>
  );
}

export default App;
