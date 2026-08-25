import Image from "next/image";
import { Phone } from "lucide-react";
import { SALON } from "@/lib/site-data";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LineIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.245c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.116c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.116c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.245zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.998c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.333V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.751zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

const ctaClass =
  "flex flex-col items-center justify-center gap-1 rounded-2xl py-3.5 text-charcoal transition-transform active:scale-95";

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
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/55 to-charcoal/92" />
      </div>

      <div className="relative z-10 flex min-h-[100dvh] flex-col px-4 pt-5 pb-5">
        <header className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[10px] tracking-[0.3em] text-gold/80 uppercase">
              Zhongshan · Taipei
            </p>
            <h1 className="font-heading text-[1.65rem] font-light leading-tight tracking-wide text-cream">
              {SALON.name}
            </h1>
          </div>
          <span className="shrink-0 rounded-full border border-cream/20 px-2.5 py-1 text-[10px] text-cream/70">
            寵物友善
          </span>
        </header>

        <div className="mt-3">
          <p className="text-xs text-gold/90">{SALON.access}</p>
          <p className="mt-1 text-base font-light leading-snug text-cream">
            {SALON.tagline}
          </p>
          <p className="mt-1 text-[11px] text-cream/55">{SALON.address}</p>
        </div>

        <nav
          className="mt-4 grid grid-cols-2 gap-2"
          aria-label="主要聯絡方式"
        >
          <a
            href={SALON.phoneTel}
            className={`${ctaClass} bg-cream/95`}
            data-cta="tel"
          >
            <Phone className="h-5 w-5" strokeWidth={1.5} />
            <span className="text-xs font-medium">電話</span>
          </a>
          <a
            href={SALON.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={`${ctaClass} bg-cream/95`}
            data-cta="fb"
          >
            <FacebookIcon className="h-5 w-5" />
            <span className="text-xs font-medium">FB</span>
          </a>
          <a
            href={SALON.line}
            target="_blank"
            rel="noopener noreferrer"
            className={`${ctaClass} bg-[#06C755] text-white`}
            data-cta="line"
          >
            <LineIcon className="h-5 w-5" />
            <span className="text-xs font-medium">LINE</span>
          </a>
          <a
            href={SALON.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={`${ctaClass} bg-cream/95`}
            data-cta="ig"
          >
            <InstagramIcon className="h-5 w-5" />
            <span className="text-xs font-medium">IG</span>
          </a>
        </nav>
      </div>
    </section>
  );
}
