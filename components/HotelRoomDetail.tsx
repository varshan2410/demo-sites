"use client";

import Image from "next/image";
import Link from "next/link";
import type { HotelConfig } from "@/types/site";
import { useLanguage } from "@/components/LanguageProvider";

export default function HotelRoomDetail({ config, roomId }: { config: HotelConfig; roomId: string }) {
  const { t } = useLanguage();
  const room = config.rooms.find((item) => item.id === roomId);
  if (!room) return null;

  const roomName = t(`hotel.room.${room.id}`, room.name);
  const roomDescription = t(`hotel.room.${room.id}.description`, room.description);

  return (
    <section className="px-6 py-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Link href="/hotel#rooms" className="ui-button inline-flex rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-100">← Back to rooms</Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-stone-100 shadow-sm dark:bg-slate-900">
            <Image src={room.image} alt={`${roomName} at ${config.siteName}`} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: config.theme.primary }}>{room.guests}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight dark:text-white md:text-5xl">{roomName}</h1>
            <p className="mt-5 max-w-xl leading-8 text-slate-600 dark:text-slate-300">{roomDescription}</p>
            <div className="mt-7 rounded-2xl bg-stone-100 p-6 dark:bg-slate-900">
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Included with your stay</p>
              <ul className="mt-4 grid gap-3 text-sm text-slate-700 dark:text-slate-200 sm:grid-cols-2">
                {room.amenities.map((amenity) => <li key={amenity} className="flex gap-2"><span aria-hidden="true" style={{ color: config.theme.primary }}>✓</span>{amenity}</li>)}
              </ul>
            </div>
            <p className="mt-7 text-3xl font-semibold dark:text-white">LKR {room.rateLKR.toLocaleString()} <span className="text-base font-normal text-slate-500">{config.labels.roomsRateSuffix}</span></p>
            <Link href="/hotel#availability" className="ui-button mt-7 inline-flex rounded-full px-6 py-3 font-semibold text-white" style={{ backgroundColor: config.theme.primary }}>Check availability</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
