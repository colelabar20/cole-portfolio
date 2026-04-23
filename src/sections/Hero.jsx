export default function Hero() {
  return (
    <section id="hero">
      <p className="hero-tag">
        Physics Student • Embedded Systems • Software
      </p>

      <h1 className="hero-name">Cole LaBarre</h1>

      <p className="hero-description">
        I build systems that connect physics, electronics, and software — from
        audio-reactive hardware and automated machines to data-driven mobile
        applications.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="hero-button primary">View Projects</a>
        <a href="#contact" className="hero-button">Contact</a>
        <a
          href="https://www.linkedin.com/in/cole-labarre-a33a29335"
          target="_blank"
          rel="noreferrer"
          className="hero-button"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}