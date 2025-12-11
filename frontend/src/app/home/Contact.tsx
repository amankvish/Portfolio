"use client";

import React, { JSX } from "react";
import styles from "../styles/Contact.module.css";

/**
 * Contact.tsx
 * - Centered contact / channels section (NO profile card)
 * - Whatsapp entry uses wa.me (international no. without +)
 * - Place resume file at /public/resume.pdf or change resumeHref below
 */

export default function Contact(): JSX.Element {
  // Replace with your resume path if needed (e.g. "/resume.pdf" or an external URL)

  const contactChannels = [
    {
      icon: "📧",
      title: "Email",
      value: "amankvish2@outlook.com",
      href: "mailto:amankvish2@outlook.com",
      color: "#FF6B6B",
      external: false,
    },
    {
      icon: "💬",
      title: "Call or WhatsApp",
      value: "+91 8869 948046",
      // international format without + (India example)
      href: "https://wa.me/918869948046?text=Hi%20Aman%2C%20I%27d%20like%20to%20discuss%20a%20project",
      color: "#25D366",
      external: true,
    },
    {
      icon: "💻",
      title: "GitHub",
      value: "@amankvish",
      href: "https://github.com/amankvish",
      color: "#45B7D1",
      external: true,
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Aman Vishwakarma",
      href: "https://linkedin.com/in/amankvish",
      color: "#0077B5",
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className={styles.contact}
      aria-labelledby="contact-heading"
    >
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <h2 id="contact-heading" className={styles.title}>
            Let&apos;s Connect
          </h2>
          <p className={styles.subtitle}>
            Have an idea or a project? I’ll help you build it—fast & reliable.
          </p>
        </header>

        {/* Centered channel grid + resume CTA */}
        <div className={styles.centerPanel}>
          {/* Channels grid */}
          <div
            className={styles.channelsGrid}
            role="list"
            aria-label="Contact channels"
          >
            {contactChannels.map((ch, idx) => (
              <a
                key={idx}
                role="listitem"
                className={styles.channelCard}
                href={ch.href}
                target={ch.external ? "_blank" : "_self"}
                rel={ch.external ? "noopener noreferrer" : undefined}
                style={
                  {
                    "--accent-color": ch.color,
                  } as React.CSSProperties
                }
              >
                <div className={styles.channelIcon} aria-hidden>
                  {ch.icon}
                </div>

                <div className={styles.channelInfo}>
                  <span className={styles.channelTitle}>{ch.title}</span>
                  <span className={styles.channelValue}>{ch.value}</span>
                </div>

                <div className={styles.channelHover} aria-hidden />
              </a>
            ))}
          </div>

          {/* Resume call-to-action (centered under cards) */}

          {/* <div className={styles.resumeRow}>
            <a
              className={styles.resumeBtn}
              href={resumeHref}
              download
              aria-label="Download resume"
            >
              Download resume
            </a>
            <button
              className={styles.messageBtn}
              onClick={() =>
                window.open(
                  "https://wa.me/918869948046?text=Hi%20Aman%2C%20I%27d%20like%20to%20discuss%20a%20project",
                  "_blank"
                )
              }
              aria-label="Message on WhatsApp"
            >
              Message on WhatsApp
            </button>
          </div> */}

          {/* Availability */}
          <div className={styles.status}>
            <div className={styles.statusDot} />
            <span>Available for new projects</span>
          </div>
        </div>

        {/* CTA footer */}
        <div className={styles.cta}>
          <p>Let&apos;s create something amazing together ✨</p>
        </div>
      </div>
    </section>
  );
}
