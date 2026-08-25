import Image from "next/image";
import { PawPrint } from "lucide-react";
import { SALON } from "@/lib/site-data";

export function PetFriendly() {
  if (!SALON.petFriendly) return null;

  return (
    <section className="bg-cream-warm px-5 py-14">
      <div className="mx-auto max-w-lg">
        <div className="flex items-center gap-2">
          <PawPrint className="h-5 w-5 text-gold" strokeWidth={1.5} />
          <p className="text-[10px] tracking-[0.35em] text-gold uppercase">
            Pet Friendly
          </p>
        </div>
        <h2 className="font-heading mt-1 text-2xl font-light text-charcoal">
          寵物友善空間
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
          公開資訊提及 NARCISS HAIR 為寵物友善髮廊，歡迎帶毛孩一同前往。
          店門前小巧溫馨的前院，也是許多網友分享的打卡角落。
        </p>

        <div className="mt-5 grid grid-cols-2 gap-2">
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/gallery/work-10.webp"
              alt="NARCISS HAIR 店前庭院"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/gallery/work-1.webp"
              alt="NARCISS HAIR 溫馨氛圍"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
