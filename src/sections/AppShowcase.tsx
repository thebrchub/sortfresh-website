
type AppShowcaseProps = {
  theme: "light" | "dark";
};

const screens = [
  {
    id: "fridge",
    title: "Your fridge, sorted.",
    description: "Keep your fresh and frozen essentials in view.",
    light: "/images/2.png",
    dark: "/images/2.png",
  },
  {
    id: "home",
    title: "Your kitchen at a glance.",
    description: "See your entire kitchen in one beautiful overview.",
    light: "/images/1.png",
    dark: "/images/1.png",
  },
  {
    id: "shelf",
    title: "A happier, organised pantry.",
    description: "Keep your everyday staples right where they belong.",
    light: "/images/3.png",
    dark: "/images/3.png",
  },
];

export default function AppShowcase({ theme }: AppShowcaseProps) {
  const isDark = theme === "dark";

  return (
    <section
      id="features"
      className="overflow-hidden bg-[var(--bg-secondary)] px-5 py-24 sm:px-10 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px]">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-[720px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-4 py-2 text-xs font-bold tracking-[0.12em] text-[var(--text-secondary)] shadow-sm">
            <span className="text-[#71956A]">✳</span>
            MEET YOUR NEW KITCHEN COMPANION
          </span>

          <h2 className="mt-6 font-heading text-[clamp(2.1rem,3.8vw,3.4rem)] font-bold leading-[1.15] tracking-[-0.045em] text-[var(--text-primary)]">
            Your kitchen,
            <span className="block text-[#71956A]">
              beautifully in control.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[550px] text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
            Everything you need to organise your kitchen,
            wrapped in one simple little app.
          </p>
        </div>

        {/* Phone showcase */}
        <div className="relative">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A9C99A]/20 blur-[100px]" />

          <div className="relative flex snap-x snap-mandatory items-center gap-5 overflow-x-auto px-[calc((100%-230px)/2)] pb-8 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-8 sm:justify-center sm:overflow-visible sm:gap-3 lg:gap-10">

            {screens.map((screen) => {
              const image = isDark ? screen.dark : screen.light;
              const isHome = screen.id === "home";

              return (
                <div
                  key={screen.id}
                  className={`group flex w-[230px] shrink-0 snap-center flex-col items-center transition-all duration-500 sm:w-[240px] lg:w-[280px] ${
                    isHome
                      ? "sm:-translate-y-4 sm:scale-105 lg:scale-110"
                      : "sm:translate-y-5"
                  }`}
                >
                  {/* Screenshot */}
                  <div className="relative w-full overflow-hidden rounded-[32px] transition-all duration-500 group-hover:-translate-y-2">
                    <img
                      src={image}
                      alt={`SortFresh ${screen.title} app screen`}
                      loading="lazy"
                      className="block h-auto w-full object-contain drop-shadow-[0_18px_22px_rgba(30,45,35,0.18)]"
                    />
                  </div>

                  {/* Caption */}
                  <div className="mt-7 text-center">
                    <h3 className="font-heading text-lg font-bold tracking-tight text-[var(--text-primary)]">
                      {screen.title}
                    </h3>

                    <p className="mx-auto mt-2 max-w-[240px] text-sm leading-6 text-[var(--text-secondary)]">
                      {screen.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile swipe hint */}
          <p className="mt-3 text-center text-xs font-medium text-[var(--text-muted)] sm:hidden">
            ← Swipe to explore the app →
          </p>
        </div>

        {/* Bottom statement */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-5 py-3 shadow-[0_5px_15px_rgba(40,65,45,0.05),inset_0_1px_2px_rgba(255,255,255,0.8)]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--surface-sage)] text-[#71956A]">
              ✳
            </span>
            <span className="text-sm font-semibold text-[var(--text-secondary)]">
              A little more joy in your everyday kitchen.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
