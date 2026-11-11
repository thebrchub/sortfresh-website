
import { useState } from "react";
import {
  ChevronDown,
  Leaf,
  MessageCircle,
} from "lucide-react";

const faqs = [
  {
    question: "Is SortFresh free to use?",
    answer:
      "Yes! SortFresh is completely free to use at launch. There are no subscriptions or payments required.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No. SortFresh does not require registration or login. You can start managing your kitchen inventory straight away.",
  },
  {
    question: "Can I track food expiry dates?",
    answer:
      "Yes. Add food items with their expiry dates and use reminders to stay aware of items that need your attention.",
  },
  {
    question: "Can I manage my fridge, freezer and pantry separately?",
    answer:
      "Absolutely. SortFresh provides separate spaces for your refrigerator, freezer and pantry, making it easier to organise different types of food.",
  },
  {
    question: "Does SortFresh send expiry reminders?",
    answer:
      "Yes. You can customise expiry reminders to receive notifications before your food items expire. Notifications depend on your device permissions and settings.",
  },
  {
    question: "Where is my kitchen inventory data stored?",
    answer:
      "Your inventory data is stored locally on your device. The current version does not use cloud synchronisation or an online account.",
  },
  {
    question: "Will I lose my data if I uninstall SortFresh?",
    answer:
      "Because your data is stored locally, uninstalling the app or clearing its data may permanently remove your inventory. There is currently no cloud backup or synchronisation.",
  },
  {
    question: "Is SortFresh available on iPhone?",
    answer:
      "SortFresh is currently being developed for Android. iPhone availability has not been announced.",
  },
];

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[var(--bg-primary)] px-5 py-20 sm:px-10 lg:px-14 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#71956A]/[0.07] blur-[100px]" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-[#D7B98C]/[0.10] blur-[100px]" />

      <div className="relative mx-auto max-w-[1100px]">

        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-4 py-2 text-xs font-bold tracking-[0.12em] text-[var(--text-secondary)] shadow-sm">
            <Leaf size={14} className="text-[#71956A]" />
            GOOD TO KNOW
          </span>

          <h2 className="font-heading text-[clamp(2rem,3.5vw,3.2rem)] font-bold leading-[1.15] tracking-[-0.045em] text-[var(--text-primary)]">
            Curious about
            <span className="block text-[#71956A]">
              SortFresh?
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[520px] text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
            A few quick answers to help you get to know your
            new kitchen companion.
          </p>
        </div>

        {/* Balanced two-column FAQ */}
        <div className="grid items-start gap-3 md:grid-cols-2 md:gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openQuestion === index;

            return (
              <article
                key={faq.question}
                className={`overflow-hidden rounded-[20px] border transition-all duration-300 ${
                  isOpen
                    ? "border-[#71956A]/45 bg-[var(--bg-card)] shadow-[0_8px_24px_rgba(40,65,45,0.06)]"
                    : "border-[var(--border)] bg-[var(--bg-card)] hover:border-[#71956A]/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenQuestion(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex min-h-[76px] w-full items-center justify-between gap-3 px-5 py-4 text-left"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#71956A]/15 text-[#71956A]"
                          : "bg-[var(--bg-secondary)] text-[var(--text-muted)]"
                      }`}
                    >
                      <Leaf size={16} strokeWidth={1.8} />
                    </span>

                    <span className="font-heading text-sm font-semibold leading-6 text-[var(--text-primary)] sm:text-base">
                      {faq.question}
                    </span>
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#71956A]/15 text-[#71956A]"
                        : "bg-[var(--bg-secondary)] text-[var(--text-muted)]"
                    }`}
                  >
                    <ChevronDown size={17} />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 pl-[4.25rem] text-sm leading-7 text-[var(--text-secondary)]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Contact strip */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-[22px] border border-[var(--border)] bg-[var(--bg-card)] px-6 py-5 sm:flex-row sm:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#71956A]/15 text-[#71956A]">
              <MessageCircle size={19} />
            </span>

            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Still have questions?
              </p>
              <p className="mt-1 text-xs text-[var(--text-secondary)]">
                We'd love to hear from you.
              </p>
            </div>
          </div>

          <a
            href="mailto:contact.sortfresh@gmail.com"
className="inline-flex items-center gap-2 rounded-full bg-[#194C3B] px-5 py-3 text-sm font-semibold !text-white transition-all hover:-translate-y-0.5 hover:bg-[#285B45]"          >
            Get in touch
            <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}
