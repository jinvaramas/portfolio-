// portfolio-sections.jsx — all sections with INLINE text (directly editable)

// ─── icons ──────────────────────────────────────────────────────────
function IconExt() {return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 3H3v10h10v-3"></path><path d="M9 3h4v4"></path><path d="M7 9l6-6"></path></svg>);
}
function IconGit() {return (
    <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 .2A8 8 0 0 0 5.5 15.8c.4.1.5-.2.5-.4v-1.5c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.1-.9-1.1-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-3.9 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.6 7.6 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.5.8 1.2.8 2.1 0 3-1.8 3.7-3.6 3.9.3.3.5.7.5 1.5v2.2c0 .2.1.5.5.4A8 8 0 0 0 8 .2z"></path></svg>);
}
function IconPlay() {return (
    <svg viewBox="0 0 16 16" fill="currentColor"><path d="M4 2.5v11l10-5.5z"></path></svg>);
}
function IconLink() {return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 9a3 3 0 0 0 4.2 0l2-2A3 3 0 0 0 9 2.8L8 3.8"></path><path d="M9 7a3 3 0 0 0-4.2 0l-2 2A3 3 0 0 0 7 13.2L8 12.2"></path></svg>);
}
function IconMail() {return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="3" width="12" height="10" rx="1.5"></rect><path d="M2.5 4l5.5 4 5.5-4"></path></svg>);
}
function IconPin() {return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M8 14s5-4.5 5-8.5A5 5 0 0 0 3 5.5C3 9.5 8 14 8 14z"></path><circle cx="8" cy="5.5" r="1.8"></circle></svg>);
}
function IconIn() {return (
    <svg viewBox="0 0 16 16" fill="currentColor"><path d="M3 5.5h2.4V14H3V5.5zM4.2 1.8a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8zM7 5.5h2.3v1.2h.03c.32-.6 1.1-1.24 2.27-1.24 2.43 0 2.88 1.6 2.88 3.68V14h-2.4v-3.7c0-.88-.02-2.02-1.23-2.02-1.24 0-1.43.97-1.43 1.96V14H7V5.5z"></path></svg>);
}
function IconBehance() {return (
    <svg viewBox="0 0 16 16" fill="currentColor"><path d="M5.2 3c.86 0 1.62.08 2.21.36.6.27.97.8.97 1.6 0 .85-.42 1.36-1.16 1.68.97.27 1.52.93 1.52 2 0 1.66-1.34 2.36-3.32 2.36H1V3h4.2zm-.34 3.16c.7 0 1.27-.16 1.27-.92 0-.83-.66-.92-1.32-.92H2.7v1.84h2.16zm.12 3.4c.78 0 1.43-.22 1.43-1.08 0-.86-.6-1.08-1.39-1.08H2.7v2.16h2.28zM11 5.5c1.6 0 2.8 1.05 2.8 3.05v.3H10.5c.05.86.6 1.3 1.45 1.3.62 0 1.16-.27 1.34-.72h1.4c-.26 1.1-1.28 1.78-2.78 1.78-1.84 0-3.05-1.16-3.05-3 0-1.83 1.2-2.7 3.05-2.7zm-.04 1.16c-.78 0-1.32.42-1.43 1.18h2.8c-.07-.7-.6-1.18-1.37-1.18zM9.5 3.4h3.4v.84H9.5V3.4z"></path></svg>);
}

// ─── HERO ───────────────────────────────────────────────────────────
function HeroSection({ data }) {
  return (
    <section id="home" className="hero" data-screen-label="Hero">
      <Draggable id="hero-burst" x={62} y={47} hoverOutline={false}>
        <div style={{ opacity: .55, pointerEvents: "none" }}>
          <Burst size={520} color="#ffe156" stroke="rgba(42,29,24,.55)" spikes={20} />
        </div>
      </Draggable>
      <Draggable id="hero-star-1" x={14} y={18}>
        <Star size={42} fill="#ff5b5b" rotate={-12} />
      </Draggable>
      <Draggable id="hero-star-2" x={88} y={18}>
        <Star size={36} fill="#1fa8a8" rotate={20} />
      </Draggable>
      <Draggable id="hero-star-3" x={72} y={68}>
        <Star size={28} fill="#9d7bea" rotate={-6} />
      </Draggable>
      <Draggable id="hero-sparkle" x={8} y={68}>
        <Sparkle size={22} color="#2a1d18" />
      </Draggable>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="hello" data-comment-anchor="hero-hello">Hello, I'm</div>
        <h1 className="word" data-comment-anchor="hero-word">
          <span className="letter">J</span><span className="letter">I</span><span className="letter">N</span><span className="letter">V</span><span className="letter">A</span><span className="letter">R</span><span className="letter">A</span><span className="letter">M</span><span className="letter">A</span><span className="letter">S</span>
        </h1>
        <div className="signature" data-comment-anchor="hero-name">Full - stack developer</div>
        <p className="tagline" data-comment-anchor="hero-tagline">{data.tagline}</p>
        <div className="meta">
        </div>
      </div>

      <a href="#about" className="scroll-cue" style={{ textDecoration: "none" }}>
        Scroll <div className="line"></div>
      </a>
    </section>);
}

// ─── ABOUT ──────────────────────────────────────────────────────────
function AboutSection({ data }) {
  return (
    <section id="about" data-screen-label="About">
      <span className="eyebrow">01 — About</span>
      <h2 className="section-title">A little about <em>me</em>.</h2>

      <div className="about">
        <div className="photo-frame">
          <image-slot
            id="profile-photo"
            shape="rect"
            src="uploads/my.jpg"
            placeholder="Drop a photo of you here">
          </image-slot>
          <Draggable id="about-star-1" x={0} y={0} style={{ transform: "translate(-50%,-50%) rotate(-12deg)" }}>
            <Star size={48} fill="#ff5b5b" />
          </Draggable>
          <Draggable id="about-star-2" x={100} y={20} style={{ transform: "translate(-50%,-50%) rotate(18deg)" }}>
            <Star size={32} fill="#1fa8a8" />
          </Draggable>
          <Draggable id="about-star-3" x={100} y={70} style={{ transform: "translate(-50%,-50%) rotate(8deg)" }}>
            <Star size={38} fill="#ffae2e" />
          </Draggable>
          <Draggable id="about-star-4" x={0} y={100} style={{ transform: "translate(-50%,-50%) rotate(-18deg)" }}>
            <Star size={28} fill="#e63f8d" />
          </Draggable>
        </div>

        <div className="about-body">
          <p>
            <strong>Adaptable Junior Full-Stack Developer (MERN Stack)</strong> with over five years of professional experience across customer operations, safety management, and commercial support — including roles at an international airline, a global mobility platform, and a B2B travel operations company. Proven track record in problem-solving under pressure, managing multi-channel communications, and collaborating across teams in fast-paced environments. Now combining that operational depth with full-stack development skills to build practical, user-focused solutions.
          </p>
          <div className="quicklinks">
            <a className="quicklink" href="mailto:jinvaramas@gmail.com"><IconMail /> jinvaramas@gmail.com</a>
            <a className="quicklink" href="https://www.linkedin.com/in/jinvaramas-piklunklin-99624a294/?skipRedirect=true" target="_blank" rel="noopener"><IconIn /> LinkedIn</a>
            <a className="quicklink" href="https://github.com/jinvaramas" target="_blank" rel="noopener"><IconGit /> GitHub</a>
          </div>
        </div>
      </div>
    </section>);

}

// ─── SKILLS ─────────────────────────────────────────────────────────
function SkillsSection() {
  return (
    <section id="skills" data-screen-label="Skills">
      <span className="eyebrow">02 — Skills</span>
      <h2 className="section-title">Tools &amp; <em>strengths</em>.</h2>

      <div className="skills">
        <div className="skill-group">
          <h3>Technical Skills</h3>
          <div className="skill-chips">
            <span className="chip c1">JavaScript (ES6+)</span>
            <span className="chip c2">HTML5</span>
            <span className="chip c3">CSS3</span>
            <span className="chip c4">React.js</span>
            <span className="chip c5">Node.js</span>
            <span className="chip c6">Express.js</span>
            <span className="chip c7">MongoDB</span>
            <span className="chip c1">SQL</span>
            <span className="chip c2">Tailwind CSS</span>
          </div>
        </div>
        <div className="skill-group">
          <h3>Tools</h3>
          <div className="skill-chips">
            <span className="chip c3">Figma</span>
            <span className="chip c4">Zendesk</span>
            <span className="chip c5">Power BI</span>
            <span className="chip c6">Trello</span>
            <span className="chip c7">Slack</span>
            <span className="chip c1">Jira</span>
            <span className="chip c2">Devrev</span>
            <span className="chip c3">Adobe Photoshop</span>
            <span className="chip c4">Confluent</span>
          </div>
        </div>
        <div className="skill-group">
          <h3>Soft Skills</h3>
          <div className="skill-chips">
            <span className="chip c5">Benefits Negotiation</span>
            <span className="chip c6">Customer Relations</span>
            <span className="chip c7">Problem-Solving</span>
            <span className="chip c1">Teamwork</span>
            <span className="chip c2">Multitasking</span>
          </div>
        </div>
        <div className="skill-group">
          <h3>Language Skills</h3>
          <div className="skill-chips">
            <span className="chip c3">Thai (Native)</span>
            <span className="chip c4">English (Intermediate — British Council Certificate)</span>
          </div>
        </div>
      </div>
    </section>);

}

// ─── JOURNEY (experience + education) ───────────────────────────────
function JourneySection() {
  return (
    <section id="journey" data-screen-label="Journey">
      <span className="eyebrow">03 — Journey</span>
      <h2 className="section-title">Where I've <em>been</em>.</h2>

      <div className="timeline">

        <div className="tl-row">
          <div className="tl-date">Mar – Jun 2026</div>
          <div className="tl-dot"><Star size={24} fill="#ff5b5b" /></div>
          <div className="tl-body">
            <h4>Full-Stack Software Development Bootcamp</h4>
            <span className="where">Generation Thailand</span>
            <p>Built and deployed full-stack web applications using the MERN Stack (MongoDB, Express, React, Node.js). Collaborated in Agile/Scrum teams to deliver projects within deadlines. Utilized Git/GitHub for version control, code collaboration, and project management.</p>
            <div className="tl-cert">★ Generation Thailand · Full-Stack Developer · 2026</div>
          </div>
        </div>

        <div className="tl-row">
          <div className="tl-date">Sep 2024 – Jan 2026</div>
          <div className="tl-dot"><Star size={24} fill="#ffae2e" /></div>
          <div className="tl-body">
            <h4>Commercial Agent &amp; Operations Support</h4>
            <span className="where">Transferz — Taxi2airport (Netherlands)</span>
            <p>Managed daily operations and acted as a key liaison between B2B partners and B2C customers. Negotiated pricing with global suppliers to ensure competitive and cost-effective solutions. Coordinated international bookings and resolved operational issues efficiently. Handled multi-channel communications including calls, chats, and emails via Zendesk and DevRev.</p>
          </div>
        </div>

        <div className="tl-row">
          <div className="tl-date">Apr 2023 – Jan 2024</div>
          <div className="tl-dot"><Star size={24} fill="#1fa8a8" /></div>
          <div className="tl-body">
            <h4>Customer Service Representative &amp; Safety Subject Matter Expert</h4>
            <span className="where">Bolt — Majorel (Thailand)</span>
            <p>Handled safety-related cases ranging from minor incidents to critical situations with high accuracy. Conducted detailed case assessments to ensure proper resolution and compliance. Provided technical support and resolved onboarding issues for premium users. Contributed to process improvements and operational efficiency initiatives.</p>
          </div>
        </div>

      </div>
    </section>);

}

// ─── PROJECTS ───────────────────────────────────────────────────────
function ProjectsSection() {
  return (
    <section id="projects" data-screen-label="Projects">
      <span className="eyebrow">04 — Projects</span>
      <h2 className="section-title">Selected <em>work</em>.</h2>

      <div className="projects-grid">

        {/* ─── Project 01 ─────────────────────────────────────── */}
        <article className="project" data-screen-label="Project: Lunar Garden">
          <div>
            <div className="p-media">
              <image-slot id="project-lunar-hero" shape="rect" placeholder="Drop hero image for Lunar Garden"></image-slot>
            </div>
            <div className="p-thumbs">
              <div className="p-thumb"><image-slot id="project-lunar-thumb-1" shape="rect" placeholder="#1"></image-slot></div>
              <div className="p-thumb"><image-slot id="project-lunar-thumb-2" shape="rect" placeholder="#2"></image-slot></div>
              <div className="p-thumb"><image-slot id="project-lunar-thumb-3" shape="rect" placeholder="#3"></image-slot></div>
            </div>
          </div>
          <div className="p-info">
            <span className="p-num">PROJECT 01 · 2025</span>
            <h3 className="p-title">Lunar Garden</h3>
            <div className="p-sub">Brand identity &amp; packaging</div>
            <p className="p-desc"><strong>The problem:</strong> A new botanical café needed a brand that felt rooted in nature and gentle nighttime quiet — without leaning into the usual leafy clichés.</p>
            <p className="p-desc">Designed a complete identity system: hand-painted wordmark, illustrated menu, drink coasters, signage, and to-go cup wraps. The watercolor moon icon now sits above the café door.</p>
            <div className="p-meta">
              <div>
                <div className="lbl">Role</div>
                <div>Lead designer &amp; illustrator</div>
              </div>
              <div>
                <div className="lbl">Contributors</div>
                <div>Mai Suthep (owner), Kanin P. (photography)</div>
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <div className="lbl">Tech &amp; tools</div>
                <div className="p-stack">
                  <span>Adobe Illustrator</span>
                  <span>Procreate</span>
                  <span>InDesign</span>
                  <span>Hand-lettering</span>
                  <span>Print production</span>
                </div>
              </div>
            </div>
            <div className="p-links">
              <a className="p-link primary" href="#" target="_blank" rel="noopener"><IconPlay /> Live demo</a>
              <a className="p-link" href="#" target="_blank" rel="noopener"><IconBehance /> Case study</a>
            </div>
          </div>
        </article>

        {/* ─── Project 02 ─────────────────────────────────────── */}
        <article className="project reverse" data-screen-label="Project: Echoes">
          <div>
            <div className="p-media">
              <image-slot id="project-echoes-hero" shape="rect" placeholder="Drop hero image for Echoes"></image-slot>
            </div>
            <div className="p-thumbs">
              <div className="p-thumb"><image-slot id="project-echoes-thumb-1" shape="rect" placeholder="#1"></image-slot></div>
              <div className="p-thumb"><image-slot id="project-echoes-thumb-2" shape="rect" placeholder="#2"></image-slot></div>
              <div className="p-thumb"><image-slot id="project-echoes-thumb-3" shape="rect" placeholder="#3"></image-slot></div>
            </div>
          </div>
          <div className="p-info">
            <span className="p-num">PROJECT 02 · 2024</span>
            <h3 className="p-title">Echoes</h3>
            <div className="p-sub">Editorial illustration series</div>
            <p className="p-desc"><strong>The problem:</strong> Soft Loud Press needed seven full-page illustrations for a poetry zine on memory and distance — each piece visually distinct but cohesive across the issue.</p>
            <p className="p-desc">Created a series of watercolor and ink illustrations responding to each poem. Worked closely with the editor on mood boards and palette decisions. Issue sold out in 3 weeks.</p>
            <div className="p-meta">
              <div>
                <div className="lbl">Role</div>
                <div>Illustrator</div>
              </div>
              <div>
                <div className="lbl">Contributors</div>
                <div>Nilubon Tanaka (editor), Soft Loud Press</div>
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <div className="lbl">Tech &amp; tools</div>
                <div className="p-stack">
                  <span>Watercolor</span>
                  <span>Procreate</span>
                  <span>Photoshop</span>
                  <span>Risograph prep</span>
                </div>
              </div>
            </div>
            <div className="p-links">
              <a className="p-link primary" href="#" target="_blank" rel="noopener"><IconPlay /> Live demo</a>
              <a className="p-link" href="#" target="_blank" rel="noopener"><IconBehance /> Case study</a>
            </div>
          </div>
        </article>

        {/* ─── Project 03 ─────────────────────────────────────── */}
        <article className="project" data-screen-label="Project: Sound // Pulse">
          <div>
            <div className="p-media">
              <image-slot id="project-pulse-hero" shape="rect" placeholder="Drop hero image for Sound // Pulse"></image-slot>
            </div>
            <div className="p-thumbs">
              <div className="p-thumb"><image-slot id="project-pulse-thumb-1" shape="rect" placeholder="#1"></image-slot></div>
              <div className="p-thumb"><image-slot id="project-pulse-thumb-2" shape="rect" placeholder="#2"></image-slot></div>
              <div className="p-thumb"><image-slot id="project-pulse-thumb-3" shape="rect" placeholder="#3"></image-slot></div>
            </div>
          </div>
          <div className="p-info">
            <span className="p-num">PROJECT 03 · 2024</span>
            <h3 className="p-title">Sound // Pulse</h3>
            <div className="p-sub">Poster series &amp; motion</div>
            <p className="p-desc"><strong>The problem:</strong> An indie music festival wanted a poster system that worked across 12 acts without losing identity in a sea of festival posters.</p>
            <p className="p-desc">Designed a modular layout system with a custom hand-drawn alphabet. Each act got a poster colored by genre, with shared geometric anchors. Animated three for Instagram.</p>
            <div className="p-meta">
              <div>
                <div className="lbl">Role</div>
                <div>Lead designer</div>
              </div>
              <div>
                <div className="lbl">Contributors</div>
                <div>Ploy R. (festival director), Tee N. (motion assist)</div>
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <div className="lbl">Tech &amp; tools</div>
                <div className="p-stack">
                  <span>InDesign</span>
                  <span>Illustrator</span>
                  <span>After Effects</span>
                  <span>Custom type</span>
                </div>
              </div>
            </div>
            <div className="p-links">
              <a className="p-link primary" href="#" target="_blank" rel="noopener"><IconPlay /> Live demo</a>
              <a className="p-link" href="#" target="_blank" rel="noopener"><IconExt /> Video</a>
            </div>
          </div>
        </article>

        {/* ─── Project 04 ─────────────────────────────────────── */}
        <article className="project reverse" data-screen-label="Project: Little Lantern">
          <div>
            <div className="p-media">
              <image-slot id="project-lantern-hero" shape="rect" placeholder="Drop hero image for Little Lantern"></image-slot>
            </div>
            <div className="p-thumbs">
              <div className="p-thumb"><image-slot id="project-lantern-thumb-1" shape="rect" placeholder="#1"></image-slot></div>
              <div className="p-thumb"><image-slot id="project-lantern-thumb-2" shape="rect" placeholder="#2"></image-slot></div>
              <div className="p-thumb"><image-slot id="project-lantern-thumb-3" shape="rect" placeholder="#3"></image-slot></div>
            </div>
          </div>
          <div className="p-info">
            <span className="p-num">PROJECT 04 · 2023</span>
            <h3 className="p-title">Little Lantern</h3>
            <div className="p-sub">Children's book illustration</div>
            <p className="p-desc"><strong>The problem:</strong> A bilingual picture book (Thai / English) needed warm, hand-painted illustrations that read as friendly to 4–7 year olds while respecting the story's quiet tone.</p>
            <p className="p-desc">Twenty-four spreads of watercolor illustration with hand-lettered titles. Worked with the author over four months, including character development and color script.</p>
            <div className="p-meta">
              <div>
                <div className="lbl">Role</div>
                <div>Illustrator &amp; cover designer</div>
              </div>
              <div>
                <div className="lbl">Contributors</div>
                <div>Anong K. (author), Bright Books Bangkok</div>
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <div className="lbl">Tech &amp; tools</div>
                <div className="p-stack">
                  <span>Watercolor</span>
                  <span>Procreate</span>
                  <span>InDesign</span>
                  <span>Hand-lettering</span>
                </div>
              </div>
            </div>
            <div className="p-links">
              <a className="p-link" href="#" target="_blank" rel="noopener"><IconBehance /> Case study</a>
            </div>
          </div>
        </article>

      </div>
    </section>);

}

// ─── CONTACT ────────────────────────────────────────────────────────
function ContactSection({ data }) {
  return (
    <section id="contact" data-screen-label="Contact">
      <div className="contact-card">
        <div className="contact-deco">
          <Burst size={260} color="#ffe156" stroke="rgba(247,234,208,.6)" spikes={22} />
        </div>
        <span className="eyebrow">05 — Say hello</span>
        <h2 className="section-title">Let's make something <em>together</em>.</h2>
        <p>Currently open to Junior Software Developer roles, Frontend Web Development, and UI Design projects full-time or freelance. I read every message, and I'd love to hear about the projects you're building.</p>

        <div className="contact-row">
          <a href={`mailto:${data.email}`}>
            <span className="lbl">Email</span>
            <span className="val">{data.email}</span>
          </a>
          <a href={`tel:${data.phone.replace(/\s/g, '')}`}>
            <span className="lbl">Phone</span>
            <span className="val">{data.phone}</span>
          </a>
          <a href="https://www.linkedin.com/in/your-handle" target="_blank" rel="noopener">
            <span className="lbl">LinkedIn</span>
            <span className="val">http://linkedin.com/in/jinvaramas-piklunklin-99624a294</span>
          </a>
          <a href="https://github.com/your-handle" target="_blank" rel="noopener">
            <span className="lbl">Github</span>
            <span className="val">https://github.com/jinvaramas</span>
          </a>
        </div>
      </div>
    </section>);

}

// ─── NAV ────────────────────────────────────────────────────────────
function Nav({ data }) {
  const [active, setActive] = React.useState("home");
  React.useEffect(() => {
    const ids = ["home", "about", "skills", "journey", "projects", "contact"];
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    ids.forEach((id) => {const el = document.getElementById(id);if (el) obs.observe(el);});
    return () => obs.disconnect();
  }, []);

  const cls = (id) => active === id ? "active" : "";

  return (
    <header className="nav">
      <a href="#home" className="brand" style={{ textDecoration: "none", color: "inherit" }}>
        <Star size={22} fill="#ff5b5b" /> {data.shortName}
      </a>
      <ul>
        <li><a href="#home" className={cls("home")}>Home</a></li>
        <li><a href="#about" className={cls("about")}>About</a></li>
        <li><a href="#skills" className={cls("skills")}>Skills</a></li>
        <li><a href="#journey" className={cls("journey")}>Journey</a></li>
        <li><a href="#projects" className={cls("projects")}>Work</a></li>
        <li><a href="#contact" className={cls("contact")}>Contact</a></li>
      </ul>
    </header>);

}

// ─── FOOTER ─────────────────────────────────────────────────────────
function FooterBlock({ data }) {
  return (
    <footer>
      <div>© 2026 {data.name} — Made with <span className="heart">♥</span> in Bangkok</div>
    </footer>);

}

Object.assign(window, {
  HeroSection, AboutSection, SkillsSection, JourneySection,
  ProjectsSection, ContactSection, Nav, FooterBlock
});