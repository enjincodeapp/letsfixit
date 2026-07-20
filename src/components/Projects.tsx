import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Layers, PoundSterling, ArrowRight, ArrowLeft, ExternalLink, X, Sparkles, Award } from 'lucide-react';
import { PROJECTS_DATA, type Project } from '../data/projects';

interface ProjectsProps {
  onOpenConsultation: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenConsultation }) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'All' | 'Luxury Home' | 'Heritage Renovation' | 'Property Development' | 'Architectural Extension'>('All');

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (activeTab === 'All') return true;
    return p.category === activeTab;
  });

  const currentProject = filteredProjects[activeProjectIndex] || filteredProjects[0];

  const handleNext = () => {
    setActiveProjectIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setActiveProjectIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section id="projects" className="relative py-28 md:py-36 bg-charcoal text-gray-100 overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-gold font-semibold flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>Architectural Showcase</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              Featured <span className="italic font-normal text-gold">Highland & Coastal</span> Projects
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/10">
            {(['All', 'Luxury Home', 'Heritage Renovation', 'Property Development', 'Architectural Extension'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setActiveProjectIndex(0);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gold text-charcoal shadow-gold-glow'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Hero Showcase Slider */}
        {currentProject && (
          <div className="relative rounded-3xl overflow-hidden glass-card border border-white/10 shadow-luxury mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
              {/* Image Container */}
              <div className="lg:col-span-7 relative h-[380px] lg:h-auto overflow-hidden group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentProject.id}
                    src={currentProject.heroImage}
                    alt={currentProject.title}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-charcoal/30 lg:to-charcoal" />

                {/* Floating Architectural Badge */}
                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-charcoal/80 border border-gold/40 text-gold text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
                  {currentProject.category}
                </div>
              </div>

              {/* Information Panel */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-charcoal/90 backdrop-blur-xl">
                <div>
                  <div className="flex items-center gap-2 text-xs text-gold font-semibold uppercase tracking-widest mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{currentProject.location}</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
                    {currentProject.title}
                  </h3>

                  <p className="text-gold italic font-serif text-sm mb-6">
                    "{currentProject.subtitle}"
                  </p>

                  <p className="text-gray-300 text-sm leading-relaxed mb-8">
                    {currentProject.shortStory}
                  </p>

                  {/* Project Specs Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                        <PoundSterling className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-[10px] text-gray-400 uppercase tracking-widest">Value</span>
                        <span className="font-serif text-base font-bold text-white">{currentProject.projectValue}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-[10px] text-gray-400 uppercase tracking-widest">Area</span>
                        <span className="font-serif text-base font-bold text-white">{currentProject.sqFt}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-[10px] text-gray-400 uppercase tracking-widest">Completion</span>
                        <span className="font-serif text-base font-bold text-white">{currentProject.completionDate}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-[10px] text-gray-400 uppercase tracking-widest">Architect</span>
                        <span className="font-sans text-xs font-semibold text-gray-200 truncate">{currentProject.architect}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Controls */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <button
                    onClick={() => setSelectedProject(currentProject)}
                    className="px-6 py-3 rounded-full bg-gold hover:bg-gold-light text-charcoal font-bold text-xs uppercase tracking-wider shadow-gold-glow flex items-center gap-2 transition-all"
                  >
                    <span>View Case Study</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold hover:text-charcoal border border-white/10 text-white flex items-center justify-center transition-all"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-gray-400 font-mono px-2">
                      {activeProjectIndex + 1} / {filteredProjects.length}
                    </span>
                    <button
                      onClick={handleNext}
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold hover:text-charcoal border border-white/10 text-white flex items-center justify-center transition-all"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Thumbnail Scroll Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-gold/50 transition-all duration-300"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-charcoal/80 text-[10px] uppercase tracking-widest text-gold border border-white/10">
                  {project.category}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                  <span>{project.location}</span>
                  <span className="text-gold font-bold">{project.projectValue}</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-white group-hover:text-gold transition-colors">
                  {project.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card-gold rounded-3xl max-w-4xl w-full border border-gold/40 shadow-luxury overflow-hidden relative my-8"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-charcoal/80 text-white flex items-center justify-center border border-white/20 hover:bg-gold hover:text-charcoal transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                <img
                  src={selectedProject.heroImage}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-xs uppercase tracking-widest text-gold font-bold">
                    {selectedProject.category} • {selectedProject.location}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              <div className="p-8 sm:p-12 space-y-8">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-2">Architectural Brief</h4>
                  <p className="text-gray-200 text-base leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Features List */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-4">Architectural Innovations & Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((feat, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-200 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery Images */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-4">Project Gallery</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {selectedProject.gallery.map((img, idx) => (
                      <div key={idx} className="rounded-xl overflow-hidden h-44 border border-white/10">
                        <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-gray-400">
                    Architectural Lead: <span className="text-white font-semibold">{selectedProject.architect}</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenConsultation();
                    }}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gold text-charcoal font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-105 transition-all"
                  >
                    Discuss Similar Build
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
