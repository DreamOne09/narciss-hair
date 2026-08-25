import { DemoOverlay } from "@/components/demo-overlay";
import { Hero } from "@/components/hero";
import { Gallery } from "@/components/gallery";
import { Services } from "@/components/services";
import { Highlights } from "@/components/highlights";
import { PetFriendly } from "@/components/pet-friendly";
import { Booking } from "@/components/booking";
import { Location } from "@/components/location";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <DemoOverlay />
      <main>
        <Hero />
        <Gallery />
        <Services />
        <Highlights />
        <PetFriendly />
        <Booking />
        <Location />
      </main>
      <Footer />
    </>
  );
}
