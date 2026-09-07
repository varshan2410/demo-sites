import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HotelRoomDetail from "@/components/HotelRoomDetail";
import SiteShell from "@/components/SiteShell";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { hotelConfig } from "@/config/hotel";

export function generateStaticParams() {
  return hotelConfig.rooms.map((room) => ({ roomId: room.id }));
}

export function generateMetadata({ params }: { params: { roomId: string } }): Metadata {
  const room = hotelConfig.rooms.find((item) => item.id === params.roomId);
  return room ? { title: `${room.name} | Kahanda Cove`, description: room.description } : { title: "Room not found" };
}

export default function HotelRoomPage({ params }: { params: { roomId: string } }) {
  if (!hotelConfig.rooms.some((room) => room.id === params.roomId)) notFound();

  return (
    <SiteShell config={hotelConfig}>
      <main id="main-content" tabIndex={-1}>
        <HotelRoomDetail config={hotelConfig} roomId={params.roomId} />
        <WhatsAppFloat config={hotelConfig} />
      </main>
    </SiteShell>
  );
}
