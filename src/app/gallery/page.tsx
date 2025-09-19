import BlurFade from "@/components/magicui/blur-fade";
import GalleryImg from "@/components/gallery-img";

export const metadata = {
  title: "Gallery",
  description: "A collection of my favorite images and artwork.",
};

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-3xl mb-8 tracking-tighter">gallery.</h1>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <GalleryImg id="lake-tekapo"/>
      </BlurFade>
    </section>
  );
}