"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/site-data";

export function Gallery() {
  const [active, setActive] = useState(0);

  return (
    <section id="works" className="bg-cream px-5 py-14">
      <div className="mx-auto max-w-lg">
        <p className="text-[10px] tracking-[0.35em] text-gold uppercase">
          Portfolio
        </p>
        <h2 className="font-heading mt-1 text-2xl font-light text-charcoal">
          作品與空間
        </h2>
        <p className="mt-2 text-sm text-charcoal/60">
          照片來自公開媒體報導與網路分享，僅供 Demo 展示
        </p>

        <div className="mt-6 relative aspect-[4/5] overflow-hidden rounded-2xl bg-charcoal/5">
          <Image
            src={GALLERY_IMAGES[active].src}
            alt={GALLERY_IMAGES[active].alt}
            fill
            className="object-cover transition-opacity duration-300"
            sizes="(max-width: 768px) 100vw, 480px"
          />
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {GALLERY_IMAGES.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-lg transition-all ${
                active === i
                  ? "ring-2 ring-gold ring-offset-2 ring-offset-cream"
                  : "opacity-60 hover:opacity-100"
              }`}
              aria-label={`查看作品 ${i + 1}`}
            >
              <Image
                src={img.src}
                alt=""
                fill
                className="object-cover"
                sizes="56px"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
