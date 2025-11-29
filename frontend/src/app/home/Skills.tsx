export default function Skills() {
    return (
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-content">
            <div className="skills-categories">
              <div className="category active" data-category="languages">
                <i className="fas fa-code"></i> Languages
              </div>
              <div className="category" data-category="frameworks">
                <i className="fas fa-layer-group"></i> Frameworks
              </div>
            </div>
            <div className="skills-list">
              <div className="skill-items languages active">
                <div className="skill-item">
                  <div className="skill-info">
                    <span>Python</span><span>90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  