import { MapPin, Clock } from "lucide-react";
import { SALON } from "@/lib/site-data";

export function Location() {
  return (
    <section id="location" className="bg-cream-warm px-5 py-14">
      <div className="mx-auto max-w-lg">
        <p className="text-[10px] tracking-[0.35em] text-gold uppercase">
          Location
        </p>
        <h2 className="font-heading mt-1 text-2xl font-light text-charcoal">
          交通資訊
        </h2>

        <div className="mt-5 space-y-3 text-sm text-charcoal/80">
          <div className="flex gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <div>
              <p className="font-medium text-charcoal">{SALON.address}</p>
              <p className="mt-0.5 text-charcoal/60">{SALON.access}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <div>
              <p>{SALON.hours.weekday}</p>
              <p>{SALON.hours.weekend}</p>
              <p className="text-charcoal/60">{SALON.hours.closed}</p>
            </div>
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl border border-charcoal/10">
          <iframe
            title="NARCISS HAIR 地圖"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(SALON.address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
            className="h-56 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SALON.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block text-center text-sm text-gold hover:underline"
        >
          在 Google Maps 開啟
        </a>
      </div>
    </section>
  );
}
