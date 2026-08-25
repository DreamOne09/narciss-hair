import { SERVICES } from "@/lib/site-data";
import { Card, CardContent } from "@/components/ui/card";

export function Services() {
  return (
    <section id="services" className="bg-charcoal px-5 py-14 text-cream">
      <div className="mx-auto max-w-lg">
        <p className="text-[10px] tracking-[0.35em] text-gold uppercase">
          Services
        </p>
        <h2 className="font-heading mt-1 text-2xl font-light">專業服務</h2>
        <p className="mt-2 text-sm text-cream/60">
          剪、燙、染、護 — 詳細費用請透過 LINE 或來電洽詢
        </p>

        <div className="mt-6 grid gap-3">
          {SERVICES.map((s) => (
            <Card
              key={s.title}
              className="border-cream/10 bg-charcoal-light/50 text-cream"
            >
              <CardContent className="p-4">
                <h3 className="font-medium text-gold">{s.title}</h3>
                <p className="mt-1 text-sm text-cream/70">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
