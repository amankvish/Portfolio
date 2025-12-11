"use client";

import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <main className={styles.container}>
      <div className={styles.backgroundElements}>
        <div className={styles.gradientOrb}></div>
        <div className={styles.gridPattern}></div>
      </div>

      <section id="projects" className={styles.projectsSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>🚀 Projects</div>
            <h2 className={styles.sectionTitle}>
              My <span className={styles.gradientText}>Work</span>
            </h2>
          </div>

          <div className={styles.projectsGrid}>
            {/* Project 1 */}
            <div className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <div className={styles.projectIcon}>🔧</div>
                <div className={styles.projectInfo}>
                  <h3>Business Automation Suite</h3>
                  <div className={styles.techStack}>
                    <span>Zoho Flow</span>
                    <span>WhatsApp API</span>
                    <span>OpenAI</span>
                  </div>
                </div>
              </div>

              <p className={styles.projectDesc}>
                Built an automation platform for lead handling and CRM updates
                with AI-driven sentiment replies. Scaled to 250+ triggers/day
                and reduced manual effort by ~55%.
              </p>

              <div className={styles.projectMetrics}>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>250+</span>
                  <span className={styles.metricLabel}>triggers/day</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>55%</span>
                  <span className={styles.metricLabel}>manual reduction</span>
                </div>
              </div>

              <button className={styles.viewBtn}>View Details →</button>
            </div>

            {/* Project 5 */}
            <div className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <div className={styles.projectIcon}>📚</div>
                <div className={styles.projectInfo}>
                  <h3>Online Book Store</h3>
                  <div className={styles.techStack}>
                    <span>Django</span>
                    <span>React</span>
                    <span>PostgreSQL</span>
                  </div>
                </div>
              </div>

              <p className={styles.projectDesc}>
                Full-stack eCommerce platform with JWT auth, cart & order flows,
                admin dashboard and secure REST APIs.
              </p>

              <div className={styles.projectMetrics}>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>Full-stack</span>
                  <span className={styles.metricLabel}>development</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>Secure</span>
                  <span className={styles.metricLabel}>API design</span>
                </div>
              </div>

              <button className={styles.viewBtn}>View Details →</button>
            </div>

            {/* Project 3 */}
            <div className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <div className={styles.projectIcon}>🌍</div>
                <div className={styles.projectInfo}>
                  <h3>Weather & AQI IoT System</h3>
                  <div className={styles.techStack}>
                    <span>IoT</span>
                    <span>Python</span>
                    <span>XGBoost</span>
                  </div>
                </div>
              </div>

              <p className={styles.projectDesc}>
                End-to-end IoT solution for AQI monitoring: sensor ingestion, ML
                models (XGBoost / SVM / RF) and real-time dashboards for web and
                mobile.
              </p>

              <div className={styles.projectMetrics}>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>Real-time</span>
                  <span className={styles.metricLabel}>monitoring</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>ML</span>
                  <span className={styles.metricLabel}>predictions</span>
                </div>
              </div>

              <button className={styles.viewBtn}>View Details →</button>
            </div>

            {/* Project 4 */}
            <div className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <div className={styles.projectIcon}>⚡</div>
                <div className={styles.projectInfo}>
                  <h3>EVsol — EV Charging Locator</h3>
                  <div className={styles.techStack}>
                    <span>Java</span>
                    <span>Google Maps API</span>
                    <span>Android</span>
                  </div>
                </div>
              </div>

              <p className={styles.projectDesc}>
                Android app to discover nearby EV chargers, provide navigation
                and optimized routing. Built with Google Maps integration (Feb
                2023 – May 2023).
              </p>

              <div className={styles.projectMetrics}>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>Routing</span>
                  <span className={styles.metricLabel}>optimizations</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>Live</span>
                  <span className={styles.metricLabel}>charger status</span>
                </div>
              </div>

              <button className={styles.viewBtn}>View Details →</button>
            </div>

            {/* Project 2 */}
            <div className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <div className={styles.projectIcon}>💬</div>
                <div className={styles.projectInfo}>
                  <h3>Smart Chat Automation Bot</h3>
                  <div className={styles.techStack}>
                    <span>Python</span>
                    <span>FastAPI</span>
                    <span>LangChain</span>
                  </div>
                </div>
              </div>

              <p className={styles.projectDesc}>
                Integrated GPT-based assistants for FAQs and webinar follow-ups.
                Improved lead response and maintained round-the-clock
                availability.
              </p>

              <div className={styles.projectMetrics}>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>45%</span>
                  <span className={styles.metricLabel}>improved replies</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>24/7</span>
                  <span className={styles.metricLabel}>availability</span>
                </div>
              </div>

              <button className={styles.viewBtn}>View Details →</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
