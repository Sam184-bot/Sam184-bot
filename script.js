:root {
  --bg: #f7f1ec;
  --bg-soft: #f1e9e2;
  --surface: rgba(255, 255, 255, 0.7);
  --surface-strong: #fff;
  --primary: #60462a;
  --primary-soft: #8d6b52;
  --accent: #c28d62;
  --accent-soft: #e8d5c5;
  --text: #2b211d;
  --muted: #6d584c;
  --line: rgba(96, 70, 42, 0.16);
  --shadow: 0 20px 45px rgba(58, 39, 25, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #f7f1ec 0%, #f3eee7 100%);
  color: var(--text);
  line-height: 1.7;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(12px);
  background: rgba(247, 241, 236, 0.78);
  border-bottom: 1px solid var(--line);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
  gap: 1rem;
}

.brand {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--primary-soft));
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.1em;
}

nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: var(--muted);
  font-size: 0.96rem;
}

nav a {
  transition: color 0.2s ease;
}

nav a:hover,
nav a:focus-visible {
  color: var(--primary);
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0.8rem 1.4rem;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--primary), var(--primary-soft));
  color: #fff;
  font-weight: 600;
  border: 1px solid transparent;
  box-shadow: var(--shadow);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.button:hover,
.button:focus-visible {
  transform: translateY(-2px);
}

.button-small {
  min-height: 40px;
  padding: 0.65rem 1rem;
  font-size: 0.88rem;
}

.button-secondary {
  background: transparent;
  border-color: var(--line);
  color: var(--primary);
  box-shadow: none;
}

.hero {
  padding: 6rem 0 4rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.35fr 0.8fr;
  align-items: center;
  gap: 2rem;
}

.eyebrow {
  margin: 0 0 0.8rem;
  font-size: 0.8rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--primary-soft);
  font-weight: 600;
}

h1,
h2,
h3 {
  margin: 0 0 1rem;
  color: var(--text);
  line-height: 1.12;
  font-family: "Cormorant Garamond", serif;
}

h1 {
  font-size: clamp(3.5rem, 6vw, 5.2rem);
  font-weight: 600;
}

h2 {
  font-size: clamp(2.4rem, 4vw, 3.4rem);
  font-weight: 600;
}

h3 {
  font-size: clamp(1.7rem, 2vw, 2.3rem);
}

.intro {
  max-width: 62ch;
  font-size: 1.08rem;
  color: var(--muted);
  margin-bottom: 2rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hero-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.86), rgba(241,233,226,0.96));
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: var(--shadow);
}

.mini-title {
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary-soft);
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero-card ul {
  padding-left: 1.1rem;
  margin: 0;
  color: var(--muted);
}

.hero-card li + li {
  margin-top: 0.7rem;
}

.section {
  padding: 4.5rem 0;
}

.alt {
  background: rgba(255, 255, 255, 0.18);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.two-column {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 2rem;
  align-items: start;
}

.text-block {
  color: var(--muted);
  font-size: 1.06rem;
}

.text-block p {
  margin-top: 0;
}

.timeline {
  margin-top: 2rem;
  display: grid;
  gap: 1.5rem;
}

.timeline-item {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 1.2rem;
  background: rgba(255,255,255,0.66);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 1.5rem 1.4rem;
  box-shadow: 0 15px 35px rgba(58, 39, 25, 0.08);
}

.year {
  font-weight: 700;
  color: var(--primary-soft);
}

.detail p {
  margin: 0;
  color: var(--muted);
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.skill-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.8), rgba(232,213,197,0.4));
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 1.2rem 1rem;
  text-align: center;
  font-weight: 600;
  color: var(--primary);
}

.software-wrap {
  margin-top: 2.8rem;
}

.tag-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tag-list li {
  background: var(--accent-soft);
  color: var(--primary);
  padding: 0.65rem 0.9rem;
  border-radius: 999px;
  font-weight: 600;
  border: 1px solid rgba(194, 141, 98, 0.35);
}

.project-grid {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 1.3rem;
}

.project-card {
  background: rgba(255,255,255,0.72);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 1.5rem;
  box-shadow: 0 15px 30px rgba(58, 39, 25, 0.08);
}

.project-tag {
  display: inline-block;
  margin-bottom: 0.8rem;
  background: var(--accent-soft);
  color: var(--primary);
  border-radius: 999px;
  padding: 0.4rem 0.8rem;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.project-card p {
  margin: 0;
  color: var(--muted);
}

.strengths-layout {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 2rem;
  align-items: start;
}

.strengths {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(180px, 1fr));
  gap: 1rem;
}

.strengths li {
  background: rgba(255,255,255,0.7);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 1rem 1rem;
  color: var(--primary);
  font-weight: 600;
}

.footer {
  border-top: 1px solid var(--line);
  background: rgba(255,255,255,0.22);
  padding: 2rem 0 1.2rem;
}

.footer-grid {
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  align-items: end;
  flex-wrap: wrap;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  color: var(--muted);
}

.footer-bottom {
  margin-top: 1.5rem;
  padding-top: 0.9rem;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.92rem;
}

.reveal {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 900px) {
  .hero-grid,
  .two-column,
  .strengths-layout {
    grid-template-columns: 1fr;
  }

  .project-grid,
  .skill-grid,
  .strengths {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .nav {
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.8rem 0;
  }

  nav {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero {
    padding-top: 4rem;
  }

  .hero-card,
  .timeline-item,
  .project-card {
    padding: 1.2rem;
  }

  .timeline-item {
    grid-template-columns: 1fr;
  }

  .project-grid,
  .skill-grid,
  .strengths {
    grid-template-columns: 1fr;
  }
}
