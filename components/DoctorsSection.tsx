"use client";

import Image from "next/image";
import type { ClinicConfig } from "@/types/site";
import { useLanguage } from "@/components/LanguageProvider";

export default function DoctorsSection({ config }: { config: ClinicConfig }) {
  const { t } = useLanguage();
  return (
    <section id="doctors" className="bg-teal-50/70 px-6 py-16 dark:bg-slate-900 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: config.theme.primary }}>
            {t("clinic.labels.doctorsEyebrow", config.labels.doctorsEyebrow)}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-4xl">
            {t("clinic.labels.doctorsTitle", config.labels.doctorsTitle)}
          </h2>
          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{t("clinic.labels.doctorsDescription", config.labels.doctorsDescription)}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {config.doctors.map((doctor) => (
            <article key={doctor.name} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800">
              <div className="relative aspect-[4/3]">
                <Image src={doctor.photo} alt={"Portrait of " + doctor.name} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover object-top" />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold" style={{ color: config.theme.primary }}>{doctor.specialty}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">{doctor.name}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{doctor.qualification}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{doctor.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
