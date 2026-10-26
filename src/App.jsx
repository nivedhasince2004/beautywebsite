import React from "react";
import "./App.css";

const services = [
  {
    icon: "🪄",
    title: "Facials",
    description: "Refresh your skin & enjoy a healthy, radiant glow",
  },
  {
    icon: "♨",
    title: "Hair Styling",
    description: "Find the perfect hairstyle for your look and occasion",
  },
  {
    icon: "💅",
    title: "Nail Care",
    description: "Keep your nails neat, beautiful, and well groomed",
  },
  {
    icon: "👜",
    title: "Makeup",
    description: "Complete your look with makeup for special occasions",
  },
];

const gallery = [
  {
    image:
      "\image5.jpeg",
    alt: "Beauty and bridal makeup",
  },
  {
    image:
      "\image3.jpeg",
    alt: "Facial treatment",
  },
  {
    image:
      "\image4.jpeg",
    alt: "Nail art",
  },
  {
    image:
      "\image7.jpeg",
    alt: "Hair styling",
  },
];

function App() {
  return (
    <div className="website">
      <header className="navbar">
        <a className="logo" href="#home">
          <span className="logo-flower">❀</span>
          <span className="logo-name">VEHA</span>
          <small>BEAUTY STUDIO</small>
        </a>

        <nav className="nav-links">
          <a className="active" href="#home">Home</a>
          <a className="active" href="#about">About</a>
          <a className="active" href="#services">Services</a>
          <a className="active" href="#gallery">Gallery</a>
          <a className="active" href="#contact">Contact</a>
        </nav>

        <a className="button nav-button" href="tel:1231231231">
          Call Now
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-decoration decoration-left">❀</div>
          <div className="hero-content">
            <p className="eyebrow">WELCOME TO VEHA BEAUTY STUDIO</p>
            <h1>
              Feel beautiful and
              <span> confident every day</span>
            </h1>
            <p className="hero-description">
              Your beauty, our passion. Enjoy professional beauty services
              designed to help you look and feel your best
            </p>
            <a href="#services" className="button">
              Explore Services
            </a>
          </div>

          <div className="hero-image">
            <img
              src="\image1.jpeg"
              alt="Bridal beauty and makeup"
            />
          </div>
          <div className="hero-decoration decoration-right">❀</div>
        </section>

        <section className="about section-pink" id="about">
          <div className="about-image image-frame">
            <img
              src="\image2.jpeg"
              alt="Beauty studio makeup service"
            />
          </div>

          <div className="about-content">
            <p className="eyebrow dark">ABOUT VEHA BEAUTY STUDIO</p>
            <h2>Your Beauty, Our Passion</h2>
            <p>
              At Veha Beauty Studio, we believe every <br/>person deserves to feel
              beautiful and <br />confident. We offer personalized beauty <br />services
              in a comfortable and welcoming <br />environment.
            </p>
            <a className="button" href="#services">View Services</a>
          </div>
        </section>

        <section className="services section-white" id="services">
          <div className="section-heading">
            <h2>Our Beauty Services</h2>
            <p>
              Discover our beauty services designed to help
              <br className="desktop-break" /> you look and feel your best
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="gallery-section section-pink" id="gallery">
          <div className="gallery-heading">
            <div>
              <h2>Our Beauty Gallery</h2>
              <p>
                Explore our beauty work, treatments,
                <br /> and studio experience.
              </p>
            </div>
            <a href="#contact" className="button">Call Us Today</a>
          </div>

          <div className="gallery-grid">
            {gallery.map((item) => (
              <div className="gallery-item" key={item.alt}>
                <img src={item.image} alt={item.alt} />
              </div>
            ))}
          </div>
        </section>

        <section className="why-section section-pink">
          <div className="why-content">
            <p className="eyebrow dark">WHY VEHA BEAUTY STUDIO</p>
            <h2>Beauty Care That Makes You Feel Special</h2>

            <div className="benefits">
              <div><span>♥</span> Personalized Care</div>
              <div><span>✦</span> Attention to Detail</div>
              <div><span>❀</span> Relaxing Experience</div>
              <div><span>♙</span> Quality Products</div>
            </div>
          </div>

          <div className="products-image">
            <img
              src="\image6.jpeg"
              alt="Beauty and skincare products"
            />
          </div>
        </section>

        <section className="contact-wrap" id="contact">
          <div className="contact-card">
            <div className="contact-info">
              <h2>Let's Make You Glow</h2>
              <p>Ready for your beauty appointment?</p>
              <p>Get in touch with us today</p>

              <a href="tel:1231231231" className="contact-line">
                <span>☎</span> 1231231231
              </a>
              <a
                href="mailto:vehab eautystudio@gmail.com"
                className="contact-line"
              >
                <span>✉</span> veha.beautystudio@gmail.com
              </a>
              <div className="contact-line">
                <span>♙</span> 123, Gandhi Street, Chennai
              </div>
              <div className="contact-line">
                <span>◷</span> Mon-Sat: 9.30AM-6.30PM
              </div>
            </div>

            <div className="visit-us">
              <h3>Visit Us</h3>
              <a
                className="map-link"
                href="https://www.google.com/maps/search/?api=1&query=Gandhi+Street+Chennai"
                target="_blank"
                rel="noreferrer"
                aria-label="Open location in Google Maps"
              >
                <iframe
                  title="Map showing Chennai"
                  src="https://maps.google.com/maps?q=Chennai%20India&t=&z=11&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                />
              </a>
              <div className="socials">
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">📸</a>
                <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer">🟢</a>
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">▶️</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo footer-logo" href="#home">
          <span className="logo-flower">❀</span>
          <span className="logo-name">VEHA</span>
          <small>BEAUTY STUDIO</small>
        </a>

        <nav className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="tel:1231231231" className="button footer-button">
          Call Us Today
        </a>
      </footer>

      <div className="copyright">
        2026 veha beauty studio, All rights reserved
      </div>
    </div>
  );
}

export default App;
