import { nav, site } from "@/content/site";
import { CvButton } from "@/components/cv-button";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-paper/90 backdrop-blur-sm">
      <nav className="mx-auto flex h-14 w-full items-center justify-between gap-3 px-5 md:px-10">
        <a
          href="#top"
          className="hidden whitespace-nowrap font-display text-base uppercase tracking-tight text-ink sm:block md:text-lg"
        >
          {site.name}
        </a>
        <div className="flex items-center gap-3 sm:gap-5 lg:gap-7">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="label whitespace-nowrap border-b border-transparent text-ink transition-colors hover:border-garnet hover:text-garnet"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden shrink-0 min-[380px]:block">
          <CvButton label="CV" tone="ink" className="whitespace-nowrap !px-4 !py-2" />
        </div>
      </nav>
    </header>
  );
}
