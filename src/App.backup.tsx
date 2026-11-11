
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Bell,
  CalendarDays,
  Check,
  ChevronDown,
  Leaf,
  Menu,
  Moon,
  Package,
  Refrigerator,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Sun,
  Wheat,
  X,
} from "lucide-react";

type Theme = "light" | "dark";

const faqs = [
  {
    q: "What is SortFresh?",
    a: "SortFresh helps you organise food across your fridge, freezer and pantry, while keeping track of expiry dates.",
  },
  {
    q: "Is SortFresh free?",
    a: "SortFresh is initially available as a free application.",
  },
  {
    q: "Can I track pantry items?",
    a: "Absolutely! Manage room-temperature groceries, grains, pulses and other pantry essentials.",
  },
  {
    q: "Will I receive expiry reminders?",
    a: "Yes. Configure your notification preferences to receive timely reminders about food that needs attention.",
  },
];

const benefits = [
  { icon: Refrigerator, title: "Fridge & Pantry", desc: "Together in sync" },
  { icon: Bell, title: "Smart Reminders", desc: "Right on time" },
  { icon: Leaf, title: "Less Food Waste", desc: "Use what you have" },
  { icon: Sparkles, title: "More Freshness", desc: "A happier kitchen" },
];

function Brand() {
  return (
    <a href="#" className="brand" aria-label="SortFresh home">
      <span className="brand-mark"><Leaf size={21} /></span>
      <span>SortFresh<span className="brand-dot">.</span></span>
    </a>
  );
}

function PlayButton({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#download"
      className={`play-button ${light ? "play-button-light" : ""}`}
    >
      <svg viewBox="0 0 48 48" width="31" height="31" aria-hidden="true">
        <path d="M8 5L28 24L8 43C6 42 5 40 5 37V11C5 8 6 6 8 5Z" fill="#20C96B" />
        <path d="M8 5L33 19L28 24Z" fill="#35A9FF" />
        <path d="M28 24L33 29L8 43Z" fill="#FBC02D" />
        <path d="M28 24L33 19L41 23C44 25 44 27 41 29L33 33L28 24Z" fill="#EA4335" />
      </svg>
      <span className="play-copy">
        <small>GET IT ON</small>
        <strong>Google Play</strong>
      </span>
    </a>
  );
}

/* Organic SVG section transition */
function Wave({ variant = 1 }: { variant?: number }) {
  const paths = [
    "M0 55 C180 110 340 5 540 48 C750 94 910 112 1200 42 L1200 120 L0 120 Z",
    "M0 35 C220 105 370 105 570 45 C800 -10 1000 80 1200 40 L1200 120 L0 120 Z",
    "M0 60 C180 5 370 15 560 70 C790 130 970 5 1200 50 L1200 120 L0 120 Z",
  ];

  return (
    <div className={`wave wave-${variant}`} aria-hidden="true">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d={paths[(variant - 1) % paths.length]} />
      </svg>
    </div>
  );
}

function KitchenIllustration() {
  return (
    <div className="kitchen-scene">
      <div className="scene-sun" />
      <div className="scene-window">
        <span className="window-light" />
      </div>

      <div className="scene-plant">🌿</div>

      <div className="scene-fridge">
        <div className="fridge-light" />
        <div className="fridge-top">
          <span>🥛</span><span>🥚</span><span>🥬</span>
        </div>
        <div className="fridge-shelf">
          <span>🫐</span><span>🍅</span><span>🥕</span>
        </div>
        <div className="fridge-shelf">
          <span>🥬</span><span>🫑</span><span>🥒</span>
        </div>
        <div className="fridge-bottom">
          <span>🥦</span><span>🍋</span><span>🍎</span>
        </div>
        <div className="fridge-handle" />
      </div>

      <div className="scene-pantry">
        <div className="pantry-shelf"><span>🫙</span><span>🫙</span><span>🫙</span></div>
        <div className="pantry-shelf"><span>🫘</span><span>🌾</span><span>🥜</span></div>
        <div className="pantry-shelf"><span>🍎</span><span>🍌</span><span>🍊</span></div>
      </div>

      <div className="scene-counter">
        <span>🥬</span><span>🍅</span><span>🥕</span>
      </div>

      <div className="floating-note note-one">
        <Leaf size={17} /><span>Less food waste</span>
      </div>
      <div className="floating-note note-two">
        <Bell size={17} /><span>Never miss an expiry</span>
      </div>
    </div>
  );
}

function PhonePreview() {
  const foods = [
    ["🥛", "Milk", "Fridge · 2 days", "2 days"],
    ["🍅", "Tomatoes", "Fridge · 3 days", "3 days"],
    ["🥬", "Lettuce", "Fridge · 4 days", "4 days"],
  ];

  return (
    <div className="phone-shell">
      <div className="phone-screen">
        <div className="phone-status"><span>9:41</span><span>● ● ● ▰</span></div>

        <div className="phone-header">
          <div className="phone-brand"><span className="brand-mark"><Leaf size={14} /></span>SortFresh</div>
          <Bell size={18} />
        </div>

        <div className="phone-greeting">
          <h3>Good Morning! ☀️</h3>
          <p>Your kitchen at a glance</p>
        </div>

        <div className="phone-stats">
          <div className="phone-stat fresh"><strong>14</strong><span>Fresh</span></div>
          <div className="phone-stat expiring"><strong>03</strong><span>Expiring</span></div>
          <div className="phone-stat expired"><strong>01</strong><span>Expired</span></div>
        </div>

        <div className="phone-alert">
          <span className="alert-emoji">🥬</span>
          <div><strong>Use it soon!</strong><small>3 items need your attention.</small></div>
          <ArrowRight size={16} />
        </div>

        <div className="phone-food-heading"><strong>Your food</strong><span>View all</span></div>

        {foods.map((food) => (
          <div className="phone-food-row" key={food[1]}>
            <span className="food-emoji">{food[0]}</span>
            <div className="food-info"><strong>{food[1]}</strong><small>{food[2]}</small></div>
            <span className="food-time">{food[3]}</span>
          </div>
        ))}

        <div className="phone-nav">
          <span>⌂<small>Home</small></span>
          <span>▣<small>Fridge</small></span>
          <span className="phone-add">+</span>
          <span>♧<small>Shelf</small></span>
          <span>☻<small>Account</small></span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = localStorage.getItem("sortfresh-theme") as Theme | null;

    const initialTheme =
      saved === "light" || saved === "dark"
        ? saved
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("sortfresh-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => current === "light" ? "dark" : "light");
  };

  const navigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMobileMenu(false);
  };

  return (
    <div className="sortfresh-page">

      <style>{`
        /* THEME VARIABLES */

        .sortfresh-page {
          --forest: var(--text-primary);
          --green: var(--accent);
          --muted: var(--text-muted);
          --cream: var(--bg-primary);
          background: var(--bg-primary);
          color: var(--text-primary);
          font-family: "DM Sans", sans-serif;
          overflow: hidden;
          transition: background .3s, color .3s;
        }

        .sortfresh-page h1,
        .sortfresh-page h2,
        .sortfresh-page h3,
        .sortfresh-page h4 {
          font-family: "Manrope", sans-serif;
        }

        .sortfresh-page button,
        .sortfresh-page a {
          -webkit-tap-highlight-color: transparent;
        }

        .sortfresh-page button { cursor: pointer; }

        /* BRAND */

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          font-family: "Manrope", sans-serif;
          font-size: 23px;
          font-weight: 800;
          letter-spacing: -1px;
          color: var(--text-primary);
          text-decoration: none;
        }

        .brand-dot { color: var(--accent); }

        .brand-mark {
          width: 39px;
          height: 39px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 13px;
          background: linear-gradient(145deg,#48C99A,#16815D);
          color: white;
          box-shadow: 0 6px 18px #36B58C30;
        }

        /* NAVIGATION */

        .site-nav {
          height: 78px;
          position: fixed;
          inset: 0 0 auto;
          z-index: 50;
          background: var(--nav-bg);
          backdrop-filter: blur(22px);
          border-bottom: 1px solid var(--border);
        }

        .nav-inner {
          max-width: 1400px;
          margin: auto;
          height: 100%;
          padding: 0 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 34px;
        }

        .nav-links button,
        .mobile-menu > button:not(.nav-cta) {
          background: none;
          border: 0;
          color: var(--text-secondary);
          font-size: 13px;
          font-weight: 600;
          transition: color .2s;
        }

        .nav-links button:hover { color: var(--accent); }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .theme-toggle {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border: 1px solid var(--border);
          border-radius: 50%;
          background: var(--bg-card);
          color: var(--text-primary);
          transition: .25s;
        }

        .theme-toggle:hover {
          transform: rotate(12deg);
          border-color: var(--accent);
          color: var(--accent);
        }

      .nav-cta {
  background: var(--text-primary);
          color: white;
          padding: 12px 23px;
          border-radius: 30px;
          border: 0;
          font-size: 13px;
          font-weight: 700;
          transition: .25s;
        }

        .nav-cta:hover {
          transform: translateY(-3px);
          background: #287451;
          box-shadow: 0 9px 20px #36B58C30;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: 0;
          color: var(--text-primary);
        }

        /* HERO */

        .hero {
          min-height: 790px;
          padding: 145px 5% 105px;
          position: relative;
          background:
            radial-gradient(ellipse at 83% 28%,#F6DAB866 0%,transparent 40%),
            radial-gradient(ellipse at 8% 85%,#B9D9A955 0%,transparent 38%),
            var(--bg-primary);
        }

        [data-theme="dark"] .hero {
          background:
            radial-gradient(ellipse at 83% 28%,#75533238 0%,transparent 40%),
            radial-gradient(ellipse at 8% 85%,#285B4645 0%,transparent 38%),
            var(--bg-primary);
        }

        .hero-inner {
          max-width: 1350px;
          margin: auto;
          display: grid;
          grid-template-columns: .88fr 1.12fr;
          align-items: center;
          gap: 35px;
        }

        .hero-copy { position: relative; z-index: 4; }

        .eyebrow, .section-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 16px;
          border-radius: 30px;
          background: var(--surface-sage);
          color: var(--text-primary);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.1px;
        }

        .hero h1 {
          font-size: clamp(53px,6.2vw,86px);
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: -5px;
          margin: 26px 0 0;
          color: var(--text-primary);
        }

        .hero h1 em {
          font-style: normal;
          color: var(--accent);
          position: relative;
          white-space: nowrap;
        }

        .hero h1 em:after {
          content: "";
          position: absolute;
          height: 8px;
          left: 0;
          right: 0;
          bottom: -8px;
          border-radius: 100%;
          background: var(--accent);
          opacity: .32;
          transform: rotate(-2deg);
        }

        .hero-description {
          color: var(--text-secondary);
          font-size: 16px;
          line-height: 1.9;
          max-width: 420px;
          margin: 29px 0;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .free-tag {
          background: var(--surface-sage);
          color: var(--text-primary);
          padding: 11px 16px;
          border-radius: 30px;
          font-size: 12px;
          font-weight: 700;
        }

        .play-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          border-radius: 14px;
          background: #0C3328;
          color: white;
          text-decoration: none;
          box-shadow: 0 8px 22px #194c3b24;
          transition: .3s;
        }

        .play-button:hover { transform: translateY(-4px); }

        .play-button-light {
          background: white;
          color: #194C3B;
        }

        .play-copy { display: flex; flex-direction: column; }
        .play-copy small { font-size: 8px; letter-spacing: 1px; }
        .play-copy strong { font-size: 16px; }

        /* HERO VISUAL */

        .hero-visual {
          min-height: 565px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-visual:before {
          content: "";
          position: absolute;
          width: 470px;
          height: 470px;
          border-radius: 50%;
          background: linear-gradient(145deg,#F7E2B6,#DDEACD);
          opacity: .9;
        }

        [data-theme="dark"] .hero-visual:before {
          background: linear-gradient(145deg,#655039,#294E39);
          opacity: .7;
        }

        .kitchen-scene {
          position: relative;
          width: 100%;
          max-width: 590px;
          height: 460px;
          border-radius: 48% 48% 28px 28px;
          overflow: hidden;
          background: linear-gradient(150deg,#F8E4C7,#EAD4B0 60%,#C9A779);
          box-shadow: 0 28px 75px #78512a30;
        }

        .scene-sun {
          position: absolute;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          top: 30px;
          left: 10%;
          background: #FFF7CB;
          opacity: .7;
        }

        .scene-window {
          position: absolute;
          right: 7%;
          top: 0;
          width: 37%;
          height: 46%;
          border: 9px solid #FFF7E6;
          background: linear-gradient(140deg,#E8F5CE,#B4D8A2);
        }

        .window-light {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg,transparent,#FFFFFF65,transparent);
        }

        .scene-plant {
          position: absolute;
          top: -13px;
          right: 5%;
          font-size: 100px;
          transform: rotate(-12deg);
          filter: drop-shadow(0 10px 5px #234d3c22);
          z-index: 2;
        }

        .scene-fridge {
          position: absolute;
          left: 7%;
          top: 14%;
          width: 44%;
          height: 70%;
          border-radius: 24px 24px 12px 12px;
          background: linear-gradient(100deg,#507D51,#B0C78C 25%,#789A65);
          border: 7px solid #6F8C5C;
          box-shadow: 12px 15px 25px #46381e30;
          padding: 14px 10px;
          z-index: 2;
        }

        .fridge-light {
          position: absolute;
          top: 9px;
          left: 30%;
          width: 40%;
          height: 5px;
          border-radius: 8px;
          background: #E6F5E3;
          box-shadow: 0 0 14px white;
        }

        .fridge-top, .fridge-shelf, .fridge-bottom {
          height: 24%;
          background: #F8F5E9;
          border-bottom: 5px solid #D8D3C1;
          display: flex;
          align-items: center;
          justify-content: space-around;
          font-size: 25px;
          margin-top: 7px;
          border-radius: 5px;
        }

        .fridge-handle {
          position: absolute;
          right: 8px;
          top: 43%;
          height: 60px;
          width: 5px;
          border-radius: 10px;
          background: #E6E2D3;
        }

        .scene-pantry {
          position: absolute;
          right: 6%;
          top: 24%;
          width: 38%;
          height: 56%;
          background: #B77937;
          padding: 9px;
          box-shadow: 8px 15px 25px #54321c38;
          display: flex;
          flex-direction: column;
          gap: 6px;
          z-index: 1;
        }

        .pantry-shelf {
          flex: 1;
          background: #F3D3A0;
          border-bottom: 7px solid #A66D34;
          display: flex;
          align-items: center;
          justify-content: space-around;
          font-size: 27px;
        }

        .scene-counter {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 19%;
          background: linear-gradient(90deg,#E9BC82,#FFF0D7);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 25px;
          font-size: 38px;
          z-index: 3;
        }

        .floating-note {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 13px 16px;
          border-radius: 16px;
          background: #FFFCF3;
          color: #3B9664;
          box-shadow: 0 12px 28px #3c5e3b20;
          font-size: 11px;
          font-weight: 800;
          animation: float 4s ease-in-out infinite;
          z-index: 4;
        }

        .note-one { left: -3%; top: 16%; }
        .note-two { right: -2%; bottom: 18%; color: #BC913E; animation-delay: 1s; }

        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .hero-phone {
          position: absolute;
          z-index: 5;
          right: 0;
          top: 3%;
          transform: rotate(6deg);
          animation: phoneFloat 6s ease-in-out infinite;
        }

        @keyframes phoneFloat {
          0%,100% { transform: rotate(6deg) translateY(0); }
          50% { transform: rotate(4deg) translateY(-12px); }
        }

        /* PHONE MOCKUP */

        .phone-shell {
          width: 260px;
          height: 520px;
          background: #173C2F;
          border: 7px solid #26382F;
          border-radius: 39px;
          padding: 7px;
          box-shadow: 0 25px 50px #172e2450;
        }

        .phone-screen {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 29px;
          padding: 14px 12px;
          background: #FFF9EF;
          color: #194C3B;
        }

        .phone-status {
          display: flex;
          justify-content: space-between;
          font-size: 9px;
          font-weight: 700;
        }

        .phone-header, .phone-brand {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .phone-header { margin-top: 18px; }
        .phone-brand { gap: 7px; font-size: 12px; font-weight: 800; }
        .phone-brand .brand-mark { width: 27px; height: 27px; border-radius: 9px; }

        .phone-greeting { margin-top: 24px; }
        .phone-greeting h3 { margin: 0; font-size: 18px; color: #194C3B; }
        .phone-greeting p { margin: 3px 0; font-size: 10px; color: #87968B; }

        .phone-stats {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 7px;
          margin-top: 17px;
        }

        .phone-stat {
          height: 74px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          font-size: 9px;
          font-weight: 700;
        }

        .phone-stat strong { font-size: 23px; }
        .fresh { background: #E3F3DE; color: #39824D; }
        .expiring { background: #FFF0D5; color: #D88B29; }
        .expired { background: #FCE4DC; color: #CE5E47; }

        .phone-alert {
          margin-top: 15px;
          padding: 11px;
          display: flex;
          align-items: center;
          gap: 9px;
          border-radius: 13px;
          background: #FFF0CD;
          color: #7B713F;
        }

        .alert-emoji { font-size: 24px; }
        .phone-alert div { flex: 1; display: flex; flex-direction: column; }
        .phone-alert strong { font-size: 11px; }
        .phone-alert small { font-size: 9px; }

        .phone-food-heading {
          display: flex;
          justify-content: space-between;
          margin-top: 18px;
          font-size: 12px;
        }

        .phone-food-heading span { color: #36A987; font-weight: 700; }

        .phone-food-row {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 7px;
          border-radius: 11px;
          margin-top: 7px;
          background: white;
          box-shadow: 0 3px 10px #394f3210;
        }

        .food-emoji { font-size: 23px; }
        .food-info { display: flex; flex-direction: column; flex: 1; }
        .food-info strong { font-size: 11px; }
        .food-info small { font-size: 8px; color: #92978D; }
        .food-time { font-size: 9px; font-weight: 700; color: #A77B36; }

        .phone-nav {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 48px;
          background: #FFFCF4;
          border-top: 1px solid #eee8db;
          display: flex;
          justify-content: space-around;
          align-items: center;
          color: #63816D;
          font-size: 17px;
        }

        .phone-nav span { display: flex; flex-direction: column; align-items: center; }
        .phone-nav small { font-size: 7px; }
        .phone-nav .phone-add {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #35B58B;
          color: white;
          justify-content: center;
          font-size: 22px;
        }

        /* CURVED TRANSITIONS */

        .wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 85px;
          pointer-events: none;
          line-height: 0;
        }

        .wave svg { width: 100%; height: 100%; display: block; }
        .wave path { fill: var(--wave-fill); }

        .hero { --wave-fill: var(--bg-secondary); }
        .storage-section { --wave-fill: var(--bg-primary); }
        .steps-section { --wave-fill: var(--bg-tertiary); }
        .showcase-section { --wave-fill: var(--bg-primary); }

        /* BENEFITS */

        .benefit-strip {
          position: relative;
          padding: 55px 5%;
          background: var(--bg-secondary);
        }

        .benefit-inner {
          max-width: 1280px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 15px;
        }

        .benefit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          padding: 12px;
        }

        .benefit-icon {
          width: 57px;
          height: 57px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 19px;
          background: var(--surface-sage);
          color: var(--accent);
        }

        .benefit h3 { font-size: 14px; margin: 0 0 5px; }
        .benefit p { font-size: 11px; color: var(--text-muted); margin: 0; }

        /* COMMON SECTIONS */

        .section-wrap {
          padding: 115px 5% 140px;
          position: relative;
        }

        .section-inner { max-width: 1280px; margin: auto; }

        .section-heading { text-align: center; margin-bottom: 65px; }

        .section-heading h2 {
          font-size: clamp(33px,4vw,53px);
          font-weight: 800;
          letter-spacing: -2.5px;
          line-height: 1.15;
          margin: 19px 0 0;
          color: var(--text-primary);
        }

        .section-heading p {
          font-size: 14px;
          color: var(--text-muted);
          margin: 16px auto 0;
          max-width: 460px;
          line-height: 1.8;
        }

        /* STORAGE */

        .storage-section { background: var(--bg-secondary); }

        .storage-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 24px;
        }

        .storage-card {
          min-height: 390px;
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          padding: 30px;
          transition: .35s;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid var(--border);
        }

        .storage-card:hover {
          transform: translateY(-9px);
          box-shadow: var(--shadow);
        }

        .storage-card h3 { font-size: 26px; margin: 0; letter-spacing: -1px; }
        .storage-card p { font-size: 12px; color: var(--text-secondary); margin-top: 8px; }

        .storage-card:nth-child(1) { background: #DFEAD5; color: #194C3B; }
        .storage-card:nth-child(2) { background: #FBE8CB; color: #654D2C; }
        .storage-card:nth-child(3) { background: #F4E2D2; color: #654735; }

        [data-theme="dark"] .storage-card:nth-child(1) { background: #263E30; color: #E6F1E8; }
        [data-theme="dark"] .storage-card:nth-child(2) { background: #423729; color: #F3E5CF; }
        [data-theme="dark"] .storage-card:nth-child(3) { background: #42332C; color: #F1DFD2; }

        .storage-circle {
          position: absolute;
          width: 230px;
          height: 230px;
          border-radius: 50%;
          background: #ffffff55;
          top: 110px;
          left: 50%;
          transform: translateX(-50%);
        }

        .storage-art {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 205px;
          font-size: 80px;
          filter: drop-shadow(0 15px 12px #304d2920);
          transition: .4s;
        }

        .storage-card:hover .storage-art { transform: scale(1.1) rotate(-3deg); }

        .storage-caption {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 12px;
          font-weight: 800;
        }

        /* STEPS */

        .steps-section { background: var(--bg-primary); }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 35px;
        }

        .step-card { text-align: center; }

        .step-art {
          height: 255px;
          border-radius: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 92px;
          position: relative;
          overflow: hidden;
          margin-bottom: 25px;
        }

        .step-card:nth-child(1) .step-art { background: #EAF0DB; }
        .step-card:nth-child(2) .step-art { background: #FCE9C9; }
        .step-card:nth-child(3) .step-art { background: #E5F0DC; }

        [data-theme="dark"] .step-card:nth-child(1) .step-art { background: #263D30; }
        [data-theme="dark"] .step-card:nth-child(2) .step-art { background: #41372B; }
        [data-theme="dark"] .step-card:nth-child(3) .step-art { background: #253E32; }

        .step-art:before {
          content: "";
          width: 190px;
          height: 190px;
          position: absolute;
          border-radius: 50%;
          background: #ffffff55;
        }

        .step-art > span:last-child { position: relative; z-index: 1; }

        .step-number {
          position: absolute;
          top: 17px;
          left: 17px;
          width: 37px;
          height: 37px;
          border-radius: 50%;
          background: var(--accent);
          color: white;
          display: grid;
          place-items: center;
          font-size: 14px;
          font-weight: 800;
          box-shadow: 0 4px 10px #194c3b22;
        }

        .step-card h3 { font-size: 20px; margin: 0; }
        .step-card p { color: var(--text-muted); font-size: 13px; line-height: 1.8; max-width: 290px; margin: 10px auto; }

        /* SHOWCASE */

        .showcase-section { background: var(--bg-tertiary); }

        .showcase-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 28px;
          align-items: center;
        }

        .showcase-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 29px;
          padding: 17px;
          box-shadow: var(--shadow);
          min-height: 345px;
          transition: .35s;
        }

        .showcase-card:nth-child(2) { transform: translateY(-25px); }
        .showcase-card:hover { transform: translateY(-10px); }
        .showcase-card:nth-child(2):hover { transform: translateY(-35px); }

        .showcase-screen {
          background: var(--bg-tertiary);
          border-radius: 20px;
          padding: 18px 13px;
          min-height: 225px;
          color: var(--text-primary);
        }

        .showcase-screen strong { font-family: "Manrope", sans-serif; }

        .mock-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          background: var(--bg-card);
          color: var(--text-primary);
          border-radius: 12px;
          margin-top: 8px;
          font-size: 12px;
          font-weight: 700;
        }

        .mock-tile {
          padding: 13px;
          border-radius: 13px;
          background: var(--surface-sage);
          font-size: 11px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .showcase-title { font-size: 17px; font-weight: 800; margin: 17px 0 6px; }
        .showcase-description { color: var(--text-muted); font-size: 12px; margin: 0; }

        /* DOWNLOAD CTA */

        .cta-section {
          padding: 90px 5% 115px;
          background: var(--bg-primary);
        }

        .cta-banner {
          max-width: 1280px;
          margin: auto;
          min-height: 320px;
          padding: 55px 7%;
          background:
            radial-gradient(circle at 90% 20%,#4B9D65 0,transparent 30%),
            linear-gradient(120deg,#174D39,#286A4B);
          border-radius: 38px;
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 55px #194c3b25;
        }

        .cta-banner:after {
          content: "✦";
          position: absolute;
          right: 30%;
          bottom: -130px;
          font-size: 300px;
          color: #ffffff0b;
          pointer-events: none;
        }

        .cta-banner h2 {
          font-size: clamp(35px,4vw,54px);
          line-height: 1.1;
          letter-spacing: -2.5px;
          font-weight: 800;
          margin: 0;
          color: white;
        }

        .cta-banner p { color: #D4E7D6; font-size: 14px; margin-top: 15px; }

        /* FAQ */

        .faq-section { background: var(--bg-secondary); }

        .faq-list { max-width: 780px; margin: auto; }

        .faq-item {
          border: 1px solid var(--border);
          background: var(--bg-card);
          border-radius: 18px;
          margin-bottom: 13px;
          overflow: hidden;
          transition: .2s;
        }

        .faq-item button {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 21px 24px;
          text-align: left;
          background: transparent;
          border: 0;
          color: var(--text-primary);
          font-weight: 700;
          font-size: 14px;
        }

        .faq-item button svg { color: var(--accent); transition: transform .3s; }
        .faq-item button[aria-expanded="true"] svg { transform: rotate(180deg); }

        .faq-item p {
          padding: 0 24px 22px;
          margin: 0;
          color: var(--text-muted);
          font-size: 13px;
          line-height: 1.8;
        }

        /* FOOTER */

        .footer {
          background: var(--bg-tertiary);
          padding: 48px 5%;
        }

        .footer-inner {
          max-width: 1280px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .footer p { color: var(--text-muted); font-size: 11px; line-height: 1.8; }
        .footer strong { color: var(--text-primary); }

        /* MOBILE MENU */

        .mobile-menu {
          position: absolute;
          top: 68px;
          left: 0;
          right: 0;
          padding: 23px 6% 27px;
          background: var(--bg-secondary);
          box-shadow: var(--shadow);
          display: flex;
          flex-direction: column;
          gap: 19px;
        }

        .mobile-menu .nav-cta { text-align: center; }
        .mobile-theme-row { display: flex; align-items: center; justify-content: space-between; color: var(--text-secondary); font-size: 13px; font-weight: 700; }

        /* RESPONSIVE */

        @media(max-width:1050px) {
          .hero-inner { grid-template-columns: 1fr 1fr; gap: 10px; }
          .hero h1 { font-size: 57px; letter-spacing: -3px; }
          .hero-visual { transform: scale(.9); }
          .benefit { flex-direction: column; text-align: center; }
          .hero-phone { right: -3%; }
        }

        @media(max-width:760px) {
          .site-nav { height: 68px; }
          .nav-inner { padding: 0 5%; }
          .nav-links, .desktop-cta { display: none; }
          .menu-toggle { display: block; }
          .brand { font-size: 21px; }
          .hero { padding: 125px 5% 105px; min-height: auto; }
          .hero-inner { grid-template-columns: 1fr; gap: 5px; }
          .hero h1 { font-size: clamp(49px,12vw,68px); letter-spacing: -3px; }
          .hero-description { font-size: 14px; margin: 22px 0; }
          .hero-visual { min-height: 440px; transform: none; margin-top: 15px; }
          .kitchen-scene { height: 355px; max-width: 440px; }
          .hero-visual:before { width: 330px; height: 330px; }
          .scene-fridge { left: 7%; height: 68%; }
          .scene-pantry { right: 5%; }
          .scene-plant { font-size: 70px; }
          .scene-counter { font-size: 25px; }
          .hero-phone { right: 0; top: 0; transform: scale(.66) rotate(6deg); transform-origin: top right; }
          .phone-shell { width: 240px; height: 490px; }
          .note-one { top: 5%; left: -5px; }
          .note-two { right: -5px; bottom: 8%; }
          .floating-note { font-size: 9px; padding: 9px 11px; }
          .wave { height: 52px; }
          .benefit-strip { padding: 35px 5%; }
          .benefit-inner { grid-template-columns: repeat(2,1fr); gap: 23px 10px; }
          .benefit { padding: 8px 2px; }
          .benefit-icon { width: 49px; height: 49px; }
          .benefit h3 { font-size: 12px; }
          .benefit p { font-size: 10px; }
          .section-wrap { padding: 80px 5% 100px; }
          .section-heading { margin-bottom: 40px; }
          .section-heading h2 { font-size: 34px; letter-spacing: -1.5px; }
          .storage-grid { grid-template-columns: 1fr; gap: 17px; }
          .storage-card { min-height: 300px; padding: 25px; }
          .storage-art { height: 155px; font-size: 75px; }
          .steps-grid { grid-template-columns: 1fr; gap: 35px; }
          .step-art { height: 220px; }
          .showcase-grid { grid-template-columns: 1fr; gap: 20px; }
          .showcase-card { min-height: 300px; }
          .showcase-card:nth-child(2), .showcase-card:nth-child(2):hover { transform: none; }
          .showcase-screen { min-height: 200px; }
          .cta-section { padding: 45px 5% 80px; }
          .cta-banner { padding: 37px 25px; min-height: 320px; flex-direction: column; align-items: flex-start; border-radius: 27px; }
          .cta-banner h2 { font-size: 38px; }
          .footer-inner { flex-direction: column; align-items: flex-start; }
          .footer-inner > div:last-child { text-align: left; }
        }

        @media(prefers-reduced-motion:reduce) {
          *,*::before,*::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* NAVIGATION */}
      <header className="site-nav">
        <div className="nav-inner">
          <Brand />

          <nav className="nav-links" aria-label="Main navigation">
            <button onClick={() => navigate("features")}>Features</button>
            <button onClick={() => navigate("how-it-works")}>How it works</button>
            <button onClick={() => navigate("screenshots")}>Inside SortFresh</button>
            <button onClick={() => navigate("faq")}>FAQ</button>
          </nav>

          <div className="nav-actions desktop-cta">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
              title="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <span className="text-[10px] text-right" style={{ color: "var(--text-muted)" }}>
              A product by<br />
              <strong style={{ color: "var(--text-primary)" }}>BRC Hub LLP</strong>
            </span>

            <button className="nav-cta" onClick={() => navigate("download")}>
              Get the App <ArrowRight size={14} className="inline ml-1" />
            </button>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenu}
          >
            {mobileMenu ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {mobileMenu && (
          <div className="mobile-menu">
            <button onClick={() => navigate("features")}>Features</button>
            <button onClick={() => navigate("how-it-works")}>How it works</button>
            <button onClick={() => navigate("screenshots")}>Inside SortFresh</button>
            <button onClick={() => navigate("faq")}>FAQ</button>

            <div className="mobile-theme-row">
              <span>Appearance</span>
              <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>

            <button className="nav-cta" onClick={() => navigate("download")}>
              Get the App <ArrowRight size={14} className="inline" />
            </button>
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="eyebrow">
                <Sparkles size={15} />
                YOUR KITCHEN, REIMAGINED
              </div>

              <h1>
                Keep Your<br />
                Kitchen <em>Fresh.</em>
              </h1>

              <p className="hero-description">
                A happier kitchen. Less waste. More freshness.
                Everything in its place, from fridge to pantry.
              </p>

              <div className="hero-actions">
                <button
                  className="nav-cta !px-6 !py-4"
                  onClick={() => navigate("screenshots")}
                >
                  Explore SortFresh <ArrowRight size={17} className="inline ml-2" />
                </button>
                <span className="free-tag">
                  <Leaf size={13} className="inline mr-1" />
                  Free to use
                </span>
              </div>

              <div className="flex items-center gap-3 mt-8 text-[11px]" style={{ color: "var(--text-muted)" }}>
                <ShieldCheck size={17} style={{ color: "var(--accent)" }} />
                Made for everyday kitchens
              </div>
            </div>

            <div className="hero-visual">
              <KitchenIllustration />
              <div className="hero-phone"><PhonePreview /></div>
            </div>
          </div>

          <Wave variant={1} />
        </section>

        {/* BENEFITS */}
        <section className="benefit-strip">
          <div className="benefit-inner">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div className="benefit" key={title}>
                <div className="benefit-icon"><Icon size={26} /></div>
                <div><h3>{title}</h3><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="section-wrap storage-section">
          <div className="section-inner">
            <div className="section-heading">
              <span className="section-label"><Leaf size={14} /> ONE CONNECTED KITCHEN</span>
              <h2>Every corner, taken care of.</h2>
              <p>From fresh produce to pantry essentials, keep your entire kitchen organised.</p>
            </div>

            <div className="storage-grid">
              <article className="storage-card">
                <div><h3>Your Fridge</h3><p>Keep fresh food in check.</p></div>
                <div className="storage-circle" />
                <div className="storage-art">🥬🥛🍅</div>
                <div className="storage-caption"><Refrigerator size={17} /> Fresh & organised</div>
              </article>

              <article className="storage-card">
                <div><h3>Your Freezer</h3><p>Keep frozen essentials tracked.</p></div>
                <div className="storage-circle" />
                <div className="storage-art">🧊❄️🍓</div>
                <div className="storage-caption"><Snowflake size={17} /> Frozen & sorted</div>
              </article>

              <article className="storage-card">
                <div><h3>Your Pantry</h3><p>Know what's on your shelves.</p></div>
                <div className="storage-circle" />
                <div className="storage-art">🫙🌾🫘</div>
                <div className="storage-caption"><Wheat size={17} /> Neat & organised</div>
              </article>
            </div>
          </div>
          <Wave variant={2} />
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="section-wrap steps-section">
          <div className="section-inner">
            <div className="section-heading">
              <span className="section-label"><Sparkles size={14} /> SIMPLE BY DESIGN</span>
              <h2>Three little steps.<br />A fresher kitchen.</h2>
            </div>

            <div className="steps-grid">
              {[
                { emoji: "🛍️", title: "Add your items", desc: "Quickly add food with its storage location and expiry date." },
                { emoji: "🔔", title: "Stay reminded", desc: "Know which items need your attention." },
                { emoji: "🥗", title: "Enjoy freshness", desc: "Make the most of everything you bring home." },
              ].map((step, i) => (
                <article className="step-card" key={step.title}>
                  <div className="step-art">
                    <span className="step-number">{i + 1}</span>
                    <span>{step.emoji}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
          <Wave variant={3} />
        </section>

        {/* APP SHOWCASE */}
        <section id="screenshots" className="section-wrap showcase-section">
          <div className="section-inner">
            <div className="section-heading">
              <span className="section-label"><Package size={14} /> MEET YOUR NEW KITCHEN COMPANION</span>
              <h2>A little look inside.</h2>
              <p>Everything you need, right where you need it.</p>
            </div>

            <div className="showcase-grid">
              <article className="showcase-card">
                <div className="showcase-screen">
                  <div className="flex justify-between items-center">
                    <strong className="text-sm">My Items</strong><Package size={17} />
                  </div>
                  <div className="flex gap-2 mt-4">
                    <span className="mock-tile flex-1">14 Items</span>
                    <span className="mock-tile flex-1">3 Soon</span>
                  </div>
                  {[
                    ["🥛", "Milk", "Fridge"],
                    ["🍅", "Tomatoes", "Fridge"],
                    ["🥬", "Lettuce", "Fridge"],
                  ].map((item) => (
                    <div className="mock-row" key={item[1]}>
                      <span className="text-xl">{item[0]}</span>
                      <span className="flex-1">{item[1]}</span>
                      <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>{item[2]}</span>
                    </div>
                  ))}
                </div>
                <h3 className="showcase-title">Your kitchen, at a glance.</h3>
                <p className="showcase-description">All your food in one place.</p>
              </article>

              <article className="showcase-card">
                <div className="showcase-screen">
                  <div className="flex justify-between items-center">
                    <strong className="text-sm">Add Item</strong><CalendarDays size={17} />
                  </div>
                  <div className="text-center text-5xl mt-4">🍅</div>
                  <div className="mock-row mt-4">Tomatoes</div>
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    <span className="mock-tile text-center">Fridge</span>
                    <span className="mock-tile text-center">Freezer</span>
                    <span className="mock-tile text-center">Pantry</span>
                  </div>
                  <div className="mock-row mt-3"><CalendarDays size={16} /> Expiry date</div>
                </div>
                <h3 className="showcase-title">Adding food feels easy.</h3>
                <p className="showcase-description">Simple, quick and intuitive.</p>
              </article>

              <article className="showcase-card">
                <div className="showcase-screen">
                  <div className="flex justify-between items-center">
                    <strong className="text-sm">Reminders</strong><Bell size={17} />
                  </div>
                  <div className="text-center text-5xl mt-4">🔔</div>
                  {[
                    ["Today", "1 item"],
                    ["Coming soon", "3 items"],
                    ["Expired", "1 item"],
                  ].map((item) => (
                    <div className="mock-row" key={item[0]}>
                      <span className="flex-1">{item[0]}</span>
                      <span className="text-[10px]" style={{ color: "var(--accent)" }}>{item[1]}</span>
                    </div>
                  ))}
                </div>
                <h3 className="showcase-title">A timely little reminder.</h3>
                <p className="showcase-description">Stay ahead of expiry dates.</p>
              </article>
            </div>
          </div>
          <Wave variant={1} />
        </section>

        {/* DOWNLOAD CTA */}
        <section id="download" className="cta-section">
          <div className="cta-banner">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="brand-mark !bg-white !text-[#26875C] !w-12 !h-12">
                  <Leaf size={26} />
                </span>
                <span className="text-xs font-bold text-[#D0E8D4] tracking-widest">
                  YOUR KITCHEN DESERVES THIS
                </span>
              </div>
              <h2>Make room for<br />more freshness.</h2>
              <p>A smarter little companion for your everyday kitchen.</p>
            </div>

            <div className="relative z-10">
              <PlayButton light />
              <p className="text-[10px] text-[#D0E8D4] mt-3 text-center">Available for Android</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section-wrap faq-section">
          <div className="section-inner">
            <div className="section-heading">
              <span className="section-label"><Sparkles size={14} /> A FEW LITTLE ANSWERS</span>
              <h2>Curious? We've got you.</h2>
            </div>

            <div className="faq-list">
              {faqs.map((faq, i) => (
                <div className="faq-item" key={faq.q}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    {faq.q}
                    <ChevronDown size={19} />
                  </button>
                  {openFaq === i && <p>{faq.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <Brand />
            <p className="mt-3">A fresher way to organise your kitchen.</p>
          </div>
          <div className="text-right">
            <p>A product by <strong>BRC Hub LLP</strong></p>
            <p>© 2026 SortFresh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
