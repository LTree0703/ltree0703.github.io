import BlurFade from "@/components/magicui/blur-fade";
import GalleryImg from "@/components/gallery-img";
import { scenery } from "@/data/gallery";

export const metadata = {
  title: "Gallery",
  description: "A collection of my photographs, taken by myself, of course.",
};

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-3xl mb-8 tracking-tighter">gallery.</h1>
      </BlurFade>
      {scenery.map((id) => (
        <BlurFade key={id} delay={BLUR_FADE_DELAY * 2}>
          <GalleryImg id={id} />
        </BlurFade>
      ))}
    </section>
  );
}