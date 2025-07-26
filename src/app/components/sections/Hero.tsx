// src/app/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mb-6">
      {/* Border shadow effect */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-gray-800 dark:bg-gray-100 z-0" />

      {/* Main container */}
      <div className="relative z-10 flex flex-col items-center gap-2 text-center p-6 rounded-2xl border border-black dark:border-white bg-gray-100 dark:bg-gray-900">
        <Image
          src="/murilo_ia.png"
          alt="Murilo Zangari"
          width={96}
          height={96}
          className="w-32 h-36 object-cover object-top rounded-md border-2 border-gray-800 dark:border-gray-300 transition-transform duration-300 hover:scale-105"
          priority
        />

        <h1 className="text-2xl font-bold mt-4">
          Murilo Zangari
        </h1>
        <p className="font-medium">
          Full-stack Software | Data | Machine Learning Engineer | PhD in Computer Science
        </p>
      </div>
    </section>
  );
}
