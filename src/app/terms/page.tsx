import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — MexiGo",
  description: "MexiGo's terms of service.",
};

export default function Terms() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 dark:bg-black">
      <div className="w-full max-w-3xl px-6 py-24">
        <h1 className="text-3xl font-bold tracking-tight text-fire-brick sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Effective date: July 14, 2026
        </p>

        <div className="mt-8 flex flex-col gap-8 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Acceptance of Terms
            </h2>
            <p className="mt-3">
              By accessing this website (mexigoapp.com), you agree to these
              Terms of Service. If you do not agree, please do not use this
              website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Description of Service
            </h2>
            <p className="mt-3">
              This website provides information about the MexiGo iOS app,
              including its features and how to download it, along with ways
              to contact the MexiGo team.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Use of the Website
            </h2>
            <p className="mt-3">
              You agree to use this website only for lawful purposes and in a
              way that does not infringe the rights of, or restrict or
              inhibit the use and enjoyment of, this website by anyone else.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Intellectual Property
            </h2>
            <p className="mt-3">
              The MexiGo name, logo, and all content on this website are the
              property of MexiGo unless otherwise noted, and may not be
              reproduced without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Third-Party Links
            </h2>
            <p className="mt-3">
              This website may link to third-party services, such as the Apple
              App Store. We are not responsible for the content or practices
              of third-party sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Disclaimer &amp; Limitation of Liability
            </h2>
            <p className="mt-3">
              This website and its content are provided &quot;as is&quot;
              without warranties of any kind. To the fullest extent permitted
              by law, MexiGo is not liable for any damages arising from your
              use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Changes to These Terms
            </h2>
            <p className="mt-3">
              We may update these Terms of Service from time to time. Changes
              will be posted on this page with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Contact Us
            </h2>
            <p className="mt-3">
              If you have questions about these Terms, contact us at{" "}
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
