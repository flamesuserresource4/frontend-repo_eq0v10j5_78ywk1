import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Youtube, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 p-10 text-center backdrop-blur"
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Let’s Collaborate</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Speaking, workshops, content partnerships, or building something extraordinary—
          I’d love to hear from you.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black shadow-lg transition hover:translate-y-[-2px]"
          >
            <Mail size={18} /> Email Me
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-white backdrop-blur transition hover:bg-white/10"
          >
            <Youtube size={18} /> YouTube
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-white backdrop-blur transition hover:bg-white/10"
          >
            <Twitter size={18} /> X / Twitter
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-white backdrop-blur transition hover:bg-white/10"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>

        <p className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} All rights reserved.</p>
      </motion.div>
    </section>
  );
};

export default Contact;
