import Image from "next/image";
import { Phone } from "lucide-react";
import { SALON } from "@/lib/site-data";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LineIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.245c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.116c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.116c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.245zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.998c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.333V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.751zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.751zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col">
      <div className="absolute inset-0">
        <Image
          src="/gallery/work-9.webp"
          alt="NARCISS HAIR 沙龍氛圍"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/90" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col px-5 pt-6 pb-4">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-[10px] tracking-[0.35em] text-gold/80 uppercase">
              Zhongshan · Taipei
            </p>
            <h1 className="font-heading text-2xl font-light tracking-wide text-cream sm:text-3xl">
              {SALON.name}
            </h1>
          </div>
          <span className="rounded-full border border-cream/20 px-3 py-1 text-[10px] text-cream/70">
            寵物友善
          </span>
        </header>

        <div className="flex flex-1 flex-col justify-end pt-24">
          <p className="mb-1 text-sm text-gold/90">{SALON.access}</p>
          <p className="max-w-xs text-lg font-light leading-snug text-cream">
            {SALON.tagline}
          </p>
          <p className="mt-2 text-xs text-cream/60">{SALON.address}</p>
        </div>

        <nav
          className="relative z-50 mt-5 grid grid-cols-3 gap-2"
          aria-label="主要聯絡方式"
        >
          <a
            href={SALON.phoneTel}
            className="flex flex-col items-center justify-center gap-1.5 rounded-2xl bg-cream/95 py-4 text-charcoal transition-transform active:scale-95"
          >
            <Phone className="h-5 w-5" strokeWidth={1.5} />
            <span className="text-xs font-medium">電話</span>
          </a>
          <a
            href={SALON.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1.5 rounded-2xl bg-cream/95 py-4 text-charcoal transition-transform active:scale-95"
          >
            <InstagramIcon className="h-5 w-5" />
            <span className="text-xs font-medium">IG</span>
          </a>
          <a
            href={SALON.line}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1.5 rounded-2xl bg-[#06C755] py-4 text-white transition-transform active:scale-95"
          >
            <LineIcon className="h-5 w-5" />
            <span className="text-xs font-medium">LINE</span>
          </a>
        </nav>
      </div>
    </section>
  );
}
