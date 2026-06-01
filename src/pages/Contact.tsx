import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const offices = [
  {
    city: "New York",
    address: "340 Fifth Avenue, Suite 1200",
    cityLine: "New York, NY 10001, United States",
    phone: "+1 212 555 0198",
    // Replace with your actual image path e.g. "/images/nyc.jpg"
    image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800&q=80",
  },
  {
    city: "London",
    address: "12 Shoreditch High Street",
    cityLine: "London, E1 6PG, United Kingdom",
    phone: "+44 20 7946 0302",
    // Replace with your actual image path e.g. "/images/london.jpg"
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
  },
];

const Contact = () => {
  return (
    <>
      <Navbar />

      <main style={{ fontFamily: "'Archivo', sans-serif", background: "#fff", color: "#0d0d0d" }}>

        {/* ── HERO ── */}
        <section style={{ padding: "5rem 4rem 4rem", borderBottom: "0.5px solid #eee" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "flex-end" }}>
            <div>
              <p style={{ fontSize: "11px", color: "#F70D1A", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500, marginBottom: "1rem" }}>
                Contact us
              </p>
              <h1 style={{ fontSize: "clamp(64px, 10vw, 110px)", fontWeight: 700, color: "#0d0d0d", lineHeight: 0.92, letterSpacing: "-0.03em", margin: 0, whiteSpace: "nowrap" }}>
                Here we <em style={{ color: "#F70D1A", fontStyle: "normal" }}>are.</em>
              </h1>
              <div style={{ width: "100%", height: "0.5px", background: "#0d0d0d", margin: "1.5rem 0" }} />
              <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.7, maxWidth: "360px", margin: 0 }}>
                We're a creative digital marketing agency with offices in New York and London. Let's make something great together.
              </p>
            </div>
            {/* <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem" }}>
              <span style={{ fontSize: "clamp(80px, 14vw, 130px)", fontWeight: 500, color: "#f0f0f0", lineHeight: 1, letterSpacing: "-0.04em" }}>
                02
              </span>
              <span style={{ fontSize: "13px", color: "#bbb" }}>offices worldwide</span>
            </div> */}
          </div>
        </section>

        {/* ── OFFICE CARDS ── */}
        <section style={{ padding: "3rem 4rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            {offices.map((office) => (
              <div key={office.city}>
                {/* Image */}
                <div style={{ width: "100%", height: "320px", overflow: "hidden", marginBottom: "1.5rem", background: "#d0d0d0" }}>
                  <img
                    src={office.image}
                    alt={office.city}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "grayscale(100%)" }}
                  />
                </div>
                {/* Info below image — like the reference */}
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#0d0d0d", marginBottom: "0.6rem" }}>
                  {office.city}
                </h3>
                <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.7, margin: 0 }}>
                  {office.address}<br />
                  {office.cityLine}<br />
                  {office.phone}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTACT FORM + INFO ── */}
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "0.5px solid #eee" }}>

          {/* Form */}
          <div style={{ padding: "3.5rem 4rem", borderRight: "0.5px solid #eee" }}>
            <p style={{ fontSize: "24px", fontWeight: 500, color: "#0d0d0d", marginBottom: "0.4rem" }}>Send us a message</p>
            <p style={{ fontSize: "13px", color: "#000", marginBottom: "2.5rem", lineHeight: 1.6 }}>We'll get back to you within 48 hours. No spam, ever.</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "1.25rem" }}>
              <div>
                <label style={labelStyle}>First name</label>
                <input style={inputStyle} placeholder="Alex" />
              </div>
              <div>
                <label style={labelStyle}>Last name</label>
                <input style={inputStyle} placeholder="Johnson" />
              </div>
            </div>

            <div style={{ marginBottom: "1.25rem" }}>
              <label style={labelStyle}>Email address</label>
              <input style={inputStyle} placeholder="alex@company.com" type="email" />
            </div>

            <div style={{ marginBottom: "1.25rem" }}>
              <label style={labelStyle}>Company</label>
              <input style={inputStyle} placeholder="Your company name" />
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <label style={labelStyle}>Message</label>
              <textarea
                style={{
                  ...inputStyle,
                  height: "120px",
                  resize: "none",
                  background: "#fff",
                  color: "#0d0d0d",
                  display: "block",
                  paddingTop: "10px",
                }}
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              style={{
                background: "#0d0d0d",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "13px 30px",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "inherit",
              }}
            >
              Send message
              <span style={{ width: "20px", height: "20px", background: "#F70D1A", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </button>
          </div>

          {/* Contact Info */}
          <div style={{ padding: "3.5rem 4rem", background: "#fff" }}>
            <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#000", fontWeight: 500, marginBottom: "1.5rem" }}>
              Contact information
            </p>

            {[
              { icon: phoneIcon, label: "Call us", value: "+1 212 555 0198\n+44 20 7946 0302" },
              { icon: mailIcon, label: "Email us", value: "hello@pixelcraft.com\nprojects@pixelcraft.com" },
              { icon: clockIcon, label: "Working hours", value: "Mon – Fri, 9am – 6pm" },
              { icon: chatIcon, label: "Response time", value: "Within 48 hours" },
            ].map(({ icon, label, value }) => (
              <div key={label} style={{ display: "flex", gap: "14px", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                <div style={{ width: "36px", height: "36px", background: "#fff", borderRadius: "8px", border: "0.5px solid #e8e8e8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {icon}
                </div>
                <div>
                  <p style={{ fontSize: "11px", color: "#000", marginBottom: "2px" }}>{label}</p>
                  <p style={{ fontSize: "13px", fontWeight: 500, color: "#0d0d0d", lineHeight: 1.6, whiteSpace: "pre-line" }}>{value}</p>
                </div>
              </div>
            ))}

            <div style={{ height: "0.5px", background: "#e8e8e8", margin: "1.5rem 0" }} />

            <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#000", fontWeight: 500, marginBottom: "1rem" }}>
              Follow our work
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              {["Instagram", "LinkedIn", "X", "Behance", "Dribbble"].map((name) => (
                <div key={name} style={{ width: "36px", height: "36px", background: "#fff", border: "0.5px solid #e8e8e8", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

// ── Shared styles ──
const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#000",
  marginBottom: "6px",
  fontWeight: 500,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#fff",
  border: "none",
  borderBottom: "1.5px solid #e0e0e0",
  padding: "8px 0",
  fontSize: "14px",
  color: "#0d0d0d",
  fontFamily: "inherit",
  outline: "none",
  boxSizing: "border-box",
};

// ── Inline SVG icons ──
const phoneIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F70D1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const mailIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F70D1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const clockIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F70D1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const chatIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F70D1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export default Contact;