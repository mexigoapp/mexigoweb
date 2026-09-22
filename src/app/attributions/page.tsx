import type { Metadata } from "next";
import {
  type Attribution,
  iconAttributions,
  imageAttributions,
} from "@/data/image-attributions";

export const metadata: Metadata = {
  title: "Image Attributions — MexiGo",
  description:
    "Credits for Creative Commons and Unsplash-licensed images and icons used in the MexiGo app.",
};

function AttributionCard({ attribution }: { attribution: Attribution }) {
  return (
    <li className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
      <p className="font-semibold text-zinc-900 dark:text-zinc-100">
        {attribution.title}
      </p>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
        by {attribution.author}
      </p>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        <a
          href={attribution.originalURL}
          className="font-medium text-fire-brick hover:underline"
        >
          View original
        </a>
        <a
          href={attribution.licenseURL}
          className="text-zinc-500 hover:text-fire-brick hover:underline dark:text-zinc-400"
        >
          {attribution.license}
        </a>
      </div>
    </li>
  );
}

export default function Attributions() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 dark:bg-black">
      <div className="w-full max-w-3xl px-6 py-24">
        <h1 className="text-3xl font-bold tracking-tight text-fire-brick sm:text-4xl">
          Image Attributions
        </h1>

        <div className="mt-6 flex flex-col gap-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          <p>
            The MexiGo app uses photos and icons licensed under Creative
            Commons and the Unsplash License. This page credits every
            author whose work we&apos;ve sourced, including a few photos not
            yet placed in the app.
          </p>
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Photos
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {imageAttributions.map((attribution) => (
              <AttributionCard key={attribution.originalURL} attribution={attribution} />
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Icons
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {iconAttributions.map((attribution) => (
              <AttributionCard key={attribution.originalURL} attribution={attribution} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
