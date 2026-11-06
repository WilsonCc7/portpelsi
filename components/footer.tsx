import { footer } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink py-6 text-[11px] font-mono uppercase tracking-[0.18em] text-mute">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-2 px-5 md:flex-row md:items-center md:justify-between md:px-10">
        <span>{footer.name}</span>
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
          <span>{footer.note}</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
