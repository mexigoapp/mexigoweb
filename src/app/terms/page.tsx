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
          Effective date: July 20, 2026
        </p>

        <div className="mt-8 flex flex-col gap-8 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Acceptance of Terms
            </h2>
            <p className="mt-3">
              By accessing this website (mexigoapp.com) or using the MexiGo
              iOS app, you agree to these Terms of Service. If you do not
              agree, please do not use this website or the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Description of Service
            </h2>
            <p className="mt-3">
              This website provides information about the MexiGo iOS app,
              including its features and how to download it, along with ways
              to contact the MexiGo team. The MexiGo app is a travel
              information guide covering destinations, activities,
              attractions, events, golf courses, restaurants, wedding venues,
              and experiences across Mexico.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Informational Content Only
            </h2>
            <p className="mt-3">
              Listings, hours, prices, event dates, and other details shown
              in the app are provided for general informational purposes and
              may change or be inaccurate. MexiGo is not a booking or
              reservation service, is not affiliated with the businesses and
              venues it describes, and is not responsible for the accuracy of
              third-party information or for any transaction you make
              directly with a listed business. Always confirm details
              directly with the business or venue before relying on them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Emergency &amp; Safety Information
            </h2>
            <p className="mt-3">
              The app&apos;s emergency contacts and travel safety information
              are provided as a convenience and may not be complete, current,
              or accurate for your location. They are not a substitute for
              contacting local emergency services directly. In an emergency,
              always call the applicable local emergency number rather than
              relying solely on the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Use of the Website and App
            </h2>
            <p className="mt-3">
              You agree to use this website and the MexiGo app only for
              lawful purposes and in a way that does not infringe the rights
              of, or restrict or inhibit the use and enjoyment of, the
              website or app by anyone else.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Intellectual Property
            </h2>
            <p className="mt-3">
              The MexiGo name, logo, and all content on this website and in
              the MexiGo app are the property of MexiGo unless otherwise
              noted, and may not be reproduced without permission.
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
              This website, the MexiGo app, and their content are provided
              &quot;as is&quot; without warranties of any kind. To the
              fullest extent permitted by law, MexiGo is not liable for any
              damages arising from your use of this website or the app,
              including reliance on any informational, business, or safety
              content described above.
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
