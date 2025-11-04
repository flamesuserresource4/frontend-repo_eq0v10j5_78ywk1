import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Data Story',
    desc: 'A web narrative that transforms complex datasets into immersive visuals and clear insights.',
    tags: ['React', 'D3', 'Framer Motion'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Full‑Stack Course Platform',
    desc: 'A production‑ready learning hub with curricula, challenges, and progress tracking.',
    tags: ['FastAPI', 'MongoDB', 'React'],
    link: '#',
    repo: '#',
  },
  {
    title: '3D Playground',
    desc: 'Explorations in 3D interfaces and playful interactions for teaching core concepts.',
    tags: ['Spline', 'WebGL'],
    link: '#',
    repo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="mb-10"
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured Projects</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          A selection of recent work at the intersection of education and engineering.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={p.link}
                className="inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-1.5 text-sm text-white/80 transition hover:bg-white/10"
              >
                <ExternalLink size={16} /> Live
              </a>
              <a
                href={p.repo}
                className="inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-1.5 text-sm text-white/80 transition hover:bg-white/10"
              >
                <Github size={16} /> Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
