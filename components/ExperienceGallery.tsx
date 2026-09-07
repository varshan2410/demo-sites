import Image from "next/image";
import type { GalleryImage } from "@/types/site";
import { useLanguage } from "@/components/LanguageProvider";

export default function ExperienceGallery({ id, eyebrow, title, eyebrowKey, titleKey, images, accent }: { id: string; eyebrow: string; title: string; eyebrowKey: string; titleKey: string; images: GalleryImage[]; accent: string }) {
  const { t } = useLanguage();
  return (
    <section id={id} className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>{t(eyebrowKey, eyebrow)}</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight dark:text-white md:text-4xl">{t(titleKey, title)}</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <figure key={image.src} className={"group relative overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900 " + (index === 0 ? "sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-auto" : "aspect-[4/3]")}>
              <Image src={image.src} alt={image.alt} fill sizes={index === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"} className="object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent px-5 pb-4 pt-10 text-sm font-medium text-white opacity-0 transition group-hover:opacity-100">{image.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
