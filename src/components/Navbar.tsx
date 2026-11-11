
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";

type NavbarProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

const links = [
  { label: "The App", href: "#the-app" },
  { label: "Features", href: "#features" },
  { label: "Download", href: "#download" },
];

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const headerRef = useRef<HTMLElement>(null);

  // Hide navbar on scroll down and reveal on scroll up.
  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const previousScrollY = lastScrollY.current;
        const difference = currentScrollY - previousScrollY;

        if (currentScrollY < 80) {
          setVisible(true);
        } else if (difference > 5 && currentScrollY > 120) {
          setVisible(false);
          setMenuOpen(false);
        } else if (difference < -5) {
          setVisible(true);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside.
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Close menu with Escape key.
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      className={`
        fixed left-0 right-0 top-0 z-50
        px-4 pt-3 sm:px-6 sm:pt-5
        transition-all duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "-translate-y-[130%] pointer-events-none opacity-0"
        }
      `}
    >
      <header
        ref={headerRef}
        className="
          relative mx-auto max-w-[1380px]
          rounded-full
          border border-white/70
          bg-[var(--nav-bg)]
          shadow-[0_8px_25px_rgba(30,55,40,0.09),inset_0_2px_3px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(30,55,40,0.04)]
          backdrop-blur-2xl
          dark:border-white/10
          dark:shadow-[0_10px_30px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.08)]
        "
      >
        <nav className="flex h-[66px] items-center justify-between px-4 sm:px-7 lg:px-9">

          
{/* Brand */}
<a
  href="/"
  onClick={closeMenu}
  className="flex shrink-0 items-center gap-2.5"
  aria-label="SortFresh Home"
>
  <img
    src={theme === "dark" ? "/images/logow.png" : "/images/logod.png"}
    alt=""
    className="h-10 w-10 object-contain"
  />

  <img
    src={theme === "dark" ? "/images/typod.png" : "/images/typow.png"}
    alt="SortFresh"
    className="h-auto w-[105px] object-contain sm:w-[120px]"
  />
</a>


          {/* Desktop navigation */}
          <div className="hidden items-center gap-9 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  relative py-2 text-sm font-semibold
                  text-[var(--text-secondary)]
                  transition-colors duration-200
                  hover:text-[var(--accent)]
                  after:absolute after:bottom-0 after:left-1/2
                  after:h-[2px] after:w-0 after:-translate-x-1/2
                  after:rounded-full after:bg-[var(--accent)]
                  after:transition-all hover:after:w-full
                "
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle
              theme={theme}
              onToggle={onToggleTheme}
            />

            <a
              href="#download"
              style={{ color: "#FFFFFF" }}
              className="
                inline-flex h-11 items-center gap-2
                rounded-full bg-[#194C3B] px-5
                text-sm font-semibold !text-white
                shadow-[0_4px_10px_rgba(25,76,59,0.16),inset_0_1px_2px_rgba(255,255,255,0.2)]
                transition-all duration-300
                hover:-translate-y-0.5 hover:bg-[#285B45]
                hover:shadow-lg active:translate-y-0
              "
            >
              <GooglePlayIcon />
              <span className="!text-white">Get the App</span>
            </a>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle
              theme={theme}
              onToggle={onToggleTheme}
            />

            <button
              type="button"
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((previous) => !previous)}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full border border-[var(--border)]
                bg-[var(--bg-card)]
                text-[var(--text-primary)]
                shadow-[0_2px_6px_rgba(30,55,40,0.08),inset_0_1px_2px_rgba(255,255,255,0.7)]
                transition-all duration-200
                hover:-translate-y-0.5
                active:scale-95
              "
            >
              <span
                className={`text-xl leading-none transition-transform duration-300 ${
                  menuOpen ? "rotate-90" : "rotate-0"
                }`}
              >
                {menuOpen ? "×" : "☰"}
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile floating dropdown */}
        <div
          id="mobile-navigation"
          aria-hidden={!menuOpen}
          className={`
            absolute right-0 top-[calc(100%+12px)]
            w-[min(290px,calc(100vw-32px))]
            origin-top-right
            transition-all duration-300
            ease-[cubic-bezier(0.22,1,0.36,1)]
            md:hidden
            ${
              menuOpen
                ? "visible translate-y-0 scale-100 opacity-100"
                : "invisible pointer-events-none -translate-y-2 scale-95 opacity-0"
            }
          `}
        >
          <div
            className="
              rounded-[26px]
              border border-white/70
              bg-[var(--bg-secondary)]
              p-3
              shadow-[0_12px_35px_rgba(30,55,40,0.16),inset_0_2px_3px_rgba(255,255,255,0.75)]
              backdrop-blur-2xl
              dark:border-white/10
              dark:shadow-[0_12px_35px_rgba(0,0,0,0.35),inset_0_1px_2px_rgba(255,255,255,0.06)]
            "
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={closeMenu}
                  className="
                    flex min-h-[44px] items-center
                    rounded-[15px] px-4
                    text-sm font-semibold
                    text-[var(--text-primary)]
                    transition-all duration-200
                    hover:bg-[var(--surface-sage)]
                    active:scale-[0.98]
                  "
                >
                  {link.label}
                </a>
              ))}

              <div className="my-2 h-px bg-[var(--border)]" />

              <a
                href="#download"
                tabIndex={menuOpen ? 0 : -1}
                onClick={closeMenu}
                className="
                  flex h-12 items-center justify-center gap-2
                  rounded-full bg-[#194C3B]
                  px-4 text-sm font-semibold !text-white
                  shadow-[0_4px_10px_rgba(25,76,59,0.16),inset_0_1px_2px_rgba(255,255,255,0.2)]
                  transition-all duration-200
                  hover:bg-[#285B45]
                  active:scale-[0.98]
                "
              >
                <GooglePlayIcon />
                <span className="!text-white">Get SortFresh</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

function GooglePlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <path fill="#34A853" d="M3 2.5v19l10-9.5L3 2.5Z" />
      <path fill="#4285F4" d="m13 12 4-4.1 3.8 2.2c1.5.9 1.5 2.9 0 3.8L17 16l-4-4Z" />
      <path fill="#FBBC04" d="m3 21.5 10-9.5 4 4.1-11.4 6.5c-1.1.6-2.3.1-2.6-1.1Z" />
      <path fill="#EA4335" d="M3 2.5c.3-1.2 1.5-1.7 2.6-1.1L17 7.9 13 12 3 2.5Z" />
    </svg>
  );
}
