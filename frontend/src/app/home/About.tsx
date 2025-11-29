export default function About() {
    return (
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Junior Software Developer with 1+ year experience in full-stack development and automation.</p>
              <div className="highlight-cards">
                <div className="highlight-card">
                  <i className="fas fa-bolt"></i>
                  <h3>Automation</h3>
                  <p>60% efficiency gains</p>
                </div>
                <div className="highlight-card">
                  <i className="fas fa-plug"></i>
                  <h3>API Integration</h3>
                  <p>Zoho, WhatsApp, CRM</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              {/* <img src="/img/about.jpg" alt="About" className="about-img" /> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
  