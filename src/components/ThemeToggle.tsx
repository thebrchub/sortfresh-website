
type ThemeToggleProps = {
  theme: "light" | "dark";
  onToggle: () => void;
};

export default function ThemeToggle({
  theme,
  onToggle,
}: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      onClick={onToggle}
      className="
        relative flex h-[46px] w-[94px] shrink-0
        items-center rounded-full p-[5px]
        border border-[var(--border)]
        bg-[var(--bg-tertiary)]
        shadow-[inset_3px_3px_7px_rgba(40,65,45,0.10),inset_-3px_-3px_7px_rgba(255,255,255,0.75),0_2px_5px_rgba(40,65,45,0.05)]
        transition-all duration-300
        dark:shadow-[inset_3px_3px_7px_rgba(0,0,0,0.22),inset_-2px_-2px_6px_rgba(255,255,255,0.04),0_2px_5px_rgba(0,0,0,0.15)]
        focus-visible:outline-none
      "
    >
      {/* Static sun indicator */}
      <span
        className={`absolute left-[13px] flex items-center justify-center transition-opacity duration-300 ${
          isDark ? "opacity-40" : "opacity-0"
        }`}
      >
        <SunIcon />
      </span>

      {/* Static moon indicator */}
      <span
        className={`absolute right-[13px] flex items-center justify-center transition-opacity duration-300 ${
          isDark ? "opacity-0" : "opacity-40"
        }`}
      >
        <MoonIcon />
      </span>

      {/* Single moving clay thumb */}
      <span
        className={`
          absolute left-[5px] top-[5px]
          flex h-9 w-9 items-center justify-center rounded-full
          border border-white/70 bg-[#FFFDF7]
          shadow-[3px_3px_7px_rgba(60,75,45,0.14),-3px_-3px_7px_rgba(255,255,255,0.95),inset_0_1px_2px_rgba(255,255,255,0.9)]
          transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
          dark:border-white/10 dark:bg-[#304638]
          dark:shadow-[3px_3px_7px_rgba(0,0,0,0.25),-2px_-2px_6px_rgba(255,255,255,0.04)]
          ${isDark ? "translate-x-[43px]" : "translate-x-0"}
        `}
      >
        {isDark ? (
          <MoonIcon active />
        ) : (
          <SunIcon active />
        )}
      </span>
    </button>
  );
}

function SunIcon({ active = false }: { active?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`h-[19px] w-[19px] ${
        active ? "text-[#E9A83B]" : "text-[var(--text-muted)]"
      }`}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon({ active = false }: { active?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`h-[19px] w-[19px] ${
        active ? "text-[#A9B9E5]" : "text-[var(--text-muted)]"
      }`}
      aria-hidden="true"
    >
      <path
        d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.6 8.6 0 1 0 20.2 15.1Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="m17.5 3 .5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5.5-1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
