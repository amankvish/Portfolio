"use client";

import styles from "../styles/Hero.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingOrb1}></div>
        <div className={styles.floatingOrb2}></div>
        <div className={styles.floatingOrb3}></div>
        <div className={styles.backgroundPattern}></div>
      </div>

      {/* ---------------- Hero Section ---------------- */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroGrid}>
            {/* Left Content */}
            <div className={styles.heroContent}>
              <div className={styles.heroIntro}>
                <div className={styles.heroBadge}>
                  <span className={styles.wave}>👋</span>
                  Hello, I&apos;m Aman
                </div>

                <h1 className={styles.heroTitle}>
                  <span className={styles.titleLine}>
                    Software{" "}
                    <span className={styles.gradientText}>Engineer</span>
                  </span>
                  <span className={styles.titleLine}>
                    & <span className={styles.highlight}>Full-Stack</span>{" "}
                    Developer
                  </span>
                </h1>

                <p className={styles.heroDescription}>
                  I build{" "}
                  <span className={styles.accent}>scalable applications</span>{" "}
                  and
                  <span className={styles.accent}>
                    {" "}
                    automation solutions
                  </span>{" "}
                  using modern technologies. Passionate about creating
                  efficient, user-friendly software.
                </p>
              </div>

              {/* Stats */}
              <div className={styles.statsContainer}>
                <div className={styles.statItem}>
                  <div className={styles.statCircle}>
                    <span className={styles.statNumber}>1+</span>
                  </div>
                  <span className={styles.statLabel}>Years Experience</span>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statCircle}>
                    <span className={styles.statNumber}>20+</span>
                  </div>
                  <span className={styles.statLabel}>Projects Completed</span>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statCircle}>
                    <span className={styles.statNumber}>60%</span>
                  </div>
                  <span className={styles.statLabel}>Efficiency Gain</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className={styles.heroActions}>
                <button className={styles.btnPrimary}>
                  <span>Explore My Work</span>
                  <div className={styles.btnIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
                <button className={styles.btnSecondary}>
                  <span>Download Resume</span>
                  <div className={styles.btnIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 10L12 15L17 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 15V3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div className={styles.heroVisual}>
              <div className={styles.visualContainer}>
                <div className={styles.avatarCard}>
                  <div className={styles.avatarGlow}></div>
                  <div className={styles.avatarMain}>
                    <div className={styles.avatarImage}>
                      <span className={styles.avatarText}>AK</span>
                    </div>
                  </div>

                  {/* Floating Tech Elements */}
                  <div className={styles.techBubbles}>
                    <div
                      className={styles.techBubble}
                      style={{ "--delay": "0s" } as React.CSSProperties}
                    >
                      <span>⚛️</span>
                    </div>
                    <div
                      className={styles.techBubble}
                      style={{ "--delay": "1s" } as React.CSSProperties}
                    >
                      <span>🐍</span>
                    </div>
                    <div
                      className={styles.techBubble}
                      style={{ "--delay": "2s" } as React.CSSProperties}
                    >
                      <span>🚀</span>
                    </div>
                    <div
                      className={styles.techBubble}
                      style={{ "--delay": "3s" } as React.CSSProperties}
                    >
                      <span>🔧</span>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className={styles.statusIndicator}>
                    <div className={styles.statusDot}></div>
                    <span>Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- About Me ---------------- */}
      <section id="about" className={styles.about}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            About <span className={styles.gradientText}>Me</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Passionate developer crafting digital solutions
          </p>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>
              I am a <strong>Junior Software Developer</strong> with 1 year of
              experience in developing scalable full-stack web applications,
              REST APIs, and business process automation solutions using Python,
              Django, React, and Zoho tools.
            </p>
            <p>
              I thrive on turning complex problems into simple, beautiful, and
              intuitive solutions using modern technologies.
            </p>
          </div>

          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>🚀</div>
              <div className={styles.highlightContent}>
                <h3>Fast Development</h3>
                <p>Quick prototyping and efficient code delivery</p>
              </div>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>🔧</div>
              <div className={styles.highlightContent}>
                <h3>Problem Solver</h3>
                <p>Analytical approach to complex challenges</p>
              </div>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>🔌</div>
              <div className={styles.highlightContent}>
                <h3>API Integration</h3>
                <p>Expert in third-party APIs & CRM platforms</p>
              </div>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>🤖</div>
              <div className={styles.highlightContent}>
                <h3>Automation</h3>
                <p>Led projects improving efficiency by 60%</p>
              </div>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>👥</div>
              <div className={styles.highlightContent}>
                <h3>Team Success</h3>
                <p>Focused on collaboration & attention to detail</p>
              </div>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>🌟</div>
              <div className={styles.highlightContent}>
                <h3>Quality Focus</h3>
                <p>Clean, maintainable, scalable code</p>
              </div>
            </div>
          </div>

          <div className={styles.codeSection}>
            <div className={styles.codeBlock}>
              <div className={styles.codeHeader}>
                <div className={styles.codeDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span>developer.py</span>
              </div>
              <pre className={styles.codeContent}>
                {`class SoftwareEngineer:
    def __init__(self):
        self.skills = ["Python", "React"]
        self.passion = "Building Solutions"

    def solve_problems(self):
        return "Elegant Code"`}
              </pre>
            </div>
            <p className={styles.codeCaption}>
              Nature Meets Tech — Blending natural inspiration with technical
              innovation
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- Education Journey ---------------- */}
      <section className={styles.education}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Education <span className={styles.gradientText}>Journey</span>
          </h2>
          <p className={styles.sectionSubtitle}>My academic background</p>
        </div>

        <div className={styles.educationGrid}>
          <div className={styles.educationCard}>
            <div className={styles.cardHeader}>
              <div className={styles.yearBadge}>2020–2024</div>
              <div className={styles.degreeIcon}>🎓</div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.degreeTitle}>
                B.Tech Computer Science (IoT)
              </h3>
              <p className={styles.institution}>NIET, Greater Noida</p>
              <div className={styles.score}>
                <span className={styles.scoreLabel}>CGPA:</span>
                <span className={styles.scoreValue}>
                  First Division with Honors
                </span>
              </div>
            </div>
            <div className={styles.cardGlow}></div>
          </div>

          <div className={styles.educationCard}>
            <div className={styles.cardHeader}>
              <div className={styles.yearBadge}>2020</div>
              <div className={styles.degreeIcon}>📚</div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.degreeTitle}>Senior Secondary</h3>
              <p className={styles.institution}>
                Sri Chaitanya Jr Kalasala, Hyderabad
              </p>
              <div className={styles.score}>
                <span className={styles.scoreLabel}>Percentage:</span>
                <span className={styles.scoreValue}>87.6%</span>
              </div>
            </div>
            <div className={styles.cardGlow}></div>
          </div>

          <div className={styles.educationCard}>
            <div className={styles.cardHeader}>
              <div className={styles.yearBadge}>2018</div>
              <div className={styles.degreeIcon}>🏫</div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.degreeTitle}>Matriculation</h3>
              <p className={styles.institution}>
                Sri Chaitanya High School, Hyderabad
              </p>
              <div className={styles.score}>
                <span className={styles.scoreLabel}>Percentage:</span>
                <span className={styles.scoreValue}>82.6%</span>
              </div>
            </div>
            <div className={styles.cardGlow}></div>
          </div>
        </div>
      </section>
    </main>
  );
}
