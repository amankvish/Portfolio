"use client";

import styles from "../styles/About.module.css";

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
              <strong>Professional Summary</strong>
              <br />
              Software Developer with <strong>1.5+ years</strong> of experience in
              Python development, full-stack engineering, automation systems and
              API-driven integrations. Experienced building scalable backend
              services, automating multi-step workflows and creating responsive
              web applications using Django, React, Next.js and AWS.
            </p>

            <p>
              I focus on pragmatic solutions that reduce manual work, improve
              reliability and scale—leveraging Celery, Selenium, Zoho APIs and
              WhatsApp Business API to automate operations and integrate
              cross-platform systems.
            </p>
          </div>

          {/* Key Highlights */}
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>💡</div>
              <div className={styles.highlightContent}>
                <h3>Automation & Productivity</h3>
                <p>
                  Automated multi-step workflows using Zoho Flow + CRM +
                  WhatsApp API, improving productivity by ~65%.
                </p>
              </div>
            </div>

            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>🤖</div>
              <div className={styles.highlightContent}>
                <h3>Scripting & Integrations</h3>
                <p>
                  Built automation scripts combining Zoho CRM, Selenium, Python
                  and Google Apps Script for marketing operations.
                </p>
              </div>
            </div>

            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>⚡</div>
              <div className={styles.highlightContent}>
                <h3>Asynchronous Systems</h3>
                <p>
                  Implemented Celery-based background processing for
                  notifications and heavy data tasks to improve scalability.
                </p>
              </div>
            </div>

            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>🕒</div>
              <div className={styles.highlightContent}>
                <h3>Efficiency Gains</h3>
                <p>Designed internal CRM tools that saved 20+ hours/month of manual effort.</p>
              </div>
            </div>

            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>🌐</div>
              <div className={styles.highlightContent}>
                <h3>Web & Performance</h3>
                <p>
                  Maintained and optimized a Next.js-based platform (Occult Gurukul)
                  for better performance and SEO.
                </p>
              </div>
            </div>

            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>🧠</div>
              <div className={styles.highlightContent}>
                <h3>AI & NLP</h3>
                <p>
                  Implemented summarizers and sentiment systems that reduced lead
                  processing time by ~40%.
                </p>
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
{`class SoftwareDeveloper:
    def __init__(self):
        self.stack = ["Python","Django","React","Next.js"]
        self.focus = "Automation & scalable backend"

    def automate(self, workflow):
        return f"Automated {workflow} -> reduced manual effort"
`}
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

        <div className={styles.educationGrid}>
          <div className={styles.educationCard}>
            <div className={styles.cardHeader}>
              <div className={styles.yearBadge}>2020–2024</div>
              <div className={styles.degreeIcon}>🎓</div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.degreeTitle}>B.Tech Computer Science (IoT)</h3>
              <p className={styles.institution}>NIET, Greater Noida</p>
              <div className={styles.score}>
                <span className={styles.scoreLabel}>CGPA:</span>
                <span className={styles.scoreValue}>First Division with Honors</span>
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
              <p className={styles.institution}>Sri Chaitanya Jr Kalasala, Hyderabad</p>
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
              <p className={styles.institution}>Sri Chaitanya High School, Hyderabad</p>
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
