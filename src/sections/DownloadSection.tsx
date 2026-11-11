
import Footer from "../components/Footer";
import { ArrowUpRight, Sparkles } from "lucide-react";

const PLAY_STORE_URL = "";

export default function DownloadSection() {
  const isAvailable = Boolean(PLAY_STORE_URL);

  return (
    <>
      <section
        id="download"
        className="overflow-hidden bg-[var(--bg-secondary)] px-5 py-20 sm:px-10 lg:px-14 lg:py-28"
      >
        <div className="relative mx-auto max-w-[1380px] overflow-hidden rounded-[36px] bg-[#E6EFDC] px-6 py-14 shadow-[0_12px_35px_rgba(40,65,45,0.07),inset_0_2px_4px_rgba(255,255,255,0.8)] dark:bg-[#253D30] sm:px-12 lg:px-16 lg:py-16">

          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-[#D7B98C]/25 blur-3xl" />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-4">

            {/* Copy */}
            <div className="order-1 max-w-[560px]">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-2 text-xs font-bold tracking-[0.12em] text-[#55734F] shadow-sm">
                <Sparkles size={14} />
                YOUR KITCHEN, MADE FRESHER
              </span>

              <h2 className="mt-7 font-heading text-[clamp(2.2rem,4vw,3.7rem)] font-bold leading-[1.12] tracking-[-0.045em] text-[#254B39]">
                A happier kitchen starts with
                <span className="block text-[#71956A]">
                  a little SortFresh.
                </span>
              </h2>

              <p className="mt-6 max-w-[480px] text-base leading-8 text-[#536B59] sm:text-lg">
                Bring your fridge, freezer and pantry together.
                Make every grocery count.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                {isAvailable ? (
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 items-center gap-3 rounded-full bg-[#194C3B] px-7 text-sm font-bold !text-white shadow-[0_6px_14px_rgba(25,76,59,0.2),inset_0_1px_2px_rgba(255,255,255,0.2)] transition-all hover:-translate-y-1 hover:bg-[#285B45]"
                  >
                    <GooglePlayIcon />
                    Get SortFresh
                    <ArrowUpRight size={17} />
                  </a>
                ) : (
                  <div
  aria-disabled="true"
  className="inline-flex h-16 cursor-not-allowed items-center justify-center gap-4 rounded-full bg-[#194C3B] px-10 text-base font-bold text-white opacity-90 shadow-[0_8px_20px_rgba(25,76,59,0.18)] sm:px-11 sm:text-lg"
>
  <GooglePlayIcon />
  <span>Get SortFresh</span>
</div>
                )}
              </div>

              <p className="mt-4 text-xs font-medium text-[#6E826D]">
                {isAvailable
                  ? "Available on Android"
                  : "Coming soon to Google Play · Android"}
              </p>
            </div>

            {/* 3D Kitchen Illustration */}
            <div className="order-2 relative mx-auto flex w-full max-w-[650px] items-center justify-center lg:-mr-6">
              <img
                src="/images/cta.png"
                alt="A beautifully organised SortFresh refrigerator and pantry filled with fresh groceries"
                className="h-auto w-full object-contain drop-shadow-[0_20px_30px_rgba(30,55,40,0.12)] transition-transform duration-500 hover:scale-[1.025]"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Shared Footer */}
      <Footer />
    </>
  );
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden="true">
      <path fill="#34A853" d="M3 2.5v19l10-9.5L3 2.5Z" />
      <path fill="#4285F4" d="m13 12 4-4.1 3.8 2.2c1.5.9 1.5 2.9 0 3.8L17 16l-4-4Z" />
      <path fill="#FBBC04" d="m3 21.5 10-9.5 4 4.1-11.4 6.5c-1.1.6-2.3.1-2.6-1.1Z" />
      <path fill="#EA4335" d="M3 2.5c.3-1.2 1.5-1.7 2.6-1.1L17 7.9 13 12 3 2.5Z" />
    </svg>
  );
}
