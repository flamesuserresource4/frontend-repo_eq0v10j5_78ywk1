import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Play, ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 backdrop-blur"
        >
          <Rocket size={16} className="text-cyan-300" />
          <span className="text-xs uppercase tracking-widest text-cyan-100/80">
            Innovative Storytelling in Tech
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-['Mona_Sans',Inter,system-ui] text-4xl font-bold leading-tight sm:text-6xl md:text-7xl"
        >
          Content Creator • Tech Educator • Full‑Stack Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          I craft interactive experiences and teach modern development through
          playful 3D, clear narratives, and production‑ready code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-medium text-black shadow-lg shadow-cyan-400/30 transition hover:translate-y-[-2px] hover:bg-cyan-300"
          >
            View Projects
            <ArrowRight size={18} className="transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <Play size={18} /> Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
