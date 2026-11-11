
import { Archive, Refrigerator, Snowflake, ArrowUpRight } from "lucide-react";

const kitchenZones = [
  {
    number: "01",
    title: "The Fridge",
    description:
      "Keep your everyday groceries and fresh ingredients organised.",
    detail: "FRESH & CHILLED",
    icon: Refrigerator,
    background: "#E5EFDF",
    accent: "#66875D",
    iconBackground: "#D0E2C7",
    image: "/images/card1.png",
    imageAlt: "Open sage-green refrigerator filled with fresh groceries",
  },
  {
    number: "02",
    title: "The Freezer",
    description:
      "Keep track of the frozen food you have tucked away.",
    detail: "FROZEN ESSENTIALS",
    icon: Snowflake,
    background: "#E4EDF1",
    accent: "#648B9B",
    iconBackground: "#D1E2E9",
    image: "/images/card2.png",
    imageAlt: "Open pastel-blue freezer filled with frozen food",
  },
  {
    number: "03",
    title: "The Pantry",
    description:
      "Organise your rice, dal, flour, grains and everyday staples.",
    detail: "SHELF & PANTRY",
    icon: Archive,
    background: "#F5E8D9",
    accent: "#A8794F",
    iconBackground: "#EBD5BE",
    image: "/images/card3.png",
    imageAlt: "Wooden pantry shelf with organised jars and kitchen staples",
  },
];

export default function KitchenOverview() {
  return (
    <section
      id="the-app"
      className="relative -mt-px overflow-hidden bg-[var(--bg-secondary)] px-5 py-24 sm:px-10 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px]">

        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-[700px] text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-4 py-2 text-xs font-bold tracking-[0.12em] text-[var(--text-secondary)] shadow-sm">
            <span className="text-[#71956A]">✳</span>
            ONE APP. YOUR ENTIRE KITCHEN.
          </span>

          <h2 className="font-heading text-[clamp(2rem,3.5vw,3.2rem)] font-bold leading-[1.15] tracking-[-0.045em] text-[var(--text-primary)]">
            Every corner of your kitchen,
            <span className="block text-[#71956A]">
              in its happy place.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[560px] text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
            From fresh produce to pantry staples, bring everything
            in your kitchen together with SortFresh.
          </p>
        </div>

        {/* Kitchen zone cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {kitchenZones.map((zone) => {
            const Icon = zone.icon;

            return (
              <article
                key={zone.number}
                className="group relative overflow-hidden rounded-[30px] border border-black/[0.035] p-6 shadow-[0_8px_25px_rgba(40,65,45,0.045),inset_0_2px_3px_rgba(255,255,255,0.7)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(40,65,45,0.10)] dark:border-white/[0.06] dark:shadow-[0_8px_25px_rgba(0,0,0,0.15)] sm:p-7"
                style={{ backgroundColor: zone.background }}
              >
                {/* Card top */}
                <div className="relative z-10 flex items-center justify-between">
                  <span
                    className="text-xs font-bold tracking-[0.16em]"
                    style={{ color: zone.accent }}
                  >
                    {zone.detail}
                  </span>

                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full shadow-[2px_3px_7px_rgba(50,60,40,0.08),inset_0_1px_2px_rgba(255,255,255,0.8)]"
                    style={{ backgroundColor: zone.iconBackground }}
                  >
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                      style={{ color: zone.accent }}
                    />
                  </span>
                </div>

                {/* 3D Illustration */}
                <div className="relative my-5 flex h-[220px] items-center justify-center sm:h-[230px]">
                  <div
                    className="absolute h-[165px] w-[165px] rounded-full opacity-50 blur-2xl transition-transform duration-700 group-hover:scale-125"
                    style={{ backgroundColor: zone.iconBackground }}
                  />

                  <img
                    src={zone.image}
                    alt={zone.imageAlt}
                    loading="lazy"
                    className="relative z-10 h-full w-full object-contain transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-105"
                  />
                </div>

                {/* Card content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <h3
                      className="font-heading text-2xl font-bold tracking-tight"
                      style={{ color: "#294B3B" }}
                    >
                      {zone.title}
                    </h3>

                    <ArrowUpRight
                      size={20}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      style={{ color: zone.accent }}
                    />
                  </div>

                  <p
                    className="mt-3 max-w-[300px] text-sm leading-6"
                    style={{ color: "#53675A" }}
                  >
                    {zone.description}
                  </p>
                </div>

                {/* Decorative number */}
                <span
                  className="pointer-events-none absolute -bottom-8 -right-1 font-heading text-[100px] font-extrabold leading-none opacity-[0.055]"
                  style={{ color: zone.accent }}
                >
                  {zone.number}
                </span>
              </article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--surface-sage)] text-[#71956A]">
            ✳
          </span>

          <p className="text-sm font-medium text-[var(--text-secondary)]">
            One little app. A much more organised kitchen.
          </p>
        </div>
      </div>
    </section>
  );
}
