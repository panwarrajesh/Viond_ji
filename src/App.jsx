import { useState } from "react";
import profileImage from "../public/Gemini_Generated_Image_enri5lenri5lenri.png";
const RESUME_FILE = "/Vinod_Devatwal_Resume.pdf";

const experience = [
  {
    company: "Sachee Fragrance Chemical Ltd",
    role: "HOD – Dispatch",
    duration: "Mar 2024 — Present",
    current: true,
  },
  {
    company: "Sage Apothecary Pvt. Ltd.",
    role: "Sr. Dispatch Executive",
    duration: "Jun 2019 — Dec 2023",
    current: false,
  },
  {
    company: "Riviera Co. Pvt. Ltd.",
    role: "Sales Executive",
    duration: "Feb 2017 — May 2019",
    current: false,
  },
  {
    company: "Sindh Color Mart",
    role: "Dispatch Executive",
    duration: "Jan 2015 — Jan 2017",
    current: false,
  },
];

const jobProfile = [
  "Inventory management, logistics operations & control",
  "Logistics operations, staff development & management",
  "Business growth & cost-control quality",
  "Transportation, material & team coordination",
  "Dispatch & receive delivery orders and products",
  "Purchasing strategy built on market analysis & growth trends",
  "Customs clearance documentation, filed on time with authorities",
  "Coordinate crew, vehicles & equipment across radio, phone and computer",
  "Plan and clear route maps for field units, scheduled on time",
  "Log and maintain accurate dispatch records in the system",
];

const achievements = [
  { when: "Aug 2020", what: "Best Employee of the Year — Sage Apothecary" },
  { when: "Jan 2022", what: "Best Punctual Employee of the Year — Sage Apothecary" },
  { when: "Jul 2023", what: "Best Stand-Out Performer — Sage Apothecary" },
];

const skills = [
  "MS Excel",
  "MS Word",
  "PowerPoint",
  "Email & Internet",
  "DCA — Computer Technology",
  "Inventory Control",
  "Route Planning",
  "Customs Documentation",
];

const education = [
  { level: "10+2 (Commerce)", board: "N.I.O.S, Delhi", pct: "68.00%", year: "2009" },
  { level: "10th (Matric)", board: "CBSE Board, Delhi", pct: "70.00%", year: "2005" },
];

const personal = [
  { k: "Father's Name", v: "Late Sh. Ashok Kumar" },
  { k: "Languages", v: "Hindi, English" },
  { k: "Hobbies", v: "Listening to music" },
  { k: "Nationality", v: "Indian" },
  { k: "Date of Birth", v: "16 Sep 1986" },
  { k: "Marital Status", v: "Married" },
  { k: "Mobility", v: "Anywhere in India" },
];

function PhotoSlot() {
  const [status, setStatus] = useState("loading"); // loading | ok | empty

  return (
  <div className="photo-slot">
  <img
    // src="/Gemini_Generated_Image_enri5lenri5lenri.png"
        src="/viond.png"

    alt="Vinod Devatwal"
    className="profile-photo"
  />

  <span className="corner tl"></span>
  <span className="corner tr"></span>
  <span className="corner bl"></span>
  <span className="corner br"></span>
</div>
  );
}

export default function App() {
  return (
    <>
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">
            <span className="brand-mark">VD</span>
            <span>
              Vinod Devatwal
              <div className="tracking-id">TRK-DISPATCH-1986</div>
            </span>
          </div>
          <nav className="nav-links">
            <a href="#route"><span className="num">01</span>Route</a>
            <a href="#cargo"><span className="num">02</span>Cargo</a>
            <a href="#ledger"><span className="num">03</span>Ledger</a>
            <a href="#manifest"><span className="num">04</span>Manifest</a>
          </nav>
        </div>
      </header>

      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <div className="container">
          <div className="waybill">
            <div className="waybill-strip">
              <span>Consignment Type: <b>Career Profile</b></span>
              <span>Origin: <b>New Delhi, IN</b></span>
              <span>Status: <b>Available For Dispatch</b></span>
            </div>

            <div className="hero-grid">
              <div className="hero-copy">
                <div className="role-eyebrow">Dispatch Manifest — Profile Copy</div>
                <h1>
                  VINOD<br />DEVAT<span>WAL</span>
                </h1>
                <div className="hero-role">HOD – Dispatch · Logistics &amp; Operations</div>
                <p className="hero-desc">
                  Ten-plus years moving inventory, teams and paperwork on
                  schedule. I plan routes, clear customs and keep every
                  consignment — and every crew member — on time, working
                  toward every organisation's growth with everything I bring
                  to the floor.
                </p>
                <div className="hero-cta">
                  <a className="btn" href={RESUME_FILE} download>
                    ↓ Download Resume (PDF)
                  </a>
                  <a className="btn ghost" href="#manifest">
                    Get In Touch
                  </a>
                </div>
              </div>

              <div style={{ position: "relative" }}>
                <PhotoSlot />
              </div>
            </div>
          </div>

          <div className="stats">
            <div className="stat">
              <div className="num">10+</div>
              <div className="label">Years on the floor</div>
            </div>
            <div className="stat">
              <div className="num">04</div>
              <div className="label">Companies served</div>
            </div>
            <div className="stat">
              <div className="num">03</div>
              <div className="label">Employee awards</div>
            </div>
            <div className="stat">
              <div className="num">A+</div>
              <div className="label">Punctuality record</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- ROUTE / EXPERIENCE ---------------- */}
      <section className="section" id="route">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">01 — Delivery Route</div>
            <h2 className="section-title">Career Route</h2>
          </div>

          <div className="route">
            {experience.map((job) => (
              <div className={`stop ${job.current ? "current" : ""}`} key={job.company}>
                <span className="stop-pin" />
                <div className="stop-card">
                  <div className="stop-top">
                    <div>
                      <div className="stop-title">{job.company}</div>
                      <div className="stop-role">{job.role}</div>
                    </div>
                    <div className="stop-duration">{job.duration}</div>
                  </div>
                  {job.current && <span className="stop-badge">Current Stop</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- JOB PROFILE ---------------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">02 — Manifest Detail</div>
            <h2 className="section-title">What I Handle Daily</h2>
          </div>
          <div className="panel">
            <ul className="cargo-list">
              {jobProfile.map((item) => (
                <li key={item}>
                  <span className="cargo-check" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- ACHIEVEMENTS ---------------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">03 — Seals Of Approval</div>
            <h2 className="section-title">Achievements</h2>
          </div>
          <div className="awards">
            {achievements.map((a) => (
              <div className="award" key={a.what}>
                <div className="ribbon">★</div>
                <div className="when">{a.when}</div>
                <div className="what">{a.what}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CARGO / SKILLS ---------------- */}
      <section className="section" id="cargo">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">04 — Cargo Hold</div>
            <h2 className="section-title">Skills &amp; Details</h2>
          </div>

          <div className="two-col">
            <div>
              <div className="tag-cloud">
                {skills.map((s) => (
                  <span className="tag" key={s}>
                    <b>#</b> {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="ledger">
              {personal.map((row) => (
                <div className="ledger-row" key={row.k}>
                  <div className="k">{row.k}</div>
                  <div className="v">{row.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- EDUCATION / LEDGER ---------------- */}
      <section className="section" id="ledger">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">05 — Paper Trail</div>
            <h2 className="section-title">Education</h2>
          </div>

          <table className="edu-table">
            <thead>
              <tr>
                <th>Qualification</th>
                <th>Board / University</th>
                <th>Percentage</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {education.map((e) => (
                <tr key={e.level}>
                  <td>{e.level}</td>
                  <td>{e.board}</td>
                  <td className="pct">{e.pct}</td>
                  <td>{e.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ---------------- CONTACT / FOOTER ---------------- */}
      <footer className="footer" id="manifest">
        <div className="container">
          <div className="contact-card">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              06 — Final Destination
            </div>
            <h2>Let's Get This Delivered</h2>
            <p>
              Open to dispatch, logistics and operations roles anywhere in
              India. Reach out directly — I reply fast.
            </p>
            <div className="contact-links">
              <a className="btn" href="tel:+919971678436">
                📞 +91 99716 78436
              </a>
              <a className="btn ghost" href="mailto:vinod.devatwal@gmail.com">
                ✉ vinod.devatwal@gmail.com
              </a>
              <a className="btn ghost" href={RESUME_FILE} download>
                ↓ Resume PDF
              </a>
            </div>

            <div className="barcode" aria-hidden="true">
              {Array.from({ length: 46 }).map((_, i) => (
                <span
                  key={i}
                  style={{ height: `${8 + ((i * 37) % 26)}px` }}
                />
              ))}
            </div>
          </div>

          <div className="foot-meta">
            H.No. 11296, Gali Rehmat Wali, Idgah Rd, Motia Khan, Delhi-110055 · © {new Date().getFullYear()} Vinod Devatwal
          </div>
        </div>
      </footer>
    </>
  );
}
