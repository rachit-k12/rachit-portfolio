'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

// Simple component replacements
const Badge = ({ children, variant = 'default', size = 'md' }: { children: React.ReactNode; variant?: string; size?: string }) => {
  const variants = {
    green: 'bg-green-100 text-green-800 border-green-200',
    indigo: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    orange: 'bg-orange-100 text-orange-800 border-orange-200',
    default: 'bg-gray-100 text-gray-800 border-gray-200'
  };

  const sizes = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  };

  return (
    <span className={`inline-flex items-center rounded-full border font-medium ${variants[variant as keyof typeof variants] || variants.default} ${sizes[size as keyof typeof sizes]}`}>
      {children}
    </span>
  );
};

const Button = ({ children, variant = 'primary', size = 'md', onClick }: { children: React.ReactNode; variant?: string; size?: string; onClick?: () => void }) => {
  const variants = {
    primary: 'bg-accent-blue text-white hover:bg-blue-600',
    secondary: 'bg-white text-primary border border-border hover:bg-gray-50'
  };

  const sizes = {
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg'
  };

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-[var(--radius-button)] font-semibold transition-all ${variants[variant as keyof typeof variants]} ${sizes[size as keyof typeof sizes]}`}
    >
      {children}
    </button>
  );
};

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <main className="bg-white text-primary">
      {/* Minimal Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-[var(--container)] mx-auto px-8 py-4 flex justify-between items-center">
          <Link href="/" className="font-serif font-semibold text-xl">
            Rachit Kumar
          </Link>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#work" className="hover:text-accent-blue transition-colors">Work</a>
            <a href="#about" className="hover:text-accent-blue transition-colors">About</a>
            <a href="#contact" className="hover:text-accent-blue transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero - Full Screen with Gradient */}
      <section ref={targetRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 animate-gradient" />

        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 max-w-[1100px] mx-auto px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Badge variant="green" size="lg">
              Available for Opportunities
            </Badge>
          </motion.div>

          <h1 className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.05] mb-6 tracking-tight">
            Building AI Products<br />That Actually Ship
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              20-year-old founder at <span className="text-accent-purple font-semibold">Veyu AI</span>.
              Ex-<span className="text-accent-blue font-semibold">Sarvam AI</span>.
              80K+ lines of production code. 1M+ daily API calls.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <a href="#work">
              <Button size="lg" variant="primary">View Work →</Button>
            </a>
            <a href="mailto:rachit@veyu.ai">
              <Button size="lg" variant="secondary">Get in Touch</Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
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
      <section id="work" className="py-24 px-8 bg-gray-50">
        <div className="max-w-[var(--container)] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="mb-4">
              <Badge variant="indigo">Selected Work</Badge>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-semibold mb-6 max-w-3xl">
              Products that shipped and scaled
            </h2>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Large Feature Card - Sarvam Platform */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 md:row-span-2"
            >
              <div className="h-full bg-gradient-to-br from-blue-500 to-purple-600 text-white p-10 rounded-[var(--radius-card)] shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
                <div className="mb-4">
                  <Badge variant="green">Production Scale</Badge>
                </div>
                <h3 className="font-serif text-4xl font-semibold mb-4">Sarvam Samvaad Platform</h3>
                <p className="text-lg text-white/90 mb-8 max-w-lg">
                  #1 contributor on India's leading AI platform. Built the dashboard serving 1M+ daily API calls.
                  58 commits, 44K+ lines of production code.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <span className="px-3 py-1.5 rounded-full bg-white/20 text-white border border-white/30 text-sm">
                    1M+ Daily Calls
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white/20 text-white border border-white/30 text-sm">
                    #1 Contributor
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Speed Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="h-full bg-white p-8 rounded-[var(--radius-card)] shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-border">
                <div className="mb-4">
                  <Badge variant="indigo">Execution Speed</Badge>
                </div>
                <h3 className="font-semibold text-2xl mb-2">LLM Chat UI</h3>
                <div className="text-4xl font-bold mb-1">500K+</div>
                <p className="text-sm text-muted mb-4">downloads first week</p>
                <p className="text-sm text-muted">
                  Built in 3 days under pressure. LaTeX, code formatting, feedback integration.
                </p>
              </div>
            </motion.div>

            {/* Solo Build Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-full bg-gradient-to-br from-green-400 to-emerald-600 text-white p-8 rounded-[var(--radius-card)] shadow-lg hover:scale-[1.02] transition-transform cursor-pointer">
                <div className="mb-4">
                  <Badge variant="green">Solo Build</Badge>
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-3">Dubbing Studio</h3>
                <p className="text-sm text-white/90 mb-6">
                  Built entirely alone. MVP in 2 weeks. Showcased to government officials.
                </p>
                <div className="text-4xl font-bold mb-1">2 weeks</div>
                <p className="text-sm text-white/90">MVP to Government Demo</p>
              </div>
            </motion.div>

            {/* Current Work Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2"
            >
              <div className="h-full bg-gradient-to-br from-orange-400 to-pink-500 text-white p-10 rounded-[var(--radius-card)] shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <Badge variant="orange">Currently Building</Badge>
                </div>
                <h3 className="font-serif text-4xl font-semibold mb-4">Veyu AI</h3>
                <p className="text-lg text-white/90 mb-6 max-w-xl">
                  Premium AI partner to businesses. Clients across India, Dubai, Saudi Arabia.
                  Target: $100K revenue by end of 2026.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Newton School', 'LexAI Labs', 'Dubai', 'Saudi Arabia'].map((client) => (
                    <span key={client} className="px-3 py-1.5 rounded-full bg-white/20 text-white border border-white/30 text-sm">
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* API Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="h-full bg-white p-8 rounded-[var(--radius-card)] shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-border">
                <div className="mb-4">
                  <Badge variant="indigo">Full Ownership</Badge>
                </div>
                <h3 className="font-semibold text-2xl mb-2">API Playgrounds</h3>
                <div className="text-4xl font-bold mb-1">6</div>
                <p className="text-sm text-muted mb-4">playgrounds built</p>
                <p className="text-sm text-muted">
                  Rebuilt entire dashboard. 6 AI playgrounds from scratch.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About - Asymmetric Layout */}
      <section id="about" className="py-24 px-8">
        <div className="max-w-[var(--container)] mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <Badge variant="indigo">About</Badge>
            </div>
            <h2 className="font-serif text-5xl font-semibold mb-8 leading-tight">
              From small-town UP to building AI for thousands
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-muted leading-relaxed">
                Grew up in Uttar Pradesh, discovered programming through Java in school,
                and found my way to building production systems serving millions.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                At <span className="text-primary font-semibold">Sarvam AI</span>, I was the only
                intern selected from my college. Shipped products serving 1M+ API calls daily,
                wrote 80K+ lines of production code, learned what it means to build at scale.
              </p>
              <p className="text-lg text-muted leading-relaxed">
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
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-[var(--radius-card)]">
              <h3 className="font-semibold text-lg mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Frontend', 'React/Next.js', 'AI Engineering', 'TypeScript', 'System Design'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-50 p-6 rounded-[var(--radius-card)] hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-indigo-600 mb-2">80K+</div>
                <p className="text-sm text-muted">Lines of Code</p>
              </div>
              <div className="bg-green-50 p-6 rounded-[var(--radius-card)] hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-green-600 mb-2">1M+</div>
                <p className="text-sm text-muted">Daily API Calls</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-[var(--radius-card)] hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-orange-600 mb-2">500K+</div>
                <p className="text-sm text-muted">Downloads</p>
              </div>
              <div className="bg-red-50 p-6 rounded-[var(--radius-card)] hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-red-600 mb-2">20</div>
                <p className="text-sm text-muted">Years Old</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact - Centered CTA */}
      <section id="contact" className="py-24 px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-semibold mb-6">
            Let's Build Something
          </h2>
          <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
            Open to collaborations, consulting, and conversations about AI, startups, and building the future.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:rachit@veyu.ai">
              <Button size="lg" variant="primary">rachit@veyu.ai →</Button>
            </a>
            <a href="https://linkedin.com/in/rachit-kumar" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary">LinkedIn</Button>
            </a>
            <a href="https://twitter.com/rachit" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary">Twitter</Button>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-border">
        <div className="max-w-[var(--container)] mx-auto flex justify-between items-center">
          <p className="text-sm text-muted">© 2026 Rachit Kumar</p>
          <p className="text-sm text-muted">Built with curiosity</p>
        </div>
      </footer>
    </main>
  );
}
