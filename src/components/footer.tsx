import { AGENCY, DEMO_DISCLAIMER, SALON } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-charcoal px-5 py-10 text-cream/60">
      <div className="mx-auto max-w-lg space-y-6">
        <div>
          <p className="font-heading text-lg text-cream">{SALON.name}</p>
          <p className="mt-1 text-sm">{SALON.address}</p>
          <p className="text-sm">{SALON.phone}</p>
        </div>

        <div className="space-y-1 text-xs leading-relaxed">
          <p>{DEMO_DISCLAIMER}</p>
          <p className="mt-2">
            Demo 製作：{AGENCY.name} · 顧問 {AGENCY.consultant}
          </p>
        </div>

        <p className="text-[10px] text-cream/40">
          © {new Date().getFullYear()} Demo Site — Not affiliated with {SALON.nameAlt}
        </p>
      </div>
    </footer>
  );
}
