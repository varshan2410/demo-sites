import type { WhatsAppConfig } from "@/types/site";

export default function WhatsAppFloat({ config }: { config: { whatsapp: WhatsAppConfig } }) {
  const url =
    "https://wa.me/" +
    config.whatsapp.number +
    "?text=" +
    encodeURIComponent(config.whatsapp.defaultMessage);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={config.whatsapp.ariaLabel}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7 fill-current">
        <path d="M16 3a13 13 0 0 0-11.15 19.68L3 29l6.49-1.7A13 13 0 1 0 16 3Zm0 23.65a10.56 10.56 0 0 1-5.38-1.47l-.39-.23-3.85 1 1.03-3.75-.25-.39A10.63 10.63 0 1 1 16 26.65Zm5.83-7.95c-.32-.16-1.91-.94-2.2-1.05-.3-.1-.51-.16-.73.16-.22.32-.84 1.05-1.03 1.26-.19.21-.38.24-.7.08a8.69 8.69 0 0 1-2.58-1.59 9.66 9.66 0 0 1-1.78-2.22c-.19-.32 0-.49.14-.64.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62a1.2 1.2 0 0 0-.86.4 3.6 3.6 0 0 0-1.12 2.68c0 1.58 1.15 3.11 1.31 3.32.16.21 2.27 3.46 5.49 4.85.77.33 1.37.53 1.84.68.77.24 1.47.21 2.03.13.62-.09 1.91-.78 2.18-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
