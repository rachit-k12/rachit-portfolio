'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <main className="bg-secondary text-primary min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-md border-b border-border">
        <div className="max-w-container mx-auto px-8 py-5 flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold tracking-tight hover:text-accent transition-colors">
            Rachit Kumar
          </Link>
          <div className="flex gap-10 text-sm font-medium">
            <a href="#about" className="text-muted hover:text-primary transition-colors">
              About
            </a>
            <a href="#experience" className="text-muted hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#work" className="text-muted hover:text-primary transition-colors">
              Work
            </a>
            <a href="#contact" className="px-5 py-2 bg-primary text-white rounded-button hover:bg-primary/90 transition-all">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 pt-24">
        <div className="max-w-container mx-auto w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            variants={fadeIn}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-8"
            >
              Available for opportunities
            </motion.div>
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] mb-6 tracking-tight">
              AI Founder & Developer building products that{' '}
              <span className="text-accent">actually ship</span>
            </h1>
            <p className="text-xl text-muted max-w-2xl mb-10 leading-relaxed">
              20-year-old founder at Veyu AI. Previously built production systems at Sarvam AI
              serving 1M+ daily API calls. Small-town UP to building the future.
            </p>
            <div className="flex gap-4">
              <a
                href="#work"
                className="px-7 py-3.5 bg-primary text-white rounded-button font-medium hover:bg-primary/90 transition-all hover:shadow-lg"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 border-2 border-border rounded-button font-medium hover:border-primary transition-all"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-8 bg-white">
        <div className="max-w-container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            variants={fadeIn}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 max-w-3xl leading-tight">
              From small-town UP to building AI products used by thousands
            </h2>
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div className="space-y-6 text-lg text-muted leading-relaxed">
                <p>
                  I'm a 20-year-old founder building{' '}
                  <a
                    href="https://veyu.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-medium hover:underline"
                  >
                    Veyu AI
                  </a>
                  {' '}— a premium AI partner to businesses. Grew up in Uttar Pradesh,
                  discovered programming through Java in school, and found my way to building
                  production systems serving millions.
                </p>
                <p>
                  Previously at <span className="text-primary font-medium">Sarvam AI</span> (India's
                  sovereign AI company, ~$1.5B valuation), where I was the only intern selected from
                  my college. Built products serving <span className="font-semibold">1M+ API calls
                  daily</span>, shipped <span className="font-semibold">80,000+ lines of production
                  code</span>.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-primary mb-3">Currently</h3>
                  <p className="text-muted">
                    Building Veyu AI to $100K revenue by end of 2026. Clients across India, Dubai,
                    and Saudi Arabia.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Frontend', 'React/Next.js', 'AI Engineering', 'System Design', 'TypeScript'].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-secondary text-sm font-medium rounded-button"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-8">
        <div className="max-w-container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            variants={fadeIn}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
              Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-16">Where I've Built</h2>

            {/* Veyu AI */}
            <div className="mb-16 pb-16 border-b border-border">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Veyu AI</h3>
                  <p className="text-muted font-medium">Co-founder · Network, Design, Frontend</p>
                </div>
                <span className="px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-button">
                  2026 — Present
                </span>
              </div>
              <p className="text-lg text-muted mb-6 max-w-3xl">
                Building a premium AI partner for businesses. Services across AI agents,
                automation, full-stack development, and design.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-muted">Target: First $100K revenue by end of 2026</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-muted">Team: 3 co-founders (frontend, backend/AI, marketing)</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-muted">Clients: Newton School, LexAI Labs, Dubai, Gurgaon, Saudi Arabia</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-muted">Philosophy: "If the partner grows, Veyu grows"</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sarvam AI */}
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Sarvam AI</h3>
                  <p className="text-muted font-medium">Software Engineer Intern · Frontend</p>
                </div>
                <span className="px-4 py-1.5 bg-gray-100 text-muted text-sm font-semibold rounded-button">
                  Jan 2025 — Sep 2025
                </span>
              </div>
              <p className="text-lg text-muted mb-6 max-w-3xl">
                India's leading sovereign AI company (~$1.5B valuation). Only intern selected
                from my college. This was my turning point.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { metric: '80,000+', label: 'Lines of production code' },
                  { metric: '500K+', label: 'Downloads in first week (LLM Chat UI)' },
                  { metric: '1M+', label: 'Daily API calls (Samvaad Platform)' },
                  { metric: '6', label: 'AI playgrounds built' },
                  { metric: '2 weeks', label: 'Dubbing Studio MVP (solo build)' },
                  { metric: '#1', label: 'Contributor on main platform' },
                ].map((item) => (
                  <div key={item.label} className="p-5 bg-white rounded-card border border-border hover:shadow-md transition-shadow">
                    <div className="text-3xl font-bold text-accent mb-2">{item.metric}</div>
                    <div className="text-sm text-muted">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 px-8 bg-white">
        <div className="max-w-container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            variants={fadeIn}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
              Selected Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-16">Projects That Shipped</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Sarvam Projects */}
              {[
                {
                  label: 'Production',
                  title: 'Sarvam Samvaad Platform',
                  description:
                    '#1 contributor. 58 commits, 44K+ lines of code. Platform serving 1M+ API calls daily.',
                  impact: '1M+ daily API calls',
                  color: 'bg-blue-50 border-blue-200',
                },
                {
                  label: 'Speed',
                  title: 'LLM Chat UI',
                  description:
                    'Built in 3 days under pressure. LaTeX/code formatting, feedback integration, thinking indicators.',
                  impact: '500K downloads in first week',
                  color: 'bg-purple-50 border-purple-200',
                },
                {
                  label: 'Solo Build',
                  title: 'Dubbing Studio',
                  description:
                    'Built entirely alone. MVP shipped in 2 weeks. Showcased to government officials.',
                  impact: 'Government demo',
                  color: 'bg-green-50 border-green-200',
                },
                {
                  label: 'Ownership',
                  title: 'API Dashboard & Playgrounds',
                  description:
                    'Rebuilt entire structure. 6 AI playgrounds: TTS, STT, Translate, Transliterate, Language ID.',
                  impact: 'Full rebuild',
                  color: 'bg-orange-50 border-orange-200',
                },
              ].map((project) => (
                <div
                  key={project.title}
                  className={`border-2 ${project.color} rounded-card p-7 hover:shadow-lg transition-all group cursor-pointer`}
                >
                  <span className="text-xs font-bold text-accent uppercase tracking-wider mb-3 block">
                    {project.label}
                  </span>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted mb-4 leading-relaxed text-[15px]">{project.description}</p>
                  <span className="text-sm font-semibold text-primary">{project.impact}</span>
                </div>
              ))}
            </div>

            {/* Veyu Work */}
            <div className="mt-8 border-2 border-accent/20 bg-accent/5 rounded-card p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                <span className="text-xs font-bold text-accent uppercase tracking-wider">Current</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Veyu AI — Client Work</h3>
              <p className="text-muted mb-6 leading-relaxed max-w-2xl">
                Premium AI partner to businesses. Building AI agents, automation workflows,
                full-stack products, and design systems for clients across India, Dubai, and
                Saudi Arabia.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Newton School',
                  'LexAI Labs',
                  'Mstack',
                  'Dubai Clients',
                  'Alat (Saudi Arabia)',
                ].map((client) => (
                  <span
                    key={client}
                    className="text-sm px-4 py-2 bg-white border border-border rounded-button font-medium"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8">
        <div className="max-w-container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
              Open to collaborations, consulting, and conversations about AI, startups, and
              building the future.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="mailto:rachit@veyu.ai"
                className="px-8 py-4 bg-primary text-white rounded-button font-medium hover:bg-primary/90 transition-all hover:shadow-lg inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                rachit@veyu.ai
              </a>
              <a
                href="https://linkedin.com/in/rachit-kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-border rounded-button font-medium hover:border-primary transition-all inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://twitter.com/rachit"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-border rounded-button font-medium hover:border-primary transition-all inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Twitter
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-8 bg-white">
        <div className="max-w-container mx-auto flex justify-between items-center text-sm text-muted">
          <p>© 2026 Rachit Kumar. Built with curiosity.</p>
          <p className="text-xs">Designed & Developed with Claude Code</p>
        </div>
      </footer>
    </main>
  );
}
