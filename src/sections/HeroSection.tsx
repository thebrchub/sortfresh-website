
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[780px] items-center overflow-hidden bg-[var(--bg-primary)] sm:min-h-[850px] lg:min-h-[calc(100svh-72px)] lg:h-[820px] lg:min-h-0"
    >
      {/* Hero artwork */}
      <img
        src="/images/hero.png"
        alt="A beautifully organised kitchen with a stocked refrigerator and pantry"
        className="
          absolute inset-0 -z-20
          h-full w-full
          object-cover
          object-[65%_center]
          lg:object-center
        "
      />

      {/* Desktop readability gradient - preserved */}
      <div
        className="absolute inset-0 -z-10 hidden lg:block"
        style={{
          background: `linear-gradient(
            90deg,
            var(--hero-overlay-start) 0%,
            var(--hero-overlay-middle) 38%,
            var(--hero-overlay-end) 75%
          )`,
        }}
      />

      {/* Mobile image blending */}
      <div className="absolute inset-0 -z-10 lg:hidden">
        {/* Soft upper image treatment */}
        <div className="absolute inset-x-0 top-0 h-[58%] bg-gradient-to-b from-[var(--bg-primary)]/10 via-transparent to-transparent" />

        {/* Blend artwork into content */}
        <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/95 to-transparent" />
      </div>

      {/* Desktop bottom blend - preserved */}
      <div className="absolute inset-x-0 bottom-0 -z-10 hidden h-36 bg-gradient-to-t from-[var(--bg-primary)]/70 to-transparent lg:block" />

      {/* Content */}
      <div
        className="
          relative z-10 mx-auto w-full max-w-[1380px]
          px-6 pb-14 pt-[390px]
          sm:px-10 sm:pt-[430px]
          lg:px-14 lg:py-24
        "
      >
        <div className="max-w-[530px]">

          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DDE8D2] bg-[#E7F0DE]/90 px-4 py-2 text-[10px] font-semibold tracking-wide text-[#52685A] backdrop-blur-sm dark:border-[#304638] dark:bg-[#253D30]/90 dark:text-[#C1D0C4] sm:text-xs">
            <span className="text-[#71956A]">✦</span>
            YOUR KITCHEN COMPANION
          </div>

          {/* Heading */}
          <h1
            className="
              font-heading text-[clamp(2.5rem,8vw,3.8rem)]
              font-bold leading-[1.08] tracking-[-0.045em]
              lg:text-[clamp(2.8rem,4.2vw,3.8rem)]
              lg:leading-[1.12]
            "
            style={{ color: "var(--hero-heading)" }}
          >
            A little more joy in your kitchen.
          </h1>

          {/* Description */}
          <p
            className="mt-4 max-w-[410px] text-sm leading-6 sm:text-base sm:leading-7 lg:mt-5 lg:text-lg"
            style={{ color: "var(--hero-description)" }}
          >
            Keep your fridge, freezer and pantry organised, all in one place.
          </p>

          {/* CTA buttons */}
          <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:mt-8 lg:flex-wrap">

            <a
              href="#download"
              className="
                inline-flex min-h-12 items-center justify-center gap-3
                rounded-full bg-[#194C3B] px-6 py-3
                text-sm font-semibold !text-white
                shadow-lg transition-all duration-300
                hover:-translate-y-0.5 hover:bg-[#285B45]
                sm:w-fit
              "
            >
              Get SortFresh
              <span>↗</span>
            </a>

            <a
              href="#the-app"
              className="
                inline-flex min-h-12 items-center justify-center
                rounded-full border border-[#8CA18E]
                bg-[#FFF9EF]/90 px-6 py-3
                text-sm font-semibold !text-[#194C3B]
                backdrop-blur-sm transition-all
                hover:bg-white
                dark:!text-[#194C3B]
                sm:w-fit
              "
            >
              Explore the app
            </a>
          </div>

          {/* Availability */}
          <div className="mt-5 text-xs font-medium text-[#65796B] dark:text-[#C1D0C4] sm:text-sm">
            Available on Android
          </div>
        </div>
      </div>






      <svg
  className="pointer-events-none absolute bottom-0 left-0 z-20 block h-[65px] w-full sm:h-[85px] lg:h-[100px]"
  viewBox="0 0 1440 120"
  preserveAspectRatio="none"
  aria-hidden="true"
>
  <path
    d="M0 45 C300 115 600 120 900 85 C1120 55 1300 35 1440 55 L1440 120 L0 120 Z"
    fill="var(--bg-secondary)"
    stroke="none"
  />
</svg>
    </section>
  );
}
