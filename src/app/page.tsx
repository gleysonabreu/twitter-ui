"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowClockwise,
  Bell,
  BookmarkSimple,
  ChatCircle,
  DotsThreeCircle,
  EnvelopeSimple,
  Hash,
  Heart,
  House,
  Pencil,
  Sparkle,
  User,
} from "phosphor-react";
import avatarPNG from "../../public/avatar.png";
import logoSVG from "../../public/logo.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <aside className="transition-all py-6 px-5 w-20 md:w-80 h-full flex md:block flex-col items-center justify-center">
        <div className="w-8">
          <Link href="/">
            <Image
              src={logoSVG.src}
              alt="Twitter logo"
              width={32}
              height={32}
            />
          </Link>
        </div>

        <nav className="w-full h-full mt-8">
          <ul className="list-none flex gap-8 flex-col">
            <li className="dark:text-zinc-100 text-zinc-900">
              <Link
                href="/"
                className="flex gap-5 items-center text-lg font-bold transition-colors hover:text-brand-primary"
              >
                <House size={32} />
                <span className="hidden md:flex">Home</span>
              </Link>
            </li>
            <li className="dark:text-zinc-100 text-zinc-900">
              <Link
                href="/"
                className="flex gap-5 items-center text-lg font-bold transition-colors hover:text-brand-primary"
              >
                <Hash size={32} />
                <span className="hidden md:flex">Explore</span>
              </Link>
            </li>
            <li className="dark:text-zinc-100 text-zinc-900">
              <Link
                href="/"
                className="flex gap-5 items-center text-lg font-bold transition-colors hover:text-brand-primary"
              >
                <Bell size={32} />
                <span className="hidden md:flex">Notifications</span>
              </Link>
            </li>
            <li className="dark:text-zinc-100 text-zinc-900">
              <Link
                href="/"
                className="flex gap-5 items-center text-lg font-bold transition-colors hover:text-brand-primary"
              >
                <EnvelopeSimple size={32} />
                <span className="hidden md:flex">Messages</span>
              </Link>
            </li>
            <li className="dark:text-zinc-100 text-zinc-900">
              <Link
                href="/"
                className="flex gap-5 items-center text-lg font-bold transition-colors hover:text-brand-primary"
              >
                <BookmarkSimple size={32} />
                <span className="hidden md:flex">Bookmarks</span>
              </Link>
            </li>
            <li className="dark:text-zinc-100 text-zinc-900">
              <Link
                href="/"
                className="flex gap-5 items-center text-lg font-bold transition-colors hover:text-brand-primary"
              >
                <User size={32} />
                <span className="hidden md:flex">User</span>
              </Link>
            </li>
            <li className="dark:text-zinc-100 text-zinc-900">
              <Link
                href="/"
                className="flex gap-5 items-center text-lg font-bold transition-colors hover:text-brand-primary"
              >
                <DotsThreeCircle size={32} />
                <span className="hidden md:flex">More</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mt-8">
          <button className="transition-all h-14 w-14 hover:bg-brand-primary/90 bg-brand-primary md:w-full flex flex-row justify-center items-center md:py-4 md:px-6 rounded-full text-white text-xl">
            <Pencil size={32} className="flex md:hidden" />
            <span className="hidden md:flex">Tweet</span>
          </button>
        </div>
      </aside>
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
            <div
              key={index}
              className="flex flex-col justify-center items-start py-6 px-5 border-b border-zinc-200 dark:border-zinc-800"
            >
              <div className="flex gap-3">
                <div className="w-14 h-14">
                  <Image
                    src={avatarPNG.src}
                    alt="Avatar user"
                    height={56}
                    width={56}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div className="flex gap-1 items-center">
                    <h1 className="font-bold text-brand-text-black-900 dark:text-gray-100 text-base leading-tight">
                      John Doe
                    </h1>
                    <span className="text-sm text-zinc-400 dark:text-gray-400">
                      @johndoe
                    </span>
                  </div>
                  <p className="text-base  leading-tight text-zinc-900 dark:text-gray-100">
                    Acabei de migrar um projeto React GIGANTE de
                    create-react-app para Vite e os resultados foram:
                    <br />✅ npm start: De 32s para 400ms (sim, demorava 30s){" "}
                    <br />✅ npm build: De 120s para 22s <br />
                    Além disso, troquei do Yarn para o PNPM e o install das deps
                    mudou de 24s para 8s 🔥
                  </p>

                  <footer className="flex pt-3 gap-12">
                    <button className="flex gap-2 text-zinc-500 dark:text-gray-600 hover:text-brand-primary transition-colors">
                      <ChatCircle size={24} />
                      <span>32</span>
                    </button>

                    <button className="flex gap-2 text-zinc-500 dark:text-gray-600 hover:text-brand-primary transition-colors">
                      <ArrowClockwise size={24} />
                      <span>32</span>
                    </button>

                    <button className="flex gap-2 text-zinc-500 dark:text-gray-600 hover:text-brand-primary transition-colors">
                      <Heart size={24} />
                      <span>32</span>
                    </button>
                  </footer>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
