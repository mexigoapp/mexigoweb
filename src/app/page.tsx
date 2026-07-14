const features = [
  "Destinations",
  "Activities",
  "Attractions",
  "Events",
  "Golf",
  "Restaurants",
  "Weddings",
  "Experiences",
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-10 px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-fire-brick sm:text-5xl">
          MexiGo
        </h1>

        <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Your guide to Mexico — destinations, activities, attractions,
          events, golf, restaurants, and more, all in one iOS app.
        </p>

        <ul className="flex flex-wrap justify-center gap-3 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {features.map((feature) => (
            <li
              key={feature}
              className="rounded-full border border-zinc-200 px-4 py-1.5 dark:border-zinc-800"
            >
              {feature}
            </li>
          ))}
        </ul>

        <span className="rounded-full border border-fire-brick/30 bg-fire-brick/5 px-8 py-3 text-base font-semibold text-fire-brick">
          Coming Soon to the App Store
        </span>
      </div>
    </div>
  );
}
