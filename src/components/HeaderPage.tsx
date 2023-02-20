import { Sparkle } from "phosphor-react";

type HeaderPageProps = {
  title: string;
};

export function HeaderPage({ title }: HeaderPageProps) {
  return (
    <div className="flex w-full items-center justify-between py-6 px-5 gap-10 border-b border-zinc-200 dark:border-zinc-800">
      <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
        {title}
      </h1>
      <Sparkle size={32} className="text-brand-primary" />
    </div>
  );
}
