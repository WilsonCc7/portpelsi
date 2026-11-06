import { contact, cv, site } from "@/content/site";
import { CvButton } from "@/components/cv-button";

export default function Cta() {
  return (
    <>
      <section aria-labelledby="cv-heading" className="w-full bg-acid py-20 text-ink md:py-28">
        <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-5 md:grid-cols-12 md:gap-8 md:px-10">
          <div className="md:col-span-7">
            <p className="label mb-6 text-ink opacity-70">{cv.label}</p>
            <h2
              id="cv-heading"
              className="max-w-[18ch] font-display text-[clamp(2rem,5vw,4.2rem)] leading-[0.95] tracking-[-0.03em]"
            >
              {cv.heading}
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="max-w-[46ch] text-base leading-relaxed">{cv.body}</p>
            <div className="mt-8 flex flex-col items-start gap-5">
              <CvButton label="Unduh CV (PDF)" tone="ink" />
            </div>
            {!site.cv.available && (
              <p className="mt-4 max-w-[40ch] font-mono text-xs opacity-70">
                {cv.unavailableNote}
              </p>
            )}
          </div>
        </div>
      </section>

      <section
        id="kontak"
        aria-labelledby="contact-heading"
        className="mx-auto w-full max-w-[1400px] px-5 py-20 md:px-10 md:py-32"
      >
        <p className="label mb-6 text-mute">{contact.label}</p>
        <h2
          id="contact-heading"
          className="max-w-[18ch] font-display text-[clamp(2rem,5vw,3.6rem)] leading-[0.98] tracking-[-0.02em]"
        >
          {contact.heading}
        </h2>
        <p className="mt-6 max-w-[54ch] leading-relaxed">{contact.body}</p>

        <div className="mt-12 border-b border-ink">
          {contact.channels.map((channel) => (
            <a
              key={channel.k}
              href={channel.href}
              className="group flex items-baseline justify-between gap-4 border-t border-ink py-5 transition-colors hover:bg-acid"
            >
              <span className="label text-mute group-hover:text-ink">{channel.k}</span>
              <span className="font-display text-right text-xl transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
                {channel.v}
              </span>
            </a>
          ))}
          {site.email !== null && (
            <a
              href={`mailto:${site.email}`}
              className="group flex items-baseline justify-between gap-4 border-t border-ink py-5 transition-colors hover:bg-acid"
            >
              <span className="label text-mute group-hover:text-ink">Email</span>
              <span className="font-display text-right text-xl transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
                {site.email}
              </span>
            </a>
          )}
        </div>
      </section>
    </>
  );
}
