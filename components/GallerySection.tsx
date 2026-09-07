import Image from "next/image";
import type { ClinicConfig } from "@/types/site";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function GallerySection({ config }: { config: ClinicConfig }) {
  return (
    <section id="gallery" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: config.theme.primary }}>
            {config.labels.galleryEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight dark:text-white md:text-4xl">{config.labels.galleryTitle}</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <BeforeAfterSlider config={config} />
          <div className="grid grid-cols-2 gap-4">
            {config.gallery.map((image, index) => (
              <div key={image.src} className={"relative overflow-hidden rounded-2xl bg-slate-100 " + (index === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square")}>
                <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
