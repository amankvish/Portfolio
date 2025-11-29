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

      {/* Technical Skills Section */}
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
                <span className={styles.skillPill}>Zapier</span>
                <span className={styles.skillPill}>Make</span>
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
                <h3>Testing & RPA</h3>
              </div>
              <div className={styles.skillPills}>
                <span className={styles.skillPill}>Selenium</span>
                <span className={styles.skillPill}>Playwright</span>
                <span className={styles.skillPill}>UiPath</span>
                <span className={styles.skillPill}>Automation Anywhere</span>
              </div>
            </div>
          </div>

          {/* Soft Skills Compact */}
          <div className={styles.softSkillsCompact}>
            <div className={styles.softSkillsHeader}>
              <span className={styles.softSkillsIcon}>💫</span>
              <h3>Soft Skills</h3>
            </div>
            <div className={styles.softSkillsGrid}>
              <div className={styles.softSkill}>
                <div className={styles.skillDot}></div>
                Problem Solving
              </div>
              <div className={styles.softSkill}>
                <div className={styles.skillDot}></div>
                Communication
              </div>
              <div className={styles.softSkill}>
                <div className={styles.skillDot}></div>
                Collaboration
              </div>
              <div className={styles.softSkill}>
                <div className={styles.skillDot}></div>
                Process Optimization
              </div>
              <div className={styles.softSkill}>
                <div className={styles.skillDot}></div>
                Initiative
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
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
            {/* Main Role Card */}
            <div className={styles.roleCard}>
              <div className={styles.roleHeader}>
                <div className={styles.roleMain}>
                  <h3 className={styles.roleTitle}>
                    Automation Engineer / Python Developer
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

              {/* Key Achievements */}
              <div className={styles.achievementsGrid}>
                <div className={styles.achievement}>
                  <div className={styles.achievementIcon}>📈</div>
                  <div className={styles.achievementContent}>
                    <h4>65% Accuracy Boost</h4>
                    <p>
                      Lead management automation via Zoho Flow + WhatsApp API
                    </p>
                  </div>
                </div>
                <div className={styles.achievement}>
                  <div className={styles.achievementIcon}>⏱️</div>
                  <div className={styles.achievementContent}>
                    <h4>20+ Hours/Month Saved</h4>
                    <p>CRM automation with Google Apps Script</p>
                  </div>
                </div>
                <div className={styles.achievement}>
                  <div className={styles.achievementIcon}>🤖</div>
                  <div className={styles.achievementContent}>
                    <h4>AI Integration</h4>
                    <p>OpenAI chatbots for automated campaigns</p>
                  </div>
                </div>
                <div className={styles.achievement}>
                  <div className={styles.achievementIcon}>⚡</div>
                  <div className={styles.achievementContent}>
                    <h4>60% Faster Response</h4>
                    <p>Real-time communication with WhatsApp API</p>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className={styles.techStack}>
                <h4 className={styles.techStackTitle}>Tech Stack</h4>
                <div className={styles.techTags}>
                  <span className={styles.techTag}>Python</span>
                  <span className={styles.techTag}>Zoho CRM</span>
                  <span className={styles.techTag}>Zoho Flow</span>
                  <span className={styles.techTag}>Google Apps Script</span>
                  <span className={styles.techTag}>OpenAI API</span>
                  <span className={styles.techTag}>WhatsApp API</span>
                  <span className={styles.techTag}>PostgreSQL</span>
                  <span className={styles.techTag}>Selenium</span>
                </div>
              </div>
            </div>

            {/* Additional Highlights */}
            <div className={styles.highlightsCard}>
              <h3 className={styles.highlightsTitle}>Key Responsibilities</h3>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <div className={styles.highlightBullet}></div>
                  <span>
                    Designed automated lead workflows with 60% faster response
                    times
                  </span>
                </div>
                <div className={styles.highlightItem}>
                  <div className={styles.highlightBullet}></div>
                  <span>
                    Built real-time dashboards connecting Zoho CRM, Sheets, and
                    Email API
                  </span>
                </div>
                <div className={styles.highlightItem}>
                  <div className={styles.highlightBullet}></div>
                  <span>
                    Partnered with Sales and Marketing for system optimization
                  </span>
                </div>
                <div className={styles.highlightItem}>
                  <div className={styles.highlightBullet}></div>
                  <span>
                    Managed automated webinar follow-ups via email, SMS, and
                    WhatsApp
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
