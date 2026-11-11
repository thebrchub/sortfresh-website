
import {
  Refrigerator,
  BellRing,
  LayoutGrid,
  CalendarClock,
 SlidersHorizontal,
} from "lucide-react";

const features = [
  {
    icon: Refrigerator,
    number: "01",
    title: "Your whole kitchen, together.",
    description:
      "Keep track of what's in your refrigerator, freezer and pantry without jumping between different lists.",
    tags: ["Fridge", "Freezer", "Pantry"],
    color: "bg-[#DDF1E5]",
    iconColor: "#348A68",
    size: "lg:col-span-2",
  },
  {
    icon: BellRing,
    number: "02",
    title: "A little reminder, right on time.",
    description:
      "Choose expiry reminders that help you stay aware of food that needs attention.",
    tags: ["Custom reminders", "Notifications"],
    color: "bg-[#FBE8D4]",
    iconColor: "#C78342",
    size: "",
  },
  {
    icon: LayoutGrid,
    number: "03",
    title: "Everything has its place.",
    description:
      "Organise your groceries by where they belong and find them whenever you need them.",
    tags: ["Kitchen inventory", "Easy organisation"],
    color: "bg-[#E9EEDB]",
    iconColor: "#71956A",
    size: "",
  },
  {
    icon: CalendarClock,
    number: "04",
    title: "Know what's coming up.",
    description:
      "Keep an eye on active, expiring and expired items so fewer groceries get forgotten.",
    tags: ["Expiry tracking", "History"],
    color: "bg-[#E5ECF9]",
    iconColor: "#6888B8",
    size: "lg:col-span-2",
  },
  {
  icon: SlidersHorizontal,
  number: "05",
  title: "Make it feel like yours.",
  description:
    "Choose your preferred appearance and date format to make SortFresh feel right at home.",
  tags: ["Dark & light themes", "Date preferences"],
  color: "bg-[#F3E8F6]",
  iconColor: "#9873A8",
  size: "lg:col-span-2",
},
];

export default function FeaturesSection() {
  return (
    <section
      className="overflow-hidden bg-[var(--bg-primary)] px-5 py-24 sm:px-10 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px]">

        {/* Section heading */}
        <div className="mb-14 max-w-[650px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-4 py-2 text-xs font-bold tracking-[0.12em] text-[var(--text-secondary)] shadow-sm">
            <span className="text-[#71956A]">✳</span>
            MADE FOR EVERYDAY KITCHENS
          </span>

          <h2 className="mt-6 font-heading text-[clamp(2.1rem,3.8vw,3.3rem)] font-bold leading-[1.15] tracking-[-0.045em] text-[var(--text-primary)]">
            Small things.
            <span className="block text-[#71956A]">
              A fresher routine.
            </span>
          </h2>

          <p className="mt-5 max-w-[540px] text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
            A few thoughtful tools to make looking after your
            kitchen feel a little easier.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.number}
                className={`group relative overflow-hidden rounded-[30px] border border-[var(--border)] bg-[var(--bg-card)] p-6 shadow-[0_8px_24px_rgba(40,65,45,0.045),inset_0_2px_3px_rgba(255,255,255,0.75)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(40,65,45,0.09)] sm:p-8 ${feature.size}`}
              >
                {/* Clay icon */}
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-[22px] shadow-[4px_5px_10px_rgba(40,65,45,0.09),inset_2px_2px_4px_rgba(255,255,255,0.8)] ${feature.color}`}
                >
                  <Icon
                    size={29}
                    strokeWidth={1.8}
                    color={feature.iconColor}
                  />
                </div>

                <span className="absolute right-7 top-7 text-xs font-bold tracking-widest text-[var(--text-muted)]">
                  {feature.number}
                </span>

                <div className="mt-8">
                  <h3 className="max-w-[350px] font-heading text-xl font-bold tracking-tight text-[var(--text-primary)] sm:text-2xl">
                    {feature.title}
                  </h3>

                  <p className="mt-3 max-w-[440px] text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-1.5 text-xs font-semibold text-[var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Decorative accent */}
                <div
                  className={`pointer-events-none absolute -bottom-12 -right-10 h-32 w-32 rounded-full opacity-40 blur-2xl ${feature.color}`}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
