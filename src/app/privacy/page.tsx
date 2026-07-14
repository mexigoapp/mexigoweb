import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — MexiGo",
  description: "MexiGo's privacy policy.",
};

export default function Privacy() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 dark:bg-black">
      <div className="w-full max-w-3xl px-6 py-24">
        <h1 className="text-3xl font-bold tracking-tight text-fire-brick sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Effective date: July 14, 2026
        </p>

        <div className="mt-8 flex flex-col gap-8 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Overview
            </h2>
            <p className="mt-3">
              This Privacy Policy describes how MexiGo (&quot;MexiGo,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) handles
              information in connection with this website
              (mexigoapp.com) and the MexiGo iOS app. We are committed to
              being transparent about what information we collect and how we
              use it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Information We Collect
            </h2>
            <p className="mt-3">
              This website does not require you to create an account or
              submit personal information to browse it. If you contact us by
              email, we receive whatever information you choose to include in
              that message (such as your name and email address). If we add
              website analytics in the future, we may collect standard,
              aggregated technical information such as browser type, device
              type, and pages visited, in order to understand how the site is
              used.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              How We Use Information
            </h2>
            <p className="mt-3">
              We use the information described above to respond to inquiries,
              operate and improve this website, and understand how visitors
              use our content. We do not sell personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Cookies &amp; Analytics
            </h2>
            <p className="mt-3">
              We may use cookies or similar technologies provided by
              third-party analytics services to understand aggregate site
              usage. These services may set their own cookies subject to
              their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              The MexiGo App
            </h2>
            <p className="mt-3">
              As new features are added to the MexiGo app and website
              (including account registration, messaging, or business
              listings), this Privacy Policy will be updated to describe what
              additional information is collected and how it is used and
              protected.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Changes
              will be posted on this page with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Contact Us
            </h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy, contact us at{" "}
              <a
                href="mailto:admin@mexigoapp.com"
                className="font-semibold text-fire-brick hover:underline"
              >
                admin@mexigoapp.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
