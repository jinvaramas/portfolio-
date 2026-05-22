// portfolio-app.jsx — App composition + data + tweaks

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "name": "Jinvaramas Piklunklin",
  "shortName": "My ✦",
  "tagline": "",
  "location": "Bangkok, Thailand",
  "email": "Jinvaramas@gmail.com",
  "phone": "0869993955",
  "palette": ["#fbf3df", "#ff5b5b", "#1fa8a8"],
  "background": "watercolor",
  "density": "regular",
  "accent": "#ff5b5b"
}/*EDITMODE-END*/;

const PORTFOLIO_DATA = {
  year: "2025 — 2026",
  about: [
    "Hi! I'm a <strong>fine artist & graphic designer</strong> based in Bangkok. I work across watercolor illustration, brand identity, editorial layout, and hand-lettering — happiest when a project lets a little mess and a lot of color into the room.",
    "I'm a recent graduate of <strong>Generation Thailand's UX/UI Designer bootcamp</strong>, and I'm currently looking for a junior design or illustration role at a studio that cares about craft, story, and the small joys."
  ],
  skills: {
    technical: [
      "Adobe Illustrator", "Procreate", "Adobe Photoshop",
      "Adobe InDesign", "Figma", "Hand-lettering",
      "Watercolor & gouache", "Print production", "HTML / CSS basics"
    ],
    soft: [
      "Visual storytelling", "Client research", "Cross-functional collaboration",
      "Self-direction", "Attention to detail", "Calm under deadline"
    ]
  },
  journey: [
    {
      dates: "2025",
      role: "UX/UI Designer Certification",
      where: "Generation Thailand",
      detail: "Twelve-week intensive bootcamp covering user research, wireframing, prototyping in Figma, design systems, and accessibility. Built three end-to-end projects with mentor critique.",
      cert: "Generation Thailand · UX/UI Designer · Certified 2025"
    },
    {
      dates: "2023 — 2025",
      role: "Freelance Illustrator & Designer",
      where: "Self-employed",
      detail: "Built brand identities, editorial illustrations, posters, and packaging for small Bangkok-based cafés, indie publications, and a children's book imprint. Six recurring clients."
    },
    {
      dates: "2022 — 2023",
      role: "Junior Designer (Internship)",
      where: "Studio Sàwàt",
      detail: "Print + digital production assistance: layout, retouching, and concept exploration on hospitality and lifestyle brand projects. Two campaigns shipped."
    },
    {
      dates: "2018 — 2022",
      role: "BFA, Visual Communication Design",
      where: "Silpakorn University",
      detail: "Graduated with second-class honors. Thesis: 'On Paper, On Screen' — a hybrid watercolor + digital illustration series exploring Thai folk motifs in contemporary editorial design."
    }
  ],
  projects: [
    {
      id: "lunar-garden",
      title: "Lunar Garden",
      sub: "Brand identity & packaging",
      year: "2025",
      problem: "A new botanical café needed a brand that felt rooted in nature and gentle nighttime quiet — without leaning into the usual leafy clichés.",
      description: "Designed a complete identity system: hand-painted wordmark, illustrated menu, drink coasters, signage, and to-go cup wraps. The watercolor moon icon now sits above the café door.",
      role: "Lead designer & illustrator",
      contributors: "Mai Suthep (owner), Kanin P. (photography)",
      tech: ["Adobe Illustrator", "Procreate", "InDesign", "Hand-lettering", "Print production"],
      demo: "#",
      behance: "#"
    },
    {
      id: "echoes",
      title: "Echoes",
      sub: "Editorial illustration series",
      year: "2024",
      problem: "Soft Loud Press needed seven full-page illustrations for a poetry zine on memory and distance — each piece visually distinct but cohesive across the issue.",
      description: "Created a series of watercolor and ink illustrations responding to each poem. Worked closely with the editor on mood boards and palette decisions. Issue sold out in 3 weeks.",
      role: "Illustrator",
      contributors: "Nilubon Tanaka (editor), Soft Loud Press",
      tech: ["Watercolor", "Procreate", "Photoshop", "Risograph prep"],
      behance: "#",
      demo: "#"
    },
    {
      id: "sound-pulse",
      title: "Sound // Pulse",
      sub: "Poster series & motion",
      year: "2024",
      problem: "An indie music festival wanted a poster system that worked across 12 acts without losing identity in a sea of festival posters.",
      description: "Designed a modular layout system with a custom hand-drawn alphabet. Each act got a poster colored by genre, with shared geometric anchors. Animated three for Instagram.",
      role: "Lead designer",
      contributors: "Ploy R. (festival director), Tee N. (motion assist)",
      tech: ["InDesign", "Illustrator", "After Effects", "Custom type"],
      demo: "#",
      video: "#"
    },
    {
      id: "little-lantern",
      title: "Little Lantern",
      sub: "Children's book illustration",
      year: "2023",
      problem: "A bilingual picture book (Thai / English) needed warm, hand-painted illustrations that read as friendly to 4–7 year olds while respecting the story's quiet tone.",
      description: "Twenty-four spreads of watercolor illustration with hand-lettered titles. Worked with the author over four months, including character development and color script.",
      role: "Illustrator & cover designer",
      contributors: "Anong K. (author), Bright Books Bangkok",
      tech: ["Watercolor", "Procreate", "InDesign", "Hand-lettering"],
      behance: "#"
    }
  ]
};

// Convert tweak link config into rendered links
function deriveLinks(t){
  return [
    { kind: "email",    href: `mailto:${t.email}`, label: "Email me" },
    { kind: "linkedin", href: "https://www.linkedin.com/in/your-handle", label: "LinkedIn", handle: "in/your-handle" },
    { kind: "github",   href: "https://github.com/your-handle",         label: "GitHub",   handle: "@your-handle" },
    { kind: "behance",  href: "https://www.behance.net/your-handle",    label: "Behance",  handle: "be/your-handle" },
    { kind: "site",     href: "https://yoursite.com",                   label: "yoursite.com" }
  ];
}

// ─── App ────────────────────────────────────────────────────────────
function App(){
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // apply density + background to body
  React.useEffect(() => {
    document.body.dataset.density = t.density;
    document.body.dataset.bg = t.background;
  }, [t.density, t.background]);

  // apply palette
  React.useEffect(() => {
    const [paper, accent, accent2] = t.palette;
    const root = document.documentElement;
    // Set accent colors from palette but keep watercolor blob colors fixed
    // Adjust paper only if not in dark mode
    if (t.background !== "dark") {
      root.style.setProperty("--paper", paper);
      // derive a slightly darker paper-deep
      root.style.setProperty("--paper-deep", shade(paper, -8));
    } else {
      root.style.removeProperty("--paper");
      root.style.removeProperty("--paper-deep");
    }
    root.style.setProperty("--c-accent", accent);
    root.style.setProperty("--c-accent-2", accent2);
  }, [t.palette, t.background]);

  // merge tweak overrides into base data
  const data = React.useMemo(() => ({
    ...PORTFOLIO_DATA,
    name: t.name,
    shortName: t.shortName,
    tagline: t.tagline,
    location: t.location,
    email: t.email,
    phone: t.phone,
    links: deriveLinks(t)
  }), [t]);

  return (
    <>
      <Nav data={data} />
      <main>
        <HeroSection data={data} />
        <AboutSection data={data} />
        <SkillsSection data={data} />
        <JourneySection data={data} />
        <ProjectsSection data={data} />
        <ContactSection data={data} />
      </main>
      <FooterBlock data={data} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Identity" />
        <TweakText  label="Name"     value={t.name}     onChange={(v) => setTweak("name", v)} />
        <TweakText  label="Short"    value={t.shortName} onChange={(v) => setTweak("shortName", v)} />
        <TweakText  label="Tagline"  value={t.tagline}  onChange={(v) => setTweak("tagline", v)} />
        <TweakText  label="Location" value={t.location} onChange={(v) => setTweak("location", v)} />
        <TweakText  label="Email"    value={t.email}    onChange={(v) => setTweak("email", v)} />
        <TweakText  label="Phone"    value={t.phone}    onChange={(v) => setTweak("phone", v)} />

        <TweakSection label="Look & feel" />
        <TweakRadio  label="Background" value={t.background}
                     options={["watercolor","clean","dark"]}
                     onChange={(v) => setTweak("background", v)} />
        <TweakRadio  label="Density" value={t.density}
                     options={["compact","regular","comfy"]}
                     onChange={(v) => setTweak("density", v)} />

        <TweakColor  label="Palette" value={t.palette}
                     options={[
                       ["#fbf3df", "#ff5b5b", "#1fa8a8"],   // cream + coral + teal (default)
                       ["#fff4e6", "#e63f8d", "#9d7bea"],   // peach + magenta + lavender
                       ["#f1ece1", "#5fb55b", "#ffae2e"],   // sage + leaf + marigold
                       ["#f7e9e3", "#2a1d18", "#ff5b5b"],   // blush + ink + coral
                       ["#eaf4ef", "#1fa8a8", "#ffe156"]    // mint + teal + sun
                     ]}
                     onChange={(v) => setTweak("palette", v)} />
      </TweaksPanel>
      <MoveMode />
    </>
  );
}

// utility — lighten/darken a hex by percentage
function shade(hex, pct){
  const h = hex.replace("#","");
  const n = parseInt(h.length === 3 ? h.split("").map(c=>c+c).join("") : h, 16);
  let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  const f = pct / 100;
  r = Math.max(0, Math.min(255, Math.round(r + (f < 0 ? r * f : (255 - r) * f))));
  g = Math.max(0, Math.min(255, Math.round(g + (f < 0 ? g * f : (255 - g) * f))));
  b = Math.max(0, Math.min(255, Math.round(b + (f < 0 ? b * f : (255 - b) * f))));
  return "#" + [r,g,b].map(x => x.toString(16).padStart(2,"0")).join("");
}

// ─── mount ──────────────────────────────────────────────────────────
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
