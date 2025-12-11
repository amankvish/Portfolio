"use client";

import styles from "../styles/Skills.module.css";

export default function Skills() {
  return (
    <main className={styles.container}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.gradientBlob}></div>
        <div className={styles.circuitPattern}></div>
        <div className={styles.floatingDots}></div>
      </div>

      {/* ===========================
          SKILLS SECTION
      ============================ */}
      <section id="skills" className={styles.skillsSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <span className={styles.badgeIcon}>⚡</span>
              Technical Stack
            </div>
            <h2 className={styles.sectionTitle}>
              Skills & <span className={styles.gradientText}>Technologies</span>
            </h2>
          </div>

          <div className={styles.skillsCompact}>
            {/* Core Development */}
            <div className={styles.skillGroup}>
              <div className={styles.groupHeader}>
                <div className={styles.groupIcon}>🚀</div>
                <h3>Core Development</h3>
              </div>
              <div className={styles.skillPills}>
                <span className={styles.skillPill}>Python</span>
                <span className={styles.skillPill}>JavaScript</span>
                <span className={styles.skillPill}>Django</span>
                <span className={styles.skillPill}>React</span>
                <span className={styles.skillPill}>Next.js</span>
                <span className={styles.skillPill}>Node.js</span>
                <span className={styles.skillPill}>Express</span>
              </div>
            </div>

            {/* Automation & AI */}
            <div className={styles.skillGroup}>
              <div className={styles.groupHeader}>
                <div className={styles.groupIcon}>🤖</div>
                <h3>Automation & AI</h3>
              </div>
              <div className={styles.skillPills}>
                <span className={styles.skillPill}>Zoho Flow</span>
                <span className={styles.skillPill}>Zoho CRM</span>
                <span className={styles.skillPill}>Zapier</span>
                <span className={styles.skillPill}>Make</span>
                <span className={styles.skillPill}>Celery</span>
                <span className={styles.skillPill}>OpenAI API</span>
                <span className={styles.skillPill}>Power Automate</span>
              </div>
            </div>

            {/* APIs & Integration */}
            <div className={styles.skillGroup}>
              <div className={styles.groupHeader}>
                <div className={styles.groupIcon}>🔌</div>
                <h3>APIs & Integration</h3>
              </div>
              <div className={styles.skillPills}>
                <span className={styles.skillPill}>REST APIs</span>
                <span className={styles.skillPill}>WhatsApp API</span>
                <span className={styles.skillPill}>Google Apps Script</span>
                <span className={styles.skillPill}>CRM Integration</span>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className={styles.skillGroup}>
              <div className={styles.groupHeader}>
                <div className={styles.groupIcon}>☁️</div>
                <h3>Cloud & DevOps</h3>
              </div>
              <div className={styles.skillPills}>
                <span className={styles.skillPill}>AWS</span>
                <span className={styles.skillPill}>Google Cloud</span>
                <span className={styles.skillPill}>Docker</span>
                <span className={styles.skillPill}>Git</span>
                <span className={styles.skillPill}>CI/CD</span>
                <span className={styles.skillPill}>Firebase</span>
              </div>
            </div>

            {/* Databases */}
            <div className={styles.skillGroup}>
              <div className={styles.groupHeader}>
                <div className={styles.groupIcon}>🗄️</div>
                <h3>Databases</h3>
              </div>
              <div className={styles.skillPills}>
                <span className={styles.skillPill}>PostgreSQL</span>
                <span className={styles.skillPill}>MongoDB</span>
                <span className={styles.skillPill}>SQL</span>
              </div>
            </div>

            {/* Testing & RPA */}
            <div className={styles.skillGroup}>
              <div className={styles.groupHeader}>
                <div className={styles.groupIcon}>⚙️</div>
                <h3>Tools & Platforms</h3>
              </div>
              <div className={styles.skillPills}>
                <span className={styles.skillPill}>GitHub</span>
                <span className={styles.skillPill}>Postman</span>
                <span className={styles.skillPill}>VS Code</span>
                <span className={styles.skillPill}>Anaconda</span>
                <span className={styles.skillPill}>WordPress</span>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className={styles.softSkillsCompact}>
            <div className={styles.softSkillsHeader}>
              <span className={styles.softSkillsIcon}>💫</span>
              <h3>Soft Skills</h3>
            </div>
            <div className={styles.softSkillsGrid}>
              <div className={styles.softSkill}>
                <div className={styles.skillDot}></div>Problem Solving
              </div>
              <div className={styles.softSkill}>
                <div className={styles.skillDot}></div>Communication
              </div>
              <div className={styles.softSkill}>
                <div className={styles.skillDot}></div>Collaboration
              </div>
              <div className={styles.softSkill}>
                <div className={styles.skillDot}></div>Process Optimization
              </div>
              <div className={styles.softSkill}>
                <div className={styles.skillDot}></div>Initiative
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================
          EXPERIENCE SECTION (UPDATED)
      ============================ */}
      <section id="experience" className={styles.experienceSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <span className={styles.badgeIcon}>🎯</span>
              Work Experience
            </div>
            <h2 className={styles.sectionTitle}>
              Professional <span className={styles.gradientText}>Journey</span>
            </h2>
          </div>

          <div className={styles.experienceCompact}>
            <div className={styles.roleCard}>
              <div className={styles.roleHeader}>
                <div className={styles.roleMain}>
                  <h3 className={styles.roleTitle}>
                    Associate L1 – Automation Engineer / Python Developer
                  </h3>
                  <p className={styles.company}>Astro Arun Pandit Pvt. Ltd.</p>
                  <div className={styles.roleMeta}>
                    <span className={styles.metaItem}>May 2024 – Present</span>
                    <span className={styles.metaItem}>📍 Onsite</span>
                    <span className={styles.metaItem}>Full-time</span>
                  </div>
                </div>
                <div className={styles.companyType}>
                  <span>🪐 Astrology Tech</span>
                </div>
              </div>

              {/* Achievements */}
              <div className={styles.achievementsGrid}>
                <div className={styles.achievement}>
                  <div className={styles.achievementIcon}>⚡</div>
                  <div className={styles.achievementContent}>
                    <h4>Automation Engineering</h4>
                    <p>
                      Lead workflows using Zoho Checkout + Zoho Flow + CRM +
                      WhatsApp API
                    </p>
                  </div>
                </div>

                <div className={styles.achievement}>
                  <div className={styles.achievementIcon}>🤖</div>
                  <div className={styles.achievementContent}>
                    <h4>Web Automation</h4>
                    <p>
                      Python & Selenium scripts for scraping, cleaning & syncing
                      leads
                    </p>
                  </div>
                </div>

                <div className={styles.achievement}>
                  <div className={styles.achievementIcon}>⏱️</div>
                  <div className={styles.achievementContent}>
                    <h4>Async Pipelines</h4>
                    <p>
                      Celery-based background tasks, notifications & schedulers
                    </p>
                  </div>
                </div>

                <div className={styles.achievement}>
                  <div className={styles.achievementIcon}>📊</div>
                  <div className={styles.achievementContent}>
                    <h4>Data Automation</h4>
                    <p>Zoho CRM → Google Sheets → Email API integrations</p>
                  </div>
                </div>

                <div className={styles.achievement}>
                  <div className={styles.achievementIcon}>💡</div>
                  <div className={styles.achievementContent}>
                    <h4>20+ Hours Saved</h4>
                    <p>Internal tools using Google Apps Script</p>
                  </div>
                </div>

                <div className={styles.achievement}>
                  <div className={styles.achievementIcon}>🌐</div>
                  <div className={styles.achievementContent}>
                    <h4>Frontend Development</h4>
                    <p>
                      Next.js-based Occult Gurukul website – UI/UX + performance
                      boost
                    </p>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className={styles.techStack}>
                <h4 className={styles.techStackTitle}>Tech Stack</h4>
                <div className={styles.techTags}>
                  <span className={styles.techTag}>Python</span>
                  <span className={styles.techTag}>Django</span>
                  <span className={styles.techTag}>Zoho CRM / Flow</span>
                  <span className={styles.techTag}>Celery</span>
                  <span className={styles.techTag}>OpenAI API</span>
                  <span className={styles.techTag}>WhatsApp API</span>
                  <span className={styles.techTag}>PostgreSQL</span>
                  <span className={styles.techTag}>JavaScript</span>
                  <span className={styles.techTag}>React</span>
                  <span className={styles.techTag}>Next.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
