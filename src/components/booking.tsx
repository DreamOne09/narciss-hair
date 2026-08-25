import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { BOOKING_STEPS, SALON } from "@/lib/site-data";

export function Booking() {
  return (
    <section id="booking" className="bg-cream px-5 py-14">
      <div className="mx-auto max-w-lg">
        <p className="text-[10px] tracking-[0.35em] text-gold uppercase">
          Reservation
        </p>
        <h2 className="font-heading mt-1 text-2xl font-light text-charcoal">
          預約你的變美時光
        </h2>
        <p className="mt-2 text-sm text-charcoal/60">
          建議提前預約，熱門時段較容易滿檔
        </p>

        <div className="mt-6 space-y-4">
          {BOOKING_STEPS.map((item) => (
            <div key={item.step} className="flex gap-4">
              <span className="font-heading text-2xl font-light text-gold/50">
                {item.step}
              </span>
              <div>
                <h3 className="font-medium text-charcoal">{item.title}</h3>
                <p className="mt-0.5 text-sm text-charcoal/60">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-3">
          <a
            href={SALON.line}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-full items-center justify-center rounded-2xl bg-[#06C755] text-base font-medium text-white transition-colors hover:bg-[#05b34c]"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            LINE 預約（推薦）
          </a>
          <a
            href={SALON.phoneTel}
            className="flex h-12 w-full items-center justify-center rounded-2xl border border-charcoal/20 text-base font-medium text-charcoal transition-colors hover:bg-charcoal/5"
          >
            <Phone className="mr-2 h-5 w-5" />
            來電 {SALON.phone}
          </a>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-gold/30 bg-gold/10 p-4">
          <CalendarCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
          <div className="text-sm text-charcoal/80">
            <p className="font-medium text-charcoal">營業時間</p>
            <p className="mt-1">{SALON.hours.weekday}</p>
            <p>{SALON.hours.weekend}</p>
            <p className="text-charcoal/60">{SALON.hours.closed}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
