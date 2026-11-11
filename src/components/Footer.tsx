
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-primary)] px-5 py-12 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-[1380px]">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">

          {/* Brand */}
          <div className="max-w-[320px]">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5"
              aria-label="SortFresh Home"
            >
              {/* Logo */}
              <img
                src="/images/logod.png"
                alt=""
                className="h-10 w-10 object-contain dark:hidden"
              />

              <img
                src="/images/logow.png"
                alt=""
                className="hidden h-10 w-10 object-contain dark:block"
              />

              {/* Typography */}
              <img
                src="/images/typow.png"
                alt="SortFresh"
                className="h-auto w-[115px] object-contain dark:hidden"
              />

              <img
                src="/images/typod.png"
                alt="SortFresh"
                className="hidden h-auto w-[115px] object-contain dark:block"
              />
            </Link>

            <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
              A fresher way to organise your kitchen.
              A little less waste. A happier kitchen.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-9 gap-y-4">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/#the-app" className="footer-link">The App</Link>
            <Link to="/#features" className="footer-link">Features</Link>
            <Link to="/#download" className="footer-link">Download</Link>
            <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-link">Terms of Use</Link>

            <a
              href="mailto:contact.sortfresh@gmail.com"
              className="footer-link"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--border)] pt-6 text-xs text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SortFresh. All rights reserved.</p>

          <p>
            A product by{" "}
            <span className="font-bold text-[var(--text-secondary)]">
              BRC HUB LLP
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
