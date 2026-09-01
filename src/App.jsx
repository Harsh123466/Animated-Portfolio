import React, { useState } from 'react';
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

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  return (
    <div className="relative min-h-screen bg-background text-slate-100 selection:bg-neon-emerald/20 selection:text-neon-emerald">
      
      {/* Interactive Neural Mesh Canvas Background */}
      <NeuralBackground />

      {/* Cyber Grid Overlay */}
      <div className="fixed inset-0 cyber-grid opacity-60 pointer-events-none z-0"></div>

      {/* Main Sticky Navbar (hidden when modal is open) */}
      <Navbar isModalOpen={!!selectedProject} />

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
