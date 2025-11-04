import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Video } from 'lucide-react';

const About = () => {
  const items = [
    {
      icon: <GraduationCap className="text-cyan-400" size={22} />,
      title: 'Tech Educator',
      desc: 'I explain complex topics with visual metaphors, interactive demos, and practical projects.',
    },
    {
      icon: <Code2 className="text-cyan-400" size={22} />,
      title: 'Full‑Stack Developer',
      desc: 'I design, build, and ship end‑to‑end apps across web, APIs, and cloud infrastructure.',
    },
    {
      icon: <Video className="text-cyan-400" size={22} />,
      title: 'Content Creator',
      desc: 'I craft narrative‑driven tutorials and talk through real‑world problem solving.',
    },
  ];

  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="mb-10"
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">About</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          My work blends engineering and storytelling. I believe learning is best when it’s
          hands‑on, visually engaging, and anchored in narrative.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
          >
            <div className="mb-4 inline-flex rounded-lg bg-white/5 p-2">
              {it.icon}
            </div>
            <h3 className="text-lg font-semibold text-white">{it.title}</h3>
            <p className="mt-2 text-sm text-white/70">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
