import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — MexiGo",
  description:
    "MexiGo is a travel companion app built to help visitors discover the best of Mexico — destinations, activities, attractions, events, golf, restaurants, weddings, and experiences.",
};

export default function About() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 dark:bg-black">
      <div className="w-full max-w-3xl px-6 py-24">
        <h1 className="text-3xl font-bold tracking-tight text-fire-brick sm:text-4xl">
          About MexiGo
        </h1>

        <div className="mt-8 flex flex-col gap-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          <p>
            MexiGo is a travel companion app built to help visitors discover
            the best of Mexico. Whether you&apos;re planning a trip or already
            exploring, MexiGo brings together destinations, activities,
            attractions, events, golf courses, restaurants, wedding venues,
            and unique experiences in one place.
          </p>

          <p>
            Our goal is simple: make it easier to find things worth doing,
            eating, and seeing across Mexico, all curated and organized so you
            can spend less time searching and more time exploring.
          </p>

          <p>
            MexiGo is currently available as an iOS app, with this website
            serving as a home base for information about the app and how to
            get in touch with our team.
          </p>
        </div>
      </div>
    </div>
  );
}
