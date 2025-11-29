"use client";
import { useState } from "react";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("🎉 Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1500);
  };

  const contactChannels = [
    {
      icon: "📧",
      title: "Email",
      value: "amankvish2@outlook.com",
      href: "mailto:amankvish2@outlook.com",
      color: "#FF6B6B",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91 8869-948046",
      href: "tel:+918869948046",
      color: "#4ECDC4",
    },
    {
      icon: "💻",
      title: "GitHub",
      value: "@amankvish",
      href: "https://github.com/amankvish",
      external: true,
      color: "#45B7D1",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "/in/amankvish",
      href: "https://linkedin.com/in/amankvish",
      external: true,
      color: "#FFA07A",
    },
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        {/* Compact Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Let's Connect</h2>
          <p className={styles.subtitle}>
            Got a project? Let's make it happen!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className={styles.content}>
          {/* Contact Channels */}
          <div className={styles.channels}>
            <div className={styles.channelsGrid}>
              {contactChannels.map((channel, index) => (
                <a
                  key={index}
                  href={channel.href}
                  target={channel.external ? "_blank" : "_self"}
                  rel={channel.external ? "noopener noreferrer" : ""}
                  className={styles.channelCard}
                  style={
                    { "--accent-color": channel.color } as React.CSSProperties
                  }
                >
                  <div className={styles.channelIcon}>{channel.icon}</div>
                  <div className={styles.channelInfo}>
                    <span className={styles.channelTitle}>{channel.title}</span>
                    <span className={styles.channelValue}>{channel.value}</span>
                  </div>
                  <div className={styles.channelHover}></div>
                </a>
              ))}
            </div>

            {/* Quick Status */}
            <div className={styles.status}>
              <div className={styles.statusDot}></div>
              <span>Available for new projects</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formSection}>
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>Send a Message</h3>
              <div className={styles.formDecoration}></div>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={styles.input}
                  required
                />
                <div className={styles.inputFocus}></div>
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={styles.input}
                  required
                />
                <div className={styles.inputFocus}></div>
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion"
                  className={styles.input}
                  required
                />
                <div className={styles.inputFocus}></div>
              </div>

              <div className={styles.inputGroup}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={styles.textarea}
                  rows={4}
                  required
                ></textarea>
                <div className={styles.textareaFocus}></div>
              </div>

              <button
                type="submit"
                className={`${styles.submitBtn} ${
                  isSubmitting ? styles.loading : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className={styles.btnSpinner}></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span className={styles.btnArrow}>🚀</span>
                  </>
                )}
              </button>

              {submitMessage && (
                <div className={styles.message}>{submitMessage}</div>
              )}
            </form>
          </div>
        </div>

        {/* Quick CTA */}
        <div className={styles.cta}>
          <p>Let's create something amazing together!</p>
          <div className={styles.ctaOrnament}>✨</div>
        </div>
      </div>
    </section>
  );
}
