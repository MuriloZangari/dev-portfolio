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
          src="/profile.jpg"
          alt="Murilo Zangari"
          width={96}
          height={96}
          className="rounded-md"
          priority
        />

        <h1 className="text-2xl font-bold mt-4">
          Murilo Zangari
        </h1>
        <p className="">
          Software Engineer, PhD in Computer Science
        </p>
      </div>
    </section>
  );
}
