import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import CategoryList from "@/components/Category/CategoryList/CategoryList";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <CategoryList />
    </div>
  );
}
