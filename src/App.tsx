import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Star,
  Terminal,
  Trophy,
  X,
  Zap,
  Bot,
  Cpu,
  Gamepad2,
  MousePointer2,
  Sparkles,
  CircleDot,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";

const projects = [
  {
    number: "01",
    title: "AGRIVISION",
    type: "AI / AGRITECH",
    description:
      "An AI-enabled agricultural operating system concept combining crop detection, segmentation, classification, severity estimation, IoT signals, weather intelligence and a multilingual assistant.",
    stack: ["YOLO", "SAM2", "EfficientNet", "ViT", "IoT"],
    color: "red",
  },
  {
    number: "02",
    title: "BORDERGUARD AI",
    type: "SIH 2026 / COMPUTER VISION",
    description:
      "A computer-vision pipeline concept for border monitoring, combining detection, direction cues, enhancement and intelligent scene understanding.",
    stack: ["YOLO", "OpenCV", "REID", "LLM", "DNN"],
    color: "yellow",
  },
  {
    number: "03",
    title: "ROADSOS",
    type: "MOBILE / EMERGENCY",
    description:
      "A roadside emergency assistance experience designed around fast actions, location intelligence and a clear mobile-first interface.",
    stack: ["React", "Supabase", "Maps", "UX"],
    color: "violet",
  },
  {
    number: "04",
    title: "CALC-IT",
    type: "WEB / AI",
    description:
      "An AI-assisted calculator experience built with a modern React stack and a focus on turning mathematical input into useful explanations.",
    stack: ["React", "Vite", "TypeScript", "Tailwind"],
    color: "white",
  },
  {
    number: "05",
    title: "PYLOGIC",
    type: "EDUCATION / PYTHON",
    description:
      "An interactive Python learning experience presented as a visual journey through core programming concepts.",
    stack: ["Python", "Web", "Interactive Learning"],
    color: "yellow",
    link: "https://pylogic.vercel.app/",
  },
];

const skills = [
  ["LANGUAGES", "C", "Java", "Python", "JavaScript", "TypeScript"],
  ["FRONTEND", "React", "Vite", "Tailwind CSS", "HTML", "CSS"],
  ["AI / ML", "OpenCV", "YOLO", "PyTorch", "Computer Vision", "LLMs"],
  ["TOOLS", "Git", "GitHub", "Supabase", "Docker", "VS Code"],
];

function BrutalistBot({
  active,
  onActivate,
}: {
  active: boolean;
  onActivate: () => void;
}) {
  return (
    <button
      type="button"
      className={`hero-bot-button ${active ? "is-active" : ""}`}
      onClick={onActivate}
      aria-pressed={active}
      aria-label={active ? "Turn AI mode off" : "Turn AI mode on"}
      title={active ? "AI MODE: ON" : "CLICK ROBOT TO ACTIVATE AI MODE"}
    >
      <svg viewBox="0 0 260 220" className="asset-bot" role="img" aria-hidden="true">
        <g stroke="#000" strokeWidth="6" strokeLinejoin="round">
          <path d="M130 18v24" />
          <circle cx="130" cy="12" r="7" fill="#FF6B6B" />
          <rect x="35" y="42" width="190" height="125" fill="#C4B5FD" />
          <rect x="58" y="68" width="56" height="42" fill="#FFD93D" />
          <rect x="146" y="68" width="56" height="42" fill="#FFD93D" />
          <circle cx="86" cy="89" r="8" fill="#000" />
          <circle cx="174" cy="89" r="8" fill="#000" />
          <path d="M83 132h94" />
          <path d="M48 170v25M212 170v25M18 94h17M225 94h17" />
          <rect x="85" y="168" width="90" height="30" fill="#FF6B6B" />
        </g>
      </svg>
      <span className="bot-label">{active ? "AI ONLINE" : "CLICK ME"}</span>
    </button>
  );
}

function SectionMarker({ number, word }: { number: string; word: string }) {
  return (
    <div className="section-marker" aria-hidden="true">
      <span>{number}</span>
      <strong>{word}</strong>
    </div>
  );
}

function BrutalistOrbit() {
  return (
    <svg className="asset-orbit" viewBox="0 0 240 180" role="img" aria-label="Abstract orbit illustration">
      <g fill="none" stroke="#000" strokeWidth="6">
        <ellipse cx="120" cy="90" rx="88" ry="38" transform="rotate(-18 120 90)" />
        <ellipse cx="120" cy="90" rx="88" ry="38" transform="rotate(30 120 90)" />
        <circle cx="120" cy="90" r="19" fill="#FF6B6B" />
      </g>
      <circle cx="192" cy="74" r="10" fill="#FFD93D" stroke="#000" strokeWidth="6" />
      <circle cx="76" cy="133" r="10" fill="#C4B5FD" stroke="#000" strokeWidth="6" />
    </svg>
  );
}

function CustomCursor() {
  const [cursor, setCursor] = useState({ x: -100, y: -100, hover: false, click: false });

  useEffect(() => {
    const move = (event: MouseEvent) =>
      setCursor((c) => ({ ...c, x: event.clientX, y: event.clientY }));
    const over = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setCursor((c) => ({
        ...c,
        hover: Boolean(target?.closest('a, button, .pop-card')),
      }));
    };
    const down = () => setCursor((c) => ({ ...c, click: true }));
    const up = () => setCursor((c) => ({ ...c, click: false }));
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${cursor.hover ? 'is-hovering' : ''} ${cursor.click ? 'is-clicking' : ''}`}
      style={{ left: cursor.x, top: cursor.y }}
      aria-hidden="true"
    >
      <span className="cursor-dot" />
      <span className="cursor-ring" />
      <span className="cursor-cross cursor-cross-x" />
      <span className="cursor-cross cursor-cross-y" />
      <span className="cursor-trail trail-1" />
      <span className="cursor-trail trail-2" />
      <span className="cursor-trail trail-3" />
      <span className="cursor-click-burst" />
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [contactStatus, setContactStatus] = useState("");
  const [cvOpen, setCvOpen] = useState(false);
  const [aiMode, setAiMode] = useState(false);
  const [contactFields, setContactFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".animated-section")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement;
          section.classList.toggle("is-visible", entry.isIntersecting);
        });

        const visibleSections = sections
          .filter((section) => section.classList.contains("is-visible"));

        const current = visibleSections
          .filter((section) => section.id)
          .sort((a, b) => {
            const aTop = Math.abs(a.getBoundingClientRect().top);
            const bTop = Math.abs(b.getBoundingClientRect().top);
            return aTop - bTop;
          })[0];

        if (current?.id) setActiveSection(current.id);
      },
      {
        rootMargin: "-8% 0px -28% 0px",
        threshold: [0.08, 0.2, 0.4],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleContactChange = (field: keyof typeof contactFields, value: string) => {
    setContactFields((current) => ({ ...current, [field]: value }));
    setContactStatus("");
  };

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, email, subject, message } = contactFields;
    const recipient = "mithunsmb12@gmail.com";
    const mailSubject = subject.trim() || `Portfolio enquiry from ${name.trim() || "a visitor"}`;
    const body = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      "",
      message.trim(),
    ].join("\n");

    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setContactStatus("YOUR EMAIL APP IS OPENING...");
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-neo-canvas font-grotesk text-neo-ink">
      <CustomCursor />
      <div className="site-noise pointer-events-none fixed inset-0 z-50" aria-hidden="true" />

      {cvOpen && (
        <div
          className="cv-overlay fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setCvOpen(false);
          }}
        >
          <div className="cv-modal relative max-h-[90vh] w-full max-w-4xl overflow-y-auto border-4 border-black bg-neo-canvas p-5 text-black shadow-neo-xl sm:p-8">
            <button
              type="button"
              onClick={() => setCvOpen(false)}
              className="neo-button absolute right-4 top-4 flex h-12 w-12 items-center justify-center bg-neo-accent shadow-neo-sm"
              aria-label="Close CV"
            >
              <X strokeWidth={4} />
            </button>
            <div className="pr-16">
              <p className="section-label bg-neo-secondary">MITHUN S / CV</p>
              <h2 id="cv-title" className="mt-6 text-5xl font-black uppercase leading-[.85] tracking-tighter sm:text-7xl">MITHUN S</h2>
              <p className="mt-3 text-xl font-black uppercase tracking-widest">CSE STUDENT • DEVELOPER • AI BUILDER • GAME DEV ENTHUSIAST</p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <section className="border-4 border-black bg-white p-5 shadow-neo-sm">
                <p className="font-black uppercase tracking-widest">PROFILE</p>
                <p className="mt-3 font-bold leading-relaxed">BE Computer Science & Engineering student focused on software development, computer vision, AI systems, UI design and game development.</p>
              </section>
              <section className="border-4 border-black bg-neo-secondary p-5 shadow-neo-sm">
                <p className="font-black uppercase tracking-widest">EDUCATION</p>
                <h3 className="mt-3 text-2xl font-black uppercase">BE — CSE</h3>
                <p className="mt-1 font-bold">K. Ramakrishna College of Technology</p>
              </section>
              <section className="border-4 border-black bg-neo-accent p-5 shadow-neo-sm">
                <p className="font-black uppercase tracking-widest">CORE SKILLS</p>
                <p className="mt-3 font-bold leading-relaxed">C • Java • Python • JavaScript • TypeScript • React • Vite • Tailwind CSS • OpenCV • YOLO • PyTorch • LLMs • Git • GitHub • Supabase • Docker</p>
              </section>
              <section className="border-4 border-black bg-neo-muted p-5 shadow-neo-sm">
                <p className="font-black uppercase tracking-widest">SELECTED BUILDS</p>
                <p className="mt-3 font-bold leading-relaxed">AgriVision • BorderGuard AI • RoadSOS • Calc-it</p>
              </section>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a href="https://github.com/mithun4434" target="_blank" rel="noreferrer" className="neo-button flex min-h-14 items-center justify-center gap-3 bg-white px-6 py-4 font-black uppercase shadow-neo-sm"><Github strokeWidth={4} /> GITHUB</a>
              <a href="https://www.linkedin.com/in/mithun-s-12-pro" target="_blank" rel="noreferrer" className="neo-button flex min-h-14 items-center justify-center gap-3 bg-white px-6 py-4 font-black uppercase shadow-neo-sm"><Linkedin strokeWidth={4} /> LINKEDIN</a>
              <button type="button" onClick={() => setCvOpen(false)} className="neo-button flex min-h-14 items-center justify-center gap-3 bg-black px-6 py-4 font-black uppercase text-white shadow-neo-sm">CLOSE CV <X strokeWidth={4} /></button>
            </div>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-40 border-b-4 border-black bg-neo-canvas">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#top"
            onClick={closeMenu}
            className="neo-button bg-neo-accent px-4 py-2 text-lg font-black uppercase tracking-tight shadow-neo-sm"
          >
            MITHUN S
          </a>

          <nav className="hidden items-center gap-2 md:flex" aria-label="Primary navigation">
            {["ABOUT", "PROJECTS", "STACK", "CONTACT"].map((item, index) => {
              const id = item.toLowerCase();
              const handleContactChange = (field: keyof typeof contactFields, value: string) => {
    setContactFields((current) => ({ ...current, [field]: value }));
    setContactStatus("");
  };

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, email, subject, message } = contactFields;
    const recipient = "mithunsmb12@gmail.com";
    const mailSubject = subject.trim() || `Portfolio enquiry from ${name.trim() || "a visitor"}`;
    const body = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      "",
      message.trim(),
    ].join("\n");

    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setContactStatus("YOUR EMAIL APP IS OPENING...");
  };

  return (
                <a
                  key={item}
                  href={`#${id}`}
                  className={`nav-link ${activeSection === id ? "nav-link-active" : ""}`}
                  aria-current={activeSection === id ? "page" : undefined}
                >
                  <span className="nav-num">0{index + 1}</span>
                  {item}
                </a>
              );
            })}
          </nav>

          <button
            className="neo-button flex h-12 w-12 items-center justify-center bg-white shadow-neo-sm md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X strokeWidth={4} /> : <Menu strokeWidth={4} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t-4 border-black bg-neo-secondary p-4 md:hidden" aria-label="Mobile navigation">
            <div className="grid gap-3">
              {["ABOUT", "PROJECTS", "STACK", "CONTACT"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu} className="neo-button bg-white px-4 py-4 text-left text-lg font-black uppercase shadow-neo-sm">
                  {item}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>
      <main id="top">
        <section className="relative border-b-4 border-black px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
          <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
          <div className="reveal-group mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <div className="relative z-10">
              <div className="motion-fade-up mb-7 inline-flex -rotate-2 items-center gap-2 border-4 border-black bg-neo-secondary px-4 py-3 font-black uppercase tracking-[0.18em] shadow-neo-sm">
                <Zap size={20} fill="currentColor" strokeWidth={4} />
                CSE STUDENT • BUILDER
              </div>

              <h1 className="motion-fade-up max-w-5xl text-6xl font-black uppercase leading-[0.82] tracking-tighter sm:text-8xl lg:text-9xl">
                <span className="block">I BUILD</span>
                <span className="outlined-text block">DIGITAL</span>
                <span className="block text-neo-accent text-shadow-black">THINGS.</span>
              </h1>

              <div className="motion-fade-up mt-10 max-w-2xl border-4 border-black bg-white p-6 text-lg font-bold leading-relaxed shadow-neo-lg sm:text-xl">
                <p>
                  Hi, I&apos;m <span className="bg-neo-secondary px-1">MITHUN S</span> —
                  a Computer Science student who likes turning ideas into
                  interfaces, experiments, AI systems and games.
                </p>
              </div>

              <div className="motion-fade-up mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a href="#projects" className="neo-button flex min-h-14 items-center justify-center gap-3 bg-neo-accent px-7 py-4 font-black uppercase tracking-wide shadow-neo-sm">
                  SEE MY WORK <ArrowRight strokeWidth={4} />
                </a>
                <button
                  type="button"
                  onClick={() => setCvOpen(true)}
                  className="neo-button flex min-h-14 items-center justify-center gap-3 bg-neo-secondary px-7 py-4 font-black uppercase tracking-wide shadow-neo-sm"
                >
                  VIEW MY CV <GraduationCap strokeWidth={4} />
                </button>
                <a href="#contact" className="neo-button flex min-h-14 items-center justify-center gap-3 bg-white px-7 py-4 font-black uppercase tracking-wide shadow-neo-sm">
                  LET&apos;S TALK <ArrowUpRight strokeWidth={4} />
                </a>
              </div>
            </div>

            <div className="relative min-h-[430px] lg:min-h-[540px]" aria-label="Decorative portfolio collage">
              <div className="motion-fade-pulse absolute right-3 top-4 h-24 w-24 rotate-12 border-4 border-black bg-neo-accent shadow-neo-sm sm:h-32 sm:w-32" />
              <div className="absolute bottom-6 left-2 h-28 w-28 -rotate-12 border-4 border-black bg-neo-muted shadow-neo-sm sm:h-40 sm:w-40" />
              <div className="motion-wiggle absolute right-8 top-28 z-20 flex h-28 w-28 rotate-6 items-center justify-center rounded-full border-4 border-black bg-neo-secondary text-center text-sm font-black uppercase tracking-widest shadow-neo-sm sm:h-36 sm:w-36">
                NO<br />BORING<br />UI
              </div>

              <div className="motion-scan absolute left-5 top-20 z-10 w-[82%] rotate-[-3deg] border-4 border-black bg-black p-5 shadow-neo-xl sm:p-8">
                <div className="mb-5 flex items-center justify-between border-b-4 border-white pb-4 text-white">
                  <span className="font-black uppercase tracking-widest">MITHUN.EXE</span>
                  <Terminal strokeWidth={4} />
                </div>
                <pre className="hero-terminal-output overflow-hidden text-sm font-bold leading-7 text-white sm:text-base">
{aiMode
  ? `$ whoami
> MITHUN S
$ mode
> AI SYSTEMS: ONLINE
$ stack
> VISION + LLM + WEB
$ status
> BUILDING... ██████████`
  : `$ whoami
> developer
$ focus
> AI + WEB + GAMES
$ status
> BUILDING... ████████`}
                </pre>
                <div className="mt-5 flex items-center justify-between gap-3 border-4 border-white bg-neo-secondary px-3 py-2 text-xs font-black uppercase text-black">
                  <span>{aiMode ? "AI MODE ACTIVE" : "CLICK THE ROBOT"}</span>
                  <span className="inline-flex items-center gap-2">
                    <span className={`status-dot ${aiMode ? "is-on" : ""}`} />
                    {aiMode ? "ONLINE" : "STANDBY"}
                  </span>
                </div>
              </div>

              <div className="motion-stamp absolute bottom-16 right-0 z-20 -rotate-3 border-4 border-black bg-neo-accent p-5 font-black uppercase shadow-neo-lg sm:p-7">
                <div className="text-4xl leading-none sm:text-6xl">CODE</div>
                <div className="text-4xl leading-none sm:text-6xl">CREATE</div>
                <div className="text-4xl leading-none sm:text-6xl">REPEAT</div>
              </div>

              <div className="absolute right-0 bottom-0 z-30 sticker sticker-white float-two">
                <MousePointer2 size={24} strokeWidth={4} />
                <span>CLICK ME</span>
              </div>
              <BrutalistBot active={aiMode} onActivate={() => setAiMode((value) => !value)} />

            </div>
          </div>
        </section>

        <section className="border-b-4 border-black bg-neo-secondary py-4">
          <div className="marquee">
            <div className="marquee-track">
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className="mx-6 inline-flex items-center gap-6 text-xl font-black uppercase tracking-widest sm:text-2xl">
                  BUILD • BREAK • LEARN <Star size={22} fill="black" strokeWidth={3} />
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="animated-section relative border-b-4 border-black px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <SectionMarker number="01" word="ABOUT" />
          <div className="reveal-group mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div className="about-heading-block">
              <div className="scribble-line" aria-hidden="true" />
              <p className="section-label bg-neo-muted">01 / ABOUT</p>
              <h2 className="mt-6 text-6xl font-black uppercase leading-none tracking-tighter sm:text-7xl">
                HUMAN<br /><span className="text-neo-accent">MADE.</span>
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-[1.3fr_.7fr]">
              <article className="pop-card -rotate-1 border-4 border-black bg-white p-7 shadow-neo-lg">
                <p className="text-xl font-bold leading-relaxed sm:text-2xl">
                  I&apos;m a BE CSE student at K. Ramakrishna College of Technology.
                  I enjoy editing, experimenting with technology and building
                  things that are useful, visual and a little different.
                </p>
                <p className="mt-6 text-lg font-bold leading-relaxed">
                  My current playground sits where <mark>software development</mark>,
                  computer vision, AI and game development meet.
                </p>
              </article>

              <div className="grid gap-6">
                <div className="pop-card border-4 border-black bg-neo-accent p-6 shadow-neo-sm">
                  <div className="text-6xl font-black">∞</div>
                  <div className="mt-2 font-black uppercase tracking-widest">CURIOUS</div>
                </div>
                <div className="pop-card rotate-2 border-4 border-black bg-neo-secondary p-6 shadow-neo-sm">
                  <div className="text-6xl font-black">24/7</div>
                  <div className="mt-2 font-black uppercase tracking-widest">LEARNING MODE</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="animated-section relative border-b-4 border-black bg-black px-4 py-20 text-white sm:px-6 md:py-28 lg:px-8">
          <SectionMarker number="02" word="PROJECTS" />
          <div className="project-asset-wall" aria-hidden="true">
            <span>AI</span><span>WEB</span><span>CV</span><span>GAME</span>
          </div>
          <div className="reveal-group mx-auto max-w-7xl">
            <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="section-label border-white bg-neo-accent text-black">02 / SELECTED WORK</p>
                <h2 className="mt-7 text-6xl font-black uppercase leading-[.82] tracking-tighter sm:text-8xl">
                  THINGS<br />I&apos;VE <span className="outlined-white">BUILT.</span>
                </h2>
              </div>
              <p className="max-w-md border-4 border-white bg-black p-5 text-lg font-bold">
                Real projects, prototypes and experiments. Some polished. Some chaotic. All built to learn.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className={`pop-card project-card ${project.color} ${index % 2 ? "md:translate-y-12" : ""}`}
                >
                  <div className="flex items-center justify-between border-b-4 border-black bg-white px-5 py-4 text-black">
                    <span className="text-2xl font-black">{project.number}</span>
                    <span className="font-black uppercase tracking-widest">{project.type}</span>
                  </div>
                  <div className="p-7 text-black sm:p-9">
                    <h3 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl">{project.title}</h3>
                    <p className="mt-6 text-lg font-bold leading-relaxed">{project.description}</p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.stack.map((tag) => (
                        <span key={tag} className="pop-chip border-4 border-black bg-white px-3 py-2 text-xs font-black uppercase tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="neo-button mt-8 flex min-h-12 items-center gap-2 bg-black px-5 py-3 text-sm font-black uppercase tracking-wide text-white shadow-neo-sm"
                      >
                        VIEW PROJECT <ArrowUpRight size={20} strokeWidth={4} />
                      </a>
                    ) : (
                      <button className="neo-button mt-8 flex min-h-12 items-center gap-2 bg-black px-5 py-3 text-sm font-black uppercase tracking-wide text-white shadow-neo-sm">
                        VIEW PROJECT <ArrowUpRight size={20} strokeWidth={4} />
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="animated-section relative border-b-4 border-black bg-neo-muted px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <SectionMarker number="03" word="STACK" />
          <BrutalistOrbit />
          <div className="reveal-group mx-auto max-w-7xl">
            <div className="mb-12">
              <p className="section-label bg-white">03 / TOOLBOX</p>
              <h2 className="mt-7 max-w-4xl text-6xl font-black uppercase leading-[.84] tracking-tighter sm:text-8xl">
                MY<br /><span className="text-neo-accent text-shadow-black">STACK.</span>
              </h2>
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              {skills.map(([title, ...items], index) => (
                <article key={title} className={`pop-card border-4 border-black bg-white p-7 shadow-neo-lg ${index % 2 ? "rotate-1" : "-rotate-1"}`}>
                  <div className="flex items-center gap-4 border-b-4 border-black pb-5">
                    <div className="border-4 border-black bg-neo-secondary p-3">
                      <Code2 strokeWidth={4} />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-wide">{title}</h3>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    {items.map((item) => (
                      <span key={item} className="pop-chip border-4 border-black bg-neo-canvas px-4 py-3 text-base font-black uppercase shadow-neo-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-14 border-4 border-black bg-black p-5 text-white shadow-neo-lg">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-neo-secondary" fill="currentColor" strokeWidth={3} />
                  <span className="font-black uppercase tracking-widest">CURRENTLY EXPLORING</span>
                </div>
                <span className="border-4 border-white bg-neo-accent px-3 py-2 font-black text-black">BUILD STATUS: ON</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {['COMPUTER VISION', 'GENERATIVE AI', 'GAME DEV', 'UI MOTION', 'SYSTEM DESIGN'].map((item, i) => (
                  <span key={item} className={`explore-chip ${i % 2 ? 'bg-neo-muted text-black' : 'bg-neo-secondary text-black'}`}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="animated-section border-b-4 border-black bg-neo-accent px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            {[
              [<Bot size={34} strokeWidth={4} />, 'AI BUILDER', 'MODELS / VISION / LLM'],
              [<Gamepad2 size={34} strokeWidth={4} />, 'GAME DEV', 'PLAY / DESIGN / CODE'],
              [<CircleDot size={34} strokeWidth={4} />, 'UI CRAFT', 'TYPE / MOTION / SYSTEMS'],
            ].map(([icon, title, text], index) => (
              <div key={title as string} className={`pop-card asset-card ${index === 1 ? 'rotate-2' : index === 2 ? '-rotate-2' : ''}`}>
                <div className="asset-icon">{icon}</div>
                <div>
                  <h3 className="text-2xl font-black uppercase">{title}</h3>
                  <p className="mt-2 font-black uppercase tracking-widest">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="animated-section border-b-4 border-black px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="reveal-group mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="section-label bg-neo-accent">04 / JOURNEY</p>
              <h2 className="mt-7 text-6xl font-black uppercase leading-[.82] tracking-tighter sm:text-8xl">
                STILL<br /><span className="outlined-text">LEVELING</span><br />UP.
              </h2>
            </div>

            <div className="space-y-8">
              <div className="pop-card border-4 border-black bg-white p-7 shadow-neo-lg">
                <div className="flex gap-5">
                  <div className="shrink-0 border-4 border-black bg-neo-secondary p-3"><GraduationCap strokeWidth={4} /></div>
                  <div>
                    <p className="font-black uppercase tracking-widest">EDUCATION</p>
                    <h3 className="mt-2 text-3xl font-black uppercase">BE — COMPUTER SCIENCE & ENGINEERING</h3>
                    <p className="mt-2 text-lg font-bold">K. Ramakrishna College of Technology</p>
                  </div>
                </div>
              </div>

              <div className="pop-card rotate-1 border-4 border-black bg-neo-accent p-7 shadow-neo-lg">
                <div className="flex gap-5">
                  <div className="shrink-0 border-4 border-black bg-white p-3"><Trophy strokeWidth={4} /></div>
                  <div>
                    <p className="font-black uppercase tracking-widest">HACKATHONS / BUILDING</p>
                    <h3 className="mt-2 text-3xl font-black uppercase">THE MAVERICKS</h3>
                    <p className="mt-2 text-lg font-bold">Building ambitious technology concepts and prototypes for hackathon challenges.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="animated-section relative overflow-hidden border-b-4 border-black bg-neo-secondary px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <SectionMarker number="04" word="CONTACT" />

          <div className="absolute -right-16 top-12 rotate-12 border-4 border-black bg-neo-accent px-8 py-5 text-4xl font-black shadow-neo-lg" aria-hidden="true">
            HELLO!
          </div>
          <div className="reveal-group mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="section-label bg-black text-white">05 / CONTACT</p>
              <h2 className="mt-8 text-6xl font-black uppercase leading-[.8] tracking-tighter sm:text-8xl lg:text-9xl">
                HAVE AN<br /><span className="text-neo-accent text-shadow-black">IDEA?</span>
              </h2>
              <p className="mt-8 max-w-2xl border-4 border-black bg-white p-6 text-xl font-bold leading-relaxed shadow-neo-lg">
                I&apos;m always interested in building, learning and experimenting. Find me online or start a conversation.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <a className="neo-button flex min-h-14 items-center justify-center gap-3 bg-white px-4 py-4 font-black uppercase shadow-neo-sm" href="https://github.com/mithun4434" target="_blank" rel="noreferrer">
                  <Github strokeWidth={4} /> GITHUB
                </a>
                <a className="neo-button flex min-h-14 items-center justify-center gap-3 bg-white px-4 py-4 font-black uppercase shadow-neo-sm" href="https://www.linkedin.com/in/mithun-s-12-pro" target="_blank" rel="noreferrer">
                  <Linkedin strokeWidth={4} /> LINKEDIN
                </a>
                <a className="neo-button flex min-h-14 items-center justify-center gap-3 bg-white px-4 py-4 font-black uppercase shadow-neo-sm" href="mailto:mithunsmb12@gmail.com">
                  <Mail strokeWidth={4} /> DIRECT EMAIL
                </a>
              </div>

              <form onSubmit={handleContactSubmit} className="mt-12 border-4 border-black bg-white p-6 text-black shadow-neo-xl sm:p-8">
                <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-black uppercase tracking-widest">CONTACT TERMINAL</p>
                    <h3 className="mt-2 text-3xl font-black uppercase">SEND ME A MESSAGE</h3>
                  </div>
                  <span className="border-4 border-black bg-neo-accent px-3 py-2 text-xs font-black uppercase tracking-widest shadow-neo-sm">
                    TO: MITHUNSMB12@GMAIL.COM
                  </span>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-black uppercase tracking-widest">YOUR NAME</span>
                    <input
                      required
                      type="text"
                      value={contactFields.name}
                      onChange={(e) => handleContactChange("name", e.target.value)}
                      placeholder="YOUR NAME"
                      className="neo-input"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-black uppercase tracking-widest">YOUR EMAIL</span>
                    <input
                      required
                      type="email"
                      value={contactFields.email}
                      onChange={(e) => handleContactChange("email", e.target.value)}
                      placeholder="YOU@EMAIL.COM"
                      className="neo-input"
                    />
                  </label>
                </div>

                <label className="mt-5 block">
                  <span className="mb-2 block text-sm font-black uppercase tracking-widest">SUBJECT</span>
                  <input
                    type="text"
                    value={contactFields.subject}
                    onChange={(e) => handleContactChange("subject", e.target.value)}
                    placeholder="WHAT DO YOU WANT TO BUILD?"
                    className="neo-input"
                  />
                </label>

                <label className="mt-5 block">
                  <span className="mb-2 block text-sm font-black uppercase tracking-widest">MESSAGE</span>
                  <textarea
                    required
                    rows={6}
                    value={contactFields.message}
                    onChange={(e) => handleContactChange("message", e.target.value)}
                    placeholder="WRITE YOUR MESSAGE..."
                    className="neo-input resize-y py-4"
                  />
                </label>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm font-black uppercase tracking-wide">
                    YOUR DETAILS STAY IN YOUR EMAIL APP — THIS FORM OPENS A PRE-FILLED EMAIL.
                  </p>
                  <button type="submit" className="neo-button flex min-h-14 items-center justify-center gap-3 bg-neo-accent px-7 py-4 font-black uppercase tracking-wide shadow-neo-sm">
                    SEND MESSAGE <Mail strokeWidth={4} />
                  </button>
                </div>

                {contactStatus && (
                  <div className="mt-5 border-4 border-black bg-neo-secondary p-4 font-black uppercase tracking-wide">
                    {contactStatus}
                  </div>
                )}
              </form>

              <a className="neo-button mt-6 inline-flex min-h-12 items-center justify-center gap-3 bg-black px-5 py-3 font-black uppercase tracking-wide text-white shadow-neo-sm" href="#top">
                <ArrowUpRight strokeWidth={4} /> BACK TO TOP
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-b-4 border-black bg-black px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-4xl font-black uppercase tracking-tighter">MITHUN S</div>
            <p className="mt-2 font-bold uppercase tracking-widest">CODE • CREATE • REPEAT</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="border-4 border-white bg-neo-accent px-4 py-3 font-black text-black">© 2026</span>
            <span className="border-4 border-white bg-neo-secondary px-4 py-3 font-black text-black">BUILT BY MITHUN</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;