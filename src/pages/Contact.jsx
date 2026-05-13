import "./Contact.css";

const contacts = [
  {
    label: "Email",
    value: "falnajjas@gmail.com",
    href: "mailto:falnajjas@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/fatema-alnajjas",
    href: "https://linkedin.com/in/fatema-alnajjas",
  },
  {
    label: "GitHub",
    value: "github.com/fatema-alnajjas",
    href: "https://github.com/Fatii78",
  },
  {
    label: "Phone",
    value: "+973 3314 3285",
    href: "tel:+97333143285",
  },
];

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-header">
        <p className="sec-label">Contact</p>
        <p className="contact-sub">
          Open to full-time roles, freelance projects, and interesting collaborations.
          Based in Bahrain — available globally. Reach out and I'll get back to you promptly.
        </p>
      </div>

      <div className="contact-links">
        {contacts.map((c) => (
          <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="contact-row">
            <span className="contact-label">{c.label}</span>
            <span className="contact-divider" />
            <span className="contact-value">{c.value}</span>
            <span className="contact-arrow">→</span>
          </a>
        ))}
      </div>

      <div className="contact-note">
        <p>Available for opportunities in fintech, telecom, or tech.</p>
      </div>
    </div>
  );
}
