
import { Leaf, ShoppingBasket } from "lucide-react";

export default function ProblemSection() {
  return (
    <section
      id="why-sortfresh"
      className="overflow-hidden bg-[var(--bg-primary)] px-5 py-24 sm:px-10 lg:px-14 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1380px] items-center gap-14 lg:grid-cols-2 lg:gap-20">

        {/* Visual composition */}
        <div className="relative order-2 mx-auto w-full max-w-[590px] lg:order-1">
          <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden rounded-[36px] bg-[#E8EEDD] p-8 shadow-[inset_0_2px_5px_rgba(255,255,255,0.8),0_15px_35px_rgba(40,65,45,0.07)] dark:bg-[#253D30] sm:min-h-[480px]">

            {/* Decorative background */}
            <div className="absolute -left-12 -top-16 h-64 w-64 rounded-full bg-white/30 blur-2xl" />
            <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-[#D8B78D]/30 blur-3xl" />

            {/* Refrigerator illustration */}
            <img
  src="/images/assist.png"
  alt="A friendly kitchen character with an organised food inventory"
  className="h-auto w-full max-w-[680px] object-contain"
/>

            {/* Floating grocery accent */}
            <div className="absolute bottom-7 left-5 z-20 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/70 bg-[#FFFDF7] shadow-[4px_7px_16px_rgba(40,65,45,0.12)]">
              <ShoppingBasket size={25} color="#71956A" />
            </div>

            <div className="absolute bottom-9 right-8 text-3xl text-[#A3B78D]">
              ✳
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-[var(--text-muted)]">
            A little awareness goes a long way.
          </p>
        </div>

        {/* Storytelling copy */}
        <div className="order-1 max-w-[520px] lg:order-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-4 py-2 text-xs font-bold tracking-[0.12em] text-[var(--text-secondary)] shadow-sm">
            <Leaf size={14} color="#71956A" />
            LESS WASTE. MORE JOY.
          </span>

          <h2 className="mt-7 font-heading text-[clamp(2.2rem,3.5vw,3.4rem)] font-bold leading-[1.15] tracking-[-0.045em] text-[var(--text-primary)]">
            Out of sight shouldn't mean
            <span className="block text-[#71956A]">
              out of mind.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            Groceries get tucked away. Ingredients get forgotten.
            And sometimes, we buy things we already have.
          </p>

          <p className="mt-3 text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            SortFresh helps you keep track of what's in your kitchen
            and what deserves your attention next.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface-sage)] text-[#71956A]">
              <Leaf size={19} />
            </span>
            <p className="text-sm font-semibold text-[var(--text-primary)]">
              Know what you have. Make the most of it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
