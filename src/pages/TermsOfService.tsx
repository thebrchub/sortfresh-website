
import LegalLayout from "../components/LegalLayout";

export default function TermsOfService() {
  return (
    <LegalLayout>
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <p className="text-sm font-medium text-[var(--accent)]">
            SORTFRESH / LEGAL
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight">
            Terms of Service
          </h1>

          <p className="mt-3 text-sm text-[var(--text-muted)]">
            Last updated: November 10, 2026
          </p>
        </div>

        <div className="space-y-8 leading-7 text-[var(--text-secondary)]">
          <section>
            <h2 className="mb-2 text-xl font-semibold text-[var(--text-primary)]">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, accessing or using SortFresh, you agree to these
              Terms of Service. If you do not agree, please discontinue use of
              the application.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[var(--text-primary)]">
              2. About SortFresh
            </h2>
            <p>
              SortFresh is a kitchen inventory application that helps users
              organise food items across refrigerators, freezers and pantry
              storage, and keep track of expiry dates.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[var(--text-primary)]">
              3. Your Responsibilities
            </h2>
            <p>You agree to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Use the app lawfully and responsibly.</li>
              <li>Provide accurate information when entering inventory details.</li>
              <li>Not misuse, disrupt or attempt to damage the app or its services.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[var(--text-primary)]">
              4. Accuracy and Food Safety
            </h2>
            <p>
              SortFresh is an organisational tool. Expiry dates, reminders and
              inventory information depend on details entered by the user.
              SortFresh does not inspect food or determine whether food is safe
              to consume.
            </p>
            <p className="mt-3">
              Always check food condition, packaging instructions and applicable
              food-safety guidance before consuming any item. Do not rely solely
              on app reminders to make food-safety decisions.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[var(--text-primary)]">
              5. Data and Device Responsibility
            </h2>
            <p>
              The current version stores inventory information locally on your
              device and does not provide cloud synchronisation. You are
              responsible for your device and for any data you may lose through
              uninstalling the app, clearing app data or changing devices.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[var(--text-primary)]">
              6. Intellectual Property
            </h2>
            <p>
              SortFresh, including its branding, design, software and original
              content, is owned by or licensed to BRC HUB LLP. You may use the
              application for personal purposes, but may not copy, distribute,
              modify or commercially exploit its protected materials without
              permission, except where permitted by law.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[var(--text-primary)]">
              7. Availability and Changes
            </h2>
            <p>
              We may update, modify, suspend or discontinue parts of SortFresh
              as the product develops. We do not guarantee uninterrupted or
              error-free availability.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[var(--text-primary)]">
              8. Limitation of Liability
            </h2>
            <p>
              To the extent permitted by applicable law, BRC HUB LLP is not
              responsible for losses arising from inaccurate user-entered
              information, missed reminders, device failures, data loss or
              decisions made solely on the basis of information displayed by
              the application.
            </p>
            <p className="mt-3">
              Nothing in these Terms excludes or limits liability where doing so
              would be unlawful.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[var(--text-primary)]">
              9. Changes to These Terms
            </h2>
            <p>
              We may revise these Terms from time to time. Continued use of
              SortFresh after revised Terms are published means you accept the
              updated Terms, to the extent permitted by applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-[var(--text-primary)]">
              10. Contact
            </h2>
            <p>
              For questions about these Terms, contact:
              <br />
              <a
                className="font-medium underline underline-offset-4"
                href="mailto:contact.sortfresh@gmail.com"
              >
                contact.sortfresh@gmail.com
              </a>
            </p>
            <p className="mt-3">
              SortFresh — A product by BRC HUB LLP.
            </p>
          </section>
        </div>
      </div>
    </LegalLayout>
  );
}
