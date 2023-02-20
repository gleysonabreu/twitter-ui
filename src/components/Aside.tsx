import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  EnvelopeSimple,
  Hash,
  House,
  Pencil,
  User,
} from "phosphor-react";
import logoSVG from "../../public/logo.svg";

export function Aside() {
  return (
    <aside className="transition-all py-6 px-5 w-20 md:w-80 h-full flex md:block flex-col items-center justify-center">
      <div className="w-8">
        <Link href="/">
          <Image src={logoSVG.src} alt="Twitter logo" width={32} height={32} />
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
  );
}
