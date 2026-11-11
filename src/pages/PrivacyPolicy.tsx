import { Link } from "react-router-dom";
import LegalLayout from "../components/LegalLayout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout>
    <div className="min-h-screen bg-[var(--bg-primary)] px-5 py-12 text-[var(--text-primary)]">
      <div className="mx-auto max-w-3xl">
        <Link to="/" className="text-sm font-medium opacity-70 hover:opacity-100">
          ← Back to SortFresh
        </Link>

        <h1 className="mt-10 text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-3 text-sm opacity-60">Last updated: November 10, 2026</p>

        <div className="mt-10 space-y-8 leading-7 opacity-85">
          <section>
            <h2 className="mb-2 text-xl font-semibold">1. Introduction</h2>
            <p>
              SortFresh is a kitchen inventory application developed by BRC HUB LLP.
              This Privacy Policy explains how information is handled when you use
              the SortFresh application and website.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">2. Information We Collect</h2>
            <p>
              SortFresh is designed to work locally on your device. The current
              version does not require you to create an account. Information you
              enter, such as kitchen items, quantities, storage locations and
              expiry dates, is stored locally on your device.
            </p>
            <p className="mt-3">
              We do not operate a cloud account or synchronisation service in the
              current version. This may change in future versions, in which case
              this policy will be updated.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">3. Device Storage and Notifications</h2>
            <p>
              SortFresh may use local device storage to retain your inventory
              information. If you enable reminders, the app may use local
              notifications to remind you about items approaching their expiry
              dates.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">4. Data Sharing</h2>
            <p>
              The current version does not provide an account-based data-sharing
              feature. Information stored locally in the app is not intentionally
              transmitted to our servers by the inventory functionality.
            </p>
            <p className="mt-3">
              Any third-party services or SDKs integrated into the app may process
              technical information according to their own privacy policies.
              Their use should be reviewed before publication.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">5. Data Retention and Deletion</h2>
            <p>
              Inventory information is retained locally on your device until you
              delete it or remove the application and its associated data.
              Uninstalling the app may permanently remove locally stored data.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">6. Children's Privacy</h2>
            <p>
              SortFresh is a general-purpose kitchen inventory application and is
              not specifically directed at children. If you believe a child has
              provided personal information to us, please contact us.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy as the app evolves. Changes will
              be published on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">8. Contact Us</h2>
            <p>
              For privacy-related questions, contact us at:
              <br />
              <a className="underline" href="mailto:contact.sortfresh@gmail.com">
                contact.sortfresh@gmail.com
              </a>
            </p>
            <p className="mt-3">SortFresh — A product by BRC HUB LLP.</p>
          </section>
        </div>
      </div>
    </div>
    </LegalLayout>
  );
}
