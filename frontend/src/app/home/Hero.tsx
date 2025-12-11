"use client";

import React from "react";
import Image from "next/image";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  const resumeHref = "/resume.pdf";

  return (
    <main className={styles.container}>
      {/* Background Elements */}
      <div className={styles.backgroundElements} aria-hidden>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
        <div className={styles.gridPattern} />
      </div>

      {/* Main Content - Single Frame */}
      <section className={styles.heroSection} id="home">
        <div className={styles.heroContent}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            {/* Welcome Badge */}
            <div className={styles.badge}>
              <span className={styles.wave}>👋</span>
              <span>Hello!</span>
            </div>

            {/* Name & Title */}
            <h1 className={styles.name}>
              Aman <span className={styles.nameHighlight}>Vishwakarma</span>
            </h1>
            <div className={styles.titleWrapper}>
              <h2 className={styles.title}>Software Engineer</h2>
              <div className={styles.titleLine} />
            </div>

            {/* Tagline */}
            <div className={styles.tagline}>
              Building <span className={styles.highlight}>scalable</span> apps & 
              <span className={styles.highlight}> automation</span>
            </div>

            {/* Tech Stack */}
            <div className={styles.techStack}>
              {[
                { icon: "🐍", name: "Python" },
                { icon: "⚡", name: "Django" },
                { icon: "⚛️", name: "React" },
                { icon: "▲", name: "Next.js" },
                { icon: "☁️", name: "AWS" }
              ].map((tech) => (
                <div key={tech.name} className={styles.techPill}>
                  <span className={styles.techIcon}>{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className={styles.description}>
              I build scalable web applications and automation systems using modern 
              technologies — focused on reliability, performance, and user experience.
            </p>

            {/* CTA Buttons */}
            <div className={styles.actions}>
              <button
                className={styles.primaryBtn}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                aria-label="Explore my projects"
              >
                <span>Explore Work</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <a 
                className={styles.secondaryBtn} 
                href={resumeHref} 
                download
                aria-label="Download my resume"
              >
                <span>Download CV</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>1.5+</div>
                <div className={styles.statLabel}>Years</div>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>Projects</div>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <div className={styles.statNumber}>60%</div>
                <div className={styles.statLabel}>Efficiency</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className={styles.rightVisual}>
            <div className={styles.avatarCard}>
              {/* Pattern Background */}
              <div className={styles.cardPattern} />
              
              {/* Avatar Container */}
              <div className={styles.avatarWrapper}>
                {/* Pattern Frame */}
                <div className={styles.patternFrame} />
                
                {/* Avatar */}
                <div className={styles.avatarContainer}>
                  <div className={styles.avatarGlow} />
                  <Image
                    src="/img/amankvish.jpg"
                    alt="Aman Vishwakarma"
                    width={180}
                    height={180}
                    className={styles.avatar}
                    priority
                    quality={85}
                    sizes="(max-width: 768px) 140px, 180px"
                  />
                </div>
                
                {/* Tech Orbs */}
                <div className={styles.techOrb}>⚛️</div>
                <div className={styles.techOrb}>🐍</div>
                <div className={styles.techOrb}>🚀</div>
              </div>

              {/* Status */}
              <div className={styles.status}>
                <div className={styles.statusDot} />
                <span>Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}