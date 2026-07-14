import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — MexiGo",
  description: "Get in touch with the MexiGo team.",
};

export default function Contact() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 dark:bg-black">
      <div className="w-full max-w-3xl px-6 py-24">
        <h1 className="text-3xl font-bold tracking-tight text-fire-brick sm:text-4xl">
          Contact Us
        </h1>

        <div className="mt-8 flex flex-col gap-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          <p>
            Have a question about MexiGo, a partnership inquiry, or feedback
            on the app? We&apos;d love to hear from you.
          </p>

          <p>
            Email us at{" "}
            <a
              href="mailto:admin@mexigoapp.com"
              className="font-semibold text-fire-brick hover:underline"
            >
              admin@mexigoapp.com
            </a>{" "}
            and we&apos;ll get back to you as soon as we can.
          </p>
        </div>
      </div>
    </div>
  );
}
