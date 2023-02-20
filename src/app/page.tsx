"use client";
import { Aside } from "@/components/Aside";
import { Tweet } from "@/components/Tweet";
import Image from "next/image";
import { Sparkle } from "phosphor-react";
import avatarPNG from "../../public/avatar.png";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Aside />
      <section className="flex flex-1 flex-col items-start border-l border-r border-zinc-200 dark:border-zinc-800">
        <div className="flex w-full items-center justify-between py-6 px-5 gap-10 border-b border-zinc-200 dark:border-zinc-800">
          <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            Home
          </h1>
          <Sparkle size={32} className="text-brand-primary" />
        </div>

        <div className="flex w-full flex-col items-start py-6 px-5 border-b border-zinc-200 dark:border-zinc-800 gap-8">
          <div className="flex items-center gap-4 w-full">
            <Image
              src={avatarPNG.src}
              alt="Avatar user"
              height={56}
              width={56}
              className="rounded-full"
            />
            <input
              type="text"
              placeholder="Whats happening?"
              className="bg-transparent h-14 w-full outline-none dark:placeholder:text-zinc-200 placeholder:text-zinc-900 placeholder:font-bold text-lg text-zinc-900 dark:text-gray-100"
            />
          </div>
          <div className="flex w-full justify-end">
            <button className="transition- h-10 hover:bg-brand-primary/90 bg-brand-primary flex flex-row justify-center items-center py-4 px-6 rounded-full text-zinc-100 text-base">
              Tweet
            </button>
          </div>
        </div>
        <div className="w-full py-6 px-8 bg-zinc-200 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-800" />

        <div className="w-full">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <Tweet key={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
