import BlurFade from "@/components/magicui/blur-fade";
import GalleryImg from "@/components/gallery-img";
import { imageData } from "@/data/gallery";

export const metadata = {
  title: "Gallery",
  description: "A collection of my photographs, taken by my Canon EOS R8.",
};

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-3xl mb-8 tracking-tighter">gallery.</h1>
      </BlurFade>
      {imageData.map((image) => (
        <BlurFade key={image.img} delay={BLUR_FADE_DELAY * 2}>
          <GalleryImg id={image.img} alt={image.alt} />
        </BlurFade>
      ))}
    </section>
  );
}