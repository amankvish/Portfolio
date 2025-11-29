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
                  <h3>AI Business Automation Suite</h3>
                  <div className={styles.techStack}>
                    <span>Zoho Flow</span>
                    <span>WhatsApp API</span>
                    <span>OpenAI</span>
                  </div>
                </div>
              </div>
              <p className={styles.projectDesc}>
                Intelligent lead alerts & CRM automation. Managed 250+
                alerts/day, reduced manual work by 55%.
              </p>
              <div className={styles.projectMetrics}>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>250+</span>
                  <span className={styles.metricLabel}>Alerts/Day</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>55%</span>
                  <span className={styles.metricLabel}>Efficiency</span>
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
                OpenAI GPT integration for FAQs & webinar responses. Improved
                lead response rate by 45%.
              </p>
              <div className={styles.projectMetrics}>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>45%</span>
                  <span className={styles.metricLabel}>Response Rate</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>24/7</span>
                  <span className={styles.metricLabel}>Availability</span>
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
                    <span>Python ML</span>
                    <span>XGBoost</span>
                  </div>
                </div>
              </div>
              <p className={styles.projectDesc}>
                Real-time AQI monitoring with ML predictions and data
                visualization dashboard.
              </p>
              <div className={styles.projectMetrics}>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>Real-time</span>
                  <span className={styles.metricLabel}>Monitoring</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>ML</span>
                  <span className={styles.metricLabel}>Powered</span>
                </div>
              </div>
              <button className={styles.viewBtn}>View Details →</button>
            </div>

            {/* Project 4 */}
            <div className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <div className={styles.projectIcon}>🎬</div>
                <div className={styles.projectInfo}>
                  <h3>Movie Recommendation System</h3>
                  <div className={styles.techStack}>
                    <span>Streamlit</span>
                    <span>Python ML</span>
                    <span>Pickle</span>
                  </div>
                </div>
              </div>
              <p className={styles.projectDesc}>
                Hybrid recommendation engine with interactive UI for
                content-based filtering.
              </p>
              <div className={styles.projectMetrics}>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>Hybrid</span>
                  <span className={styles.metricLabel}>Algorithm</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>Interactive</span>
                  <span className={styles.metricLabel}>UI</span>
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
                Full-stack eCommerce with cart, auth, and analytics. REST API
                integration.
              </p>
              <div className={styles.projectMetrics}>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>Full-stack</span>
                  <span className={styles.metricLabel}>Development</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>E-commerce</span>
                  <span className={styles.metricLabel}>Platform</span>
                </div>
              </div>
              <button className={styles.viewBtn}>View Details →</button>
            </div>

            {/* Project 6 */}
            <div className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <div className={styles.projectIcon}>⚡</div>
                <div className={styles.projectInfo}>
                  <h3>Advanced Weather Station</h3>
                  <div className={styles.techStack}>
                    <span>IoT</span>
                    <span>Python</span>
                    <span>ML Models</span>
                  </div>
                </div>
              </div>
              <p className={styles.projectDesc}>
                IoT-based AQI monitoring with XGBoost, SVM models and real-time
                dashboards.
              </p>
              <div className={styles.projectMetrics}>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>ML Models</span>
                  <span className={styles.metricLabel}>XGBoost/SVM</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>Real-time</span>
                  <span className={styles.metricLabel}>Dashboard</span>
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
