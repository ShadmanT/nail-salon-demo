"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ background: "#FDF8F5", color: "#2C1810", fontFamily: "'Jost', sans-serif", overflowX: "hidden" }}>


      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(253,248,245,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #F0E6E1" : "none",
        transition: "all 0.35s", padding: "22px 60px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ fontFamily: "'Cormorant', serif", fontSize: "22px", letterSpacing: "0.08em", fontWeight: 400, color: "#2C1810" }}>
          Petal <span style={{ color: "#C97B8A", fontStyle: "italic" }}>Nail Studio</span>
        </div>
        <div style={{ display: "flex", gap: "36px", alignItems: "center" }}>
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#contact" className="nav-link">Contact</a>
          <button className="btn-rose">Book Now</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        backgroundImage: "url('https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1800&q=85')",
        backgroundSize: "cover", backgroundPosition: "center", position: "relative",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(253,248,245,0.97) 42%, rgba(253,248,245,0.3))" }} />
        <div className="hero-content" style={{ position: "relative", padding: "0 60px 0 100px", maxWidth: "680px" }}>
          <p className="a1" style={{ fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "#C97B8A", marginBottom: "18px" }}>
            Toronto's Luxury Nail Bar
          </p>
          <h1 className="a2" style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(52px, 8vw, 92px)", fontWeight: 300, lineHeight: 1, marginBottom: "24px", color: "#2C1810" }}>
            Where Nails<br /><em style={{ color: "#C97B8A" }}>Become Art.</em>
          </h1>
          <p className="a2" style={{ fontSize: "15px", opacity: 0.65, lineHeight: 1.8, marginBottom: "40px", fontWeight: 300, maxWidth: "420px" }}>
            Gel, acrylic, nail art, and spa manicures — crafted with precision for women who want to feel effortlessly polished.
          </p>
          <div className="a3" style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <button className="btn-rose" style={{ padding: "15px 40px" }}>Book Your Appointment</button>
            <a href="#services" style={{ color: "#2C1810", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.5, textDecoration: "none", display: "flex", alignItems: "center" }}>
              View Services →
            </a>
          </div>
        </div>
      </section>

      {/* INFO BAR */}
      <div style={{ background: "#C97B8A", padding: "18px 60px", display: "flex", justifyContent: "center", gap: "60px", flexWrap: "wrap" }}>
        {["Walk-ins Welcome", "Tue – Sun  10AM – 8PM", "456 Queen St W, Toronto"].map((label, i, arr) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: "60px" }}>
            <span style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#fff", fontWeight: 400 }}>{label}</span>
            {i < arr.length - 1 && <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "9px" }}>✦</span>}
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <section id="services" className="section" style={{ padding: "110px 80px" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "#C97B8A" }}>What We Offer</p>
        <div className="divider" />
        <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 300, marginBottom: "60px", color: "#2C1810" }}>Our Services</h2>
        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {[
            { name: "Gel Manicure",      desc: "Long-lasting, chip-free colour with a glossy finish. Includes cuticle care and hand massage.",   price: "$55"      },
            { name: "Acrylic Full Set",  desc: "Custom-shaped acrylics built to your desired length and finished to perfection.",                price: "$75"      },
            { name: "Nail Art",          desc: "Florals, abstracts, gems, ombre, and more. Designed uniquely for you.",                         price: "From $10" },
            { name: "Spa Manicure",      desc: "A relaxing treatment with exfoliation, mask, massage, and classic polish.",                     price: "$45"      },
            { name: "Gel Pedicure",      desc: "Full foot treatment with callus removal, scrub, massage, and gel colour.",                     price: "$70"      },
            { name: "Dip Powder",        desc: "Lightweight and durable — no UV light needed. Lasts 3–4 weeks.",                               price: "$65"      },
          ].map(s => (
            <div key={s.name} className="service-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                <span style={{ fontFamily: "'Cormorant', serif", fontSize: "22px", fontWeight: 400, color: "#2C1810" }}>{s.name}</span>
                <span style={{ color: "#C97B8A", fontFamily: "'Cormorant', serif", fontSize: "20px", fontWeight: 400 }}>{s.price}</span>
              </div>
              <p style={{ fontSize: "13px", opacity: 0.6, lineHeight: 1.7, fontWeight: 300 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-grid" style={{ padding: "110px 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", background: "#FFF5F0" }}>
        <div>
          <p style={{ fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "#C97B8A" }}>Our Story</p>
          <div className="divider" />
          <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 300, marginBottom: "24px", lineHeight: 1.1, color: "#2C1810" }}>
            Beauty in<br /><em>Every Detail.</em>
          </h2>
          <p style={{ opacity: 0.65, lineHeight: 1.85, marginBottom: "18px", fontWeight: 300, fontSize: "15px" }}>
            At Petal, we believe a great manicure is more than just polish — it's a moment of calm in a busy week. Every client leaves feeling seen, relaxed, and genuinely beautiful.
          </p>
          <p style={{ opacity: 0.65, lineHeight: 1.85, marginBottom: "40px", fontWeight: 300, fontSize: "15px" }}>
            Our technicians are trained in the latest techniques and use only premium, non-toxic products. Your health and comfort come first, always.
          </p>
          <button className="btn-rose" style={{ padding: "15px 40px" }}>Book Your Visit</button>
        </div>
        <div style={{ position: "relative" }}>
          <img
            src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=900&q=85"
            alt="Nail technician at work"
            style={{ width: "100%", height: "520px", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", top: "-20px", left: "-20px", background: "#F7D6DC", width: "140px", height: "140px", zIndex: -1 }} />
          <div style={{ position: "absolute", bottom: "20px", right: "-24px", background: "#C97B8A", padding: "24px 28px", color: "#fff" }}>
            <div style={{ fontFamily: "'Cormorant', serif", fontSize: "40px", fontWeight: 500, lineHeight: 1 }}>500+</div>
            <div style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "6px", fontWeight: 400 }}>Happy Clients</div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section" style={{ padding: "110px 80px" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "#C97B8A" }}>Our Work</p>
        <div className="divider" />
        <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 300, marginBottom: "56px", color: "#2C1810" }}>The Gallery</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "260px 260px", gap: "12px" }}>
          <div className="gallery-wrap" style={{ gridColumn: "1 / 3", gridRow: "1 / 2" }}>
            <img className="gallery-img" src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=85" alt="" />
          </div>
          <div className="gallery-wrap">
            <img className="gallery-img" src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=85" alt="" />
          </div>
          <div className="gallery-wrap">
            <img className="gallery-img" src="https://images.unsplash.com/photo-1604655855820-d98a7a9b9aa2?w=400&q=85" alt="" />
          </div>
          <div className="gallery-wrap">
            <img className="gallery-img" src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400&q=85" alt="" />
          </div>
          <div className="gallery-wrap" style={{ gridColumn: "2 / 4" }}>
            <img className="gallery-img" src="https://images.unsplash.com/photo-1604655855820-d98a7a9b9aa2?w=800&q=85" alt="" />
          </div>
          <div className="gallery-wrap">
            <img className="gallery-img" src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=85" alt="" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ margin: "0 80px 110px" }}>
        <div className="cta-inner" style={{ background: "#FFF5F0", border: "1px solid #F0E6E1", padding: "72px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "40px" }}>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "#C97B8A", marginBottom: "18px" }}>Ready to treat yourself?</p>
            <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(30px, 4vw, 50px)", fontWeight: 300, lineHeight: 1.1, color: "#2C1810" }}>
              Your next set<br /><em style={{ color: "#C97B8A" }}>is waiting.</em>
            </h2>
          </div>
          <div style={{ display: "flex", gap: "12px", flexShrink: 0 }}>
            <button className="btn-rose" style={{ padding: "15px 36px" }}>Book Online</button>
            <button className="btn-outline-rose" style={{ padding: "15px 36px" }}>Call Us</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" style={{ borderTop: "1px solid #F0E6E1", padding: "64px 80px", background: "#2C1810" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "60px", marginBottom: "48px" }}>
          <div>
            <div style={{ fontFamily: "'Cormorant', serif", fontSize: "24px", letterSpacing: "0.08em", fontWeight: 400, color: "#FDF8F5", marginBottom: "16px" }}>
              Petal <span style={{ color: "#C97B8A", fontStyle: "italic" }}>Nail Studio</span>
            </div>
            <p style={{ opacity: 0.45, fontSize: "14px", lineHeight: 1.8, fontWeight: 300, maxWidth: "240px", color: "#FDF8F5" }}>
              Toronto's home for precision nail care and luxury manicures. Book ahead or walk right in.
            </p>
          </div>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C97B8A", marginBottom: "20px" }}>Hours</p>
            {[["Mon", "Closed"], ["Tue – Fri", "10AM – 8PM"], ["Sat – Sun", "10AM – 7PM"]].map(([day, hrs]) => (
              <div key={day} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", fontSize: "14px", opacity: 0.55, color: "#FDF8F5" }}>
                <span>{day}</span><span>{hrs}</span>
              </div>
            ))}
          </div>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C97B8A", marginBottom: "20px" }}>Find Us</p>
            {["456 Queen St W", "Toronto, ON  M5V 2B3", "(416) 555-0277", "hello@petalnails.ca"].map((line) => (
              <p key={line} style={{ fontSize: "14px", opacity: 0.55, marginBottom: "9px", color: "#FDF8F5" }}>{line}</p>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "24px", display: "flex", justifyContent: "space-between", opacity: 0.28, fontSize: "12px", color: "#FDF8F5" }}>
          <span>© 2025 Petal Nail Studio. All rights reserved.</span>
          <span>Site by [Your Name] · Toronto Web Design</span>
        </div>
      </footer>
    </div>
  );
}