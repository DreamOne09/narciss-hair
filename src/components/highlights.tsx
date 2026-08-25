import { PUBLIC_HIGHLIGHTS } from "@/lib/site-data";

export function Highlights() {
  return (
    <section className="bg-charcoal px-5 py-14 text-cream">
      <div className="mx-auto max-w-lg">
        <p className="text-[10px] tracking-[0.35em] text-gold uppercase">
          About
        </p>
        <h2 className="font-heading mt-1 text-2xl font-light">沙龍特色</h2>
        <p className="mt-2 text-sm text-cream/60">
          以下摘要整理自公開媒體與網路分享，非店家委託撰寫
        </p>

        <ul className="mt-6 space-y-4">
          {PUBLIC_HIGHLIGHTS.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-relaxed text-cream/80"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
