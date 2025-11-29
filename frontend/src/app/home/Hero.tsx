'use client';

import styles from "./Hero.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingOrb1}></div>
        <div className={styles.floatingOrb2}></div>
        <div className={styles.floatingOrb3}></div>
      </div>

      {/* ---------------- Hero Section ---------------- */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.wave}>👋</span>
            Hello, I'm Aman
          </div>

          <h1 className={styles.heroTitle}>
            Software <span className={styles.gradientText}>Engineer</span> &
            <br />
            <span className={styles.highlight}>Full-Stack</span> Developer
          </h1>

          <p className={styles.heroDescription}>
            I build <span className={styles.accent}>scalable applications</span> and
            <span className={styles.accent}> automation solutions</span> using 
            modern technologies. Passionate about creating efficient, user-friendly software.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>1+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>20+</div>
              <div className={styles.statLabel}>Projects Completed</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>60%</div>
              <div className={styles.statLabel}>Efficiency Gain</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>5+</div>
              <div className={styles.statLabel}>Technologies</div>
            </div>
          </div>

          <div className={styles.heroButtons}>
            <button className={styles.btnPrimary}>
              <span>Explore My Work</span>
              <div className={styles.btnArrow}>→</div>
            </button>
            <button className={styles.btnSecondary}>
              <span>Download Resume</span>
              <div className={styles.downloadIcon}>📄</div>
            </button>
          </div>
        </div>

        {/* Visual Element */}
        <div className={styles.heroVisual}>
          <div className={styles.profileCard}>
            <div className={styles.profileImage}>
              <div className={styles.imageGlow}></div>
              <div className={styles.avatar}>AK</div>
            </div>
            <div className={styles.floatingElements}>
              <div className={styles.floatingElement}>⚛️</div>
              <div className={styles.floatingElement}>🐍</div>
              <div className={styles.floatingElement}>🚀</div>
              <div className={styles.floatingElement}>🔧</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- About Me ---------------- */}
      <section className={styles.about}>
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
              I am a <strong>Junior Software Developer</strong> with 1 year of experience in 
              developing scalable full-stack web applications, REST APIs, and business process 
              automation solutions using Python, Django, React, and Zoho tools.
            </p>
            <p>
              I thrive on turning complex problems into simple, beautiful, and intuitive 
              solutions using modern technologies.
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
              Nature Meets Tech — Blending natural inspiration with technical innovation
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

        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelinePeriod}>2020–2024</div>
              <h3 className={styles.timelineTitle}>B.Tech Computer Science (IoT)</h3>
              <p className={styles.timelineInstitution}>NIET, Greater Noida</p>
              <div className={styles.timelineScore}>CGPA: 7.90</div>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelinePeriod}>2020</div>
              <h3 className={styles.timelineTitle}>Senior Secondary</h3>
              <p className={styles.timelineInstitution}>Sri Chaitanya Jr Kalasala, Hyderabad</p>
              <div className={styles.timelineScore}>87.6%</div>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelinePeriod}>2018</div>
              <h3 className={styles.timelineTitle}>Matriculation</h3>
              <p className={styles.timelineInstitution}>Sri Chaitanya High School, Hyderabad</p>
              <div className={styles.timelineScore}>82.6%</div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}