'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import AnimatedText from '@/components/AnimatedText';
import MagneticButton from '@/components/MagneticButton';

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <main className="bg-white text-primary">
      {/* Minimal Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="max-w-[1400px] mx-auto px-8 py-6 flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-xl">
            RK
          </Link>
          <div className="flex gap-8 text-sm font-medium text-white">
            <a href="#work" className="hover:opacity-60 transition">Work</a>
            <a href="#about" className="hover:opacity-60 transition">About</a>
            <a href="#contact" className="hover:opacity-60 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero - Full Screen with Gradient */}
      <section ref={targetRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 animate-gradient" />

        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 max-w-[1200px] mx-auto px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-accent-blue border border-accent-blue/20">
              Available for Opportunities
            </span>
          </motion.div>

          <AnimatedText
            text="Building AI Products That Actually Ship"
            className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.05] mb-8 tracking-tight"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl text-muted max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            20-year-old founder at <span className="text-accent-purple font-semibold">Veyu AI</span>.
            Ex-<span className="text-accent-blue font-semibold">Sarvam AI</span>.
            80K+ lines of production code. 1M+ daily API calls.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex gap-4 justify-center"
          >
            <MagneticButton
              href="#work"
              className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:scale-105 transition-transform"
            >
              View Work →
            </MagneticButton>
            <MagneticButton
              href="mailto:rachit@veyu.ai"
              className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-primary/10 rounded-full font-semibold hover:border-primary/30 transition-all"
            >
              Get in Touch
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-muted">
            <span className="text-sm font-medium">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-[1px] h-12 bg-gradient-to-b from-muted to-transparent"
            />
          </div>
        </motion.div>
      </section>

      {/* Work - Bento Grid */}
      <section id="work" className="py-32 px-8 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold text-accent-blue uppercase tracking-wider mb-4 block">
              Selected Work
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-20 max-w-3xl">
              Products that shipped and scaled
            </h2>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Large Feature Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-10 text-white relative overflow-hidden group cursor-pointer"
            >
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-wider opacity-90 mb-4 block">
                  Production Scale
                </span>
                <h3 className="text-4xl font-bold mb-4">Sarvam Samvaad Platform</h3>
                <p className="text-lg opacity-90 mb-8 max-w-lg leading-relaxed">
                  #1 contributor on India's leading AI platform. Built the dashboard serving 1M+ daily API calls.
                  58 commits, 44K+ lines of production code.
                </p>
                <div className="flex gap-4">
                  <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                    1M+ Daily Calls
                  </div>
                  <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                    #1 Contributor
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>

            {/* Speed Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-accent-purple/30 transition-all group cursor-pointer"
            >
              <span className="text-xs font-bold text-accent-purple uppercase tracking-wider mb-4 block">
                Execution Speed
              </span>
              <h3 className="text-2xl font-bold mb-3">LLM Chat UI</h3>
              <p className="text-muted mb-6 leading-relaxed">
                Built in 3 days under pressure. LaTeX, code formatting, feedback integration.
              </p>
              <div className="text-3xl font-bold text-accent-purple">500K+</div>
              <div className="text-sm text-muted">downloads first week</div>
            </motion.div>

            {/* Solo Build Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl p-8 text-white hover:scale-[1.02] transition-transform cursor-pointer"
            >
              <span className="text-xs font-bold uppercase tracking-wider opacity-90 mb-4 block">
                Solo Build
              </span>
              <h3 className="text-2xl font-bold mb-3">Dubbing Studio</h3>
              <p className="opacity-90 mb-6 leading-relaxed">
                Built entirely alone. MVP in 2 weeks. Showcased to government officials.
              </p>
              <div className="text-3xl font-bold">2 weeks</div>
              <div className="text-sm opacity-90">MVP to Government Demo</div>
            </motion.div>

            {/* Current Work Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2 bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl p-10 text-white relative overflow-hidden group cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Currently Building
                </span>
              </div>
              <h3 className="text-4xl font-bold mb-4">Veyu AI</h3>
              <p className="text-lg opacity-90 mb-6 max-w-xl leading-relaxed">
                Premium AI partner to businesses. Clients across India, Dubai, Saudi Arabia.
                Target: $100K revenue by end of 2026.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Newton School', 'LexAI Labs', 'Dubai', 'Saudi Arabia'].map((client) => (
                  <span key={client} className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    {client}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* API Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-accent-blue/30 transition-all group cursor-pointer"
            >
              <span className="text-xs font-bold text-accent-blue uppercase tracking-wider mb-4 block">
                Full Ownership
              </span>
              <h3 className="text-2xl font-bold mb-3">API Playgrounds</h3>
              <p className="text-muted mb-6 leading-relaxed">
                Rebuilt entire dashboard. 6 AI playgrounds from scratch.
              </p>
              <div className="text-3xl font-bold text-accent-blue">6</div>
              <div className="text-sm text-muted">playgrounds built</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About - Asymmetric Layout */}
      <section id="about" className="py-32 px-8">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold text-accent-purple uppercase tracking-wider mb-4 block">
              About
            </span>
            <h2 className="text-5xl font-bold mb-8 leading-tight">
              From small-town UP to building AI for thousands
            </h2>
            <div className="space-y-6 text-lg text-muted leading-relaxed">
              <p>
                Grew up in Uttar Pradesh, discovered programming through Java in school,
                and found my way to building production systems serving millions.
              </p>
              <p>
                At <span className="text-primary font-semibold">Sarvam AI</span>, I was the only
                intern selected from my college. Shipped products serving 1M+ API calls daily,
                wrote 80K+ lines of production code, learned what it means to build at scale.
              </p>
              <p>
                Now building <span className="text-primary font-semibold">Veyu AI</span> — a premium
                AI partner to businesses. Target: $100K revenue by end of 2026.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-gray-200">
              <h3 className="font-bold text-xl mb-4">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['Frontend', 'React/Next.js', 'AI Engineering', 'TypeScript', 'System Design'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-accent-blue mb-2">80K+</div>
                <div className="text-sm text-muted">Lines of Code</div>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-accent-purple mb-2">1M+</div>
                <div className="text-sm text-muted">Daily API Calls</div>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-accent-green mb-2">500K+</div>
                <div className="text-sm text-muted">Downloads</div>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-accent-orange mb-2">20</div>
                <div className="text-sm text-muted">Years Old</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact - Centered CTA */}
      <section id="contact" className="py-32 px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Let's Build Something</h2>
          <p className="text-2xl text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            Open to collaborations, consulting, and conversations about AI, startups, and building the future.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <MagneticButton
              href="mailto:rachit@veyu.ai"
              className="px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:scale-105 transition-transform"
            >
              rachit@veyu.ai →
            </MagneticButton>
            <MagneticButton
              href="https://linkedin.com/in/rachit-kumar"
              className="px-8 py-4 bg-white border-2 border-gray-200 rounded-full font-semibold text-lg hover:border-primary/30 transition-all"
            >
              LinkedIn
            </MagneticButton>
            <MagneticButton
              href="https://twitter.com/rachit"
              className="px-8 py-4 bg-white border-2 border-gray-200 rounded-full font-semibold text-lg hover:border-primary/30 transition-all"
            >
              Twitter
            </MagneticButton>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center text-sm text-muted">
          <p>© 2026 Rachit Kumar</p>
          <p>Built with curiosity</p>
        </div>
      </footer>
    </main>
  );
}
