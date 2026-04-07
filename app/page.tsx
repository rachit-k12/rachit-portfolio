'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-black/80 backdrop-blur-sm">
        <div className="max-w-container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-lg font-semibold">
            RK
          </Link>
          <div className="flex gap-8">
            <a href="#about" className="text-muted hover:text-white transition-colors">
              About
            </a>
            <a href="#experience" className="text-muted hover:text-white transition-colors">
              Experience
            </a>
            <a href="#work" className="text-muted hover:text-white transition-colors">
              Work
            </a>
            <a href="#contact" className="text-muted hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-container mx-auto w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            variants={fadeIn}
          >
            <p className="text-muted mb-4">Hey, I'm</p>
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.1] mb-6">
              Rachit Kumar
            </h1>
            <p className="text-[clamp(1.5rem,3vw,2.5rem)] text-muted max-w-3xl mb-12">
              Building AI that businesses actually use
            </p>
            <div className="flex gap-4">
              <a
                href="#work"
                className="px-6 py-3 bg-white text-black rounded-button font-medium hover:bg-white/90 transition-colors"
              >
                See My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-border rounded-button font-medium hover:border-white transition-colors"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
          >
            <h2 className="text-5xl font-bold mb-12">About</h2>
            <div className="max-w-3xl space-y-6 text-lg text-muted leading-relaxed">
              <p>
                20-year-old founder building{' '}
                <a
                  href="https://veyu.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline decoration-border hover:decoration-white transition-colors"
                >
                  Veyu AI
                </a>
                 — a premium AI partner to businesses. I grew up in small-town Uttar Pradesh,
                discovered programming through Java in school, and found my way to building
                production systems that serve millions.
              </p>
              <p>
                Previously at{' '}
                <span className="text-white">Sarvam AI</span> (India's sovereign AI company,
                ~$1.5B valuation), where I was the only intern selected from my college. Built
                products serving 1M+ API calls daily, shipped{' '}
                <span className="text-white">80,000+ lines of production code</span>, and learned
                what it means to build at scale.
              </p>
              <p>
                I'm strongest in frontend and design — every line of production code I've shipped
                has been frontend. Currently building AI engineering skills (agents, chains,
                orchestration) while scaling Veyu to our first $100K by end of 2026.
              </p>
              <div className="flex flex-wrap gap-3 pt-6">
                {['AI Engineering', 'Frontend Design', 'Full-Stack Development', 'Entrepreneurship'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 border border-border rounded-button text-sm"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 border-t border-border">
        <div className="max-w-container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
          >
            <h2 className="text-5xl font-bold mb-16">Experience</h2>

            {/* Veyu AI */}
            <div className="mb-20">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold">Veyu AI</h3>
                  <p className="text-muted">Co-founder · Network, Design, Frontend</p>
                </div>
                <p className="text-muted">2026 — Present</p>
              </div>
              <div className="space-y-4 text-muted">
                <p>
                  Building a premium AI partner for businesses. Services across AI agents,
                  automation, full-stack development, and design.
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Target: First $100K revenue by end of 2026</li>
                  <li>
                    Clients: Newton School, LexAI Labs, Mstack, and businesses across Dubai,
                    Gurgaon, and Saudi Arabia
                  </li>
                  <li>
                    Team: 3 co-founders (frontend, backend/AI, marketing)
                  </li>
                  <li>Philosophy: "If the partner grows, Veyu grows"</li>
                </ul>
              </div>
            </div>

            {/* Sarvam AI */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold">Sarvam AI</h3>
                  <p className="text-muted">Software Engineer Intern · Frontend</p>
                </div>
                <p className="text-muted">Jan 2025 — Sep 2025</p>
              </div>
              <div className="space-y-4 text-muted">
                <p>
                  India's leading sovereign AI company (~$1.5B valuation). Only intern selected
                  from my college. This was my turning point.
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    <span className="text-white">80,000+ lines of production code</span> —
                    #1 contributor on main platform (58 commits, 44K+ lines)
                  </li>
                  <li>
                    Built <span className="text-white">LLM Chat UI</span> in 3 days under
                    pressure → <span className="text-white">500K+ downloads</span> in a week
                  </li>
                  <li>
                    Solo-built <span className="text-white">Dubbing Studio</span> MVP in 2
                    weeks, showcased to government officials
                  </li>
                  <li>
                    Rebuilt entire API Dashboard & Playgrounds structure — 6 AI playgrounds,
                    full ownership
                  </li>
                  <li>
                    Sarvam Samvaad Platform serving <span className="text-white">1M+ API
                    calls daily</span>
                  </li>
                  <li>Integrated MixPanel analytics, PostHog, Wiki Grounding Feature</li>
                  <li>Worked on 2 teams simultaneously</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-6 border-t border-border">
        <div className="max-w-container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
          >
            <h2 className="text-5xl font-bold mb-16">Selected Work</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Sarvam Projects */}
              {[
                {
                  label: 'Production',
                  title: 'Sarvam Samvaad Platform',
                  description:
                    '#1 contributor. 58 commits, 44K+ lines of code. Platform serving 1M+ API calls daily.',
                  impact: '1M+ daily API calls',
                },
                {
                  label: 'Speed',
                  title: 'LLM Chat UI',
                  description:
                    'Built in 3 days under pressure. LaTeX/code formatting, feedback integration, thinking indicators.',
                  impact: '500K downloads in first week',
                },
                {
                  label: 'Solo Build',
                  title: 'Dubbing Studio',
                  description:
                    'Built entirely alone. MVP shipped in 2 weeks. Showcased to government officials.',
                  impact: 'Government demo',
                },
                {
                  label: 'Ownership',
                  title: 'API Dashboard & Playgrounds',
                  description:
                    'Rebuilt entire structure. 6 AI playgrounds: TTS, STT, Translate, Transliterate, Language ID.',
                  impact: 'Full rebuild',
                },
              ].map((project) => (
                <div
                  key={project.title}
                  className="border border-border rounded-card p-8 hover:border-white transition-colors group cursor-pointer"
                >
                  <span className="text-sm text-muted mb-2 block">{project.label}</span>
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted mb-4 leading-relaxed">{project.description}</p>
                  <span className="text-sm text-white">{project.impact}</span>
                </div>
              ))}
            </div>

            {/* Veyu Work */}
            <div className="mt-8 border border-border rounded-card p-8">
              <span className="text-sm text-muted mb-2 block">Current</span>
              <h3 className="text-2xl font-semibold mb-4">Veyu AI — Client Work</h3>
              <p className="text-muted mb-4 leading-relaxed">
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
                    className="text-sm px-3 py-1 border border-border rounded-button"
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
      <section id="contact" className="py-32 px-6 border-t border-border">
        <div className="max-w-container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
          >
            <h2 className="text-5xl font-bold mb-12">Let's Build Something</h2>
            <p className="text-2xl text-muted max-w-2xl mb-12 leading-relaxed">
              Open to collaborations, consulting, and conversations about AI, startups, and
              building the future.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:rachit@veyu.ai"
                className="px-6 py-3 bg-white text-black rounded-button font-medium hover:bg-white/90 transition-colors"
              >
                rachit@veyu.ai
              </a>
              <a
                href="https://linkedin.com/in/rachit-kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-border rounded-button font-medium hover:border-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/rachit"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-border rounded-button font-medium hover:border-white transition-colors"
              >
                Twitter
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-container mx-auto text-center text-muted">
          <p>© 2026 Rachit Kumar. Built with curiosity.</p>
        </div>
      </footer>
    </main>
  );
}
