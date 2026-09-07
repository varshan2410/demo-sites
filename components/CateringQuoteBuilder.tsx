"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import type { CateringPackage, ContactConfig, ThemeConfig, WhatsAppConfig } from "@/types/site";
import { useLanguage } from "@/components/LanguageProvider";

type QuoteLabels = { quoteTitle: string; quotePackageLabel: string; quoteGuestsLabel: string; quoteEstimatedTotalLabel: string; quotePrintLabel: string; quoteWhatsAppLabel: string; perHeadLabel: string; minimumGuestsLabel: string };

export default function CateringQuoteBuilder({ packages, contact, whatsapp, theme, siteName, labels }: { packages: CateringPackage[]; contact: ContactConfig; whatsapp: WhatsAppConfig; theme: ThemeConfig; siteName: string; labels: QuoteLabels }) {
  const { t } = useLanguage();
  const [packageIndex, setPackageIndex] = useState(0);
  const [guests, setGuests] = useState(packages[0]?.minimumGuests ?? 1);
  const [isMounted, setIsMounted] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const selectedPackage = packages[packageIndex];
  const guestCount = Math.max(selectedPackage?.minimumGuests ?? 1, guests || 1);
  const total = (selectedPackage?.pricePerHeadLKR ?? 0) * guestCount;

  useEffect(() => setIsMounted(true), []);
  useEffect(() => setGuests(packages[packageIndex]?.minimumGuests ?? 1), [packageIndex, packages]);

  function printQuote() {
    setIsPrinting(true);
    requestAnimationFrame(() => {
      window.print();
      setIsPrinting(false);
    });
  }

  const whatsappUrl = useMemo(() => {
    if (!selectedPackage) return "#";
    const message = `Hello ${siteName}, I would like a catering quote for ${selectedPackage.name}: ${guestCount} guests at LKR ${selectedPackage.pricePerHeadLKR.toLocaleString()} per person. Estimated total: LKR ${total.toLocaleString()}.`;
    return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(message)}`;
  }, [guestCount, selectedPackage, siteName, total, whatsapp.number]);

  if (!selectedPackage) return null;

  return (
    <>
      <div className="mt-8 rounded-3xl border border-orange-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
        <h3 className="text-xl font-semibold dark:text-white">{labels.quoteTitle}</h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium dark:text-slate-200">{labels.quotePackageLabel}<select value={packageIndex} onChange={(event) => setPackageIndex(Number(event.target.value))} className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white">{packages.map((item, index) => <option key={item.name} value={index}>{item.name}</option>)}</select></label>
          <label className="text-sm font-medium dark:text-slate-200">{labels.quoteGuestsLabel}<input type="number" min={selectedPackage.minimumGuests} value={guests} onChange={(event) => setGuests(Number(event.target.value))} className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white" /></label>
        </div>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-4 rounded-2xl bg-orange-50 p-4 dark:bg-slate-900"><div><p className="text-sm text-slate-600 dark:text-slate-300">{labels.quoteEstimatedTotalLabel}</p><p className="mt-1 text-2xl font-semibold dark:text-white">LKR {total.toLocaleString()}</p><p className="mt-1 text-xs text-slate-500">{guestCount} guests · LKR {selectedPackage.pricePerHeadLKR.toLocaleString()} {labels.perHeadLabel}</p></div><div className="flex flex-wrap gap-2"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ui-button rounded-full px-4 py-2 text-sm font-semibold text-white" style={{ backgroundColor: theme.primary }}>{labels.quoteWhatsAppLabel}</a><button type="button" onClick={printQuote} className="ui-button rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold dark:border-slate-700 dark:text-white">{labels.quotePrintLabel}</button></div></div>
      </div>
      {isMounted && isPrinting ? createPortal(<article id="catering-quote-receipt"><div className="receipt-card"><header className="receipt-header" style={{ backgroundColor: theme.primary }}><p style={{ margin: 0, fontSize: 12, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase" }}>{t("print.catering.title", "Catering quote")}</p><h1 style={{ margin: "8px 0 0", fontSize: 26 }}>{siteName}</h1><p style={{ margin: "6px 0 0", opacity: .86 }}>{contact.address}</p></header><div className="receipt-body"><p style={{ margin: "0 0 20px", fontSize: 15 }}>{t("print.catering.estimatedQuote", "Estimated catering quote")}</p><div className="receipt-grid"><div><p className="receipt-label">{t("print.catering.package", "Package")}</p><p className="receipt-value">{selectedPackage.name}</p></div><div><p className="receipt-label">{t("print.guests", "Guests")}</p><p className="receipt-value">{guestCount}</p></div><div><p className="receipt-label">{t("print.catering.rate", "Rate")}</p><p className="receipt-value">LKR {selectedPackage.pricePerHeadLKR.toLocaleString()} {t("print.catering.perPerson", "per person")}</p></div><div><p className="receipt-label">{t("print.catering.estimatedTotal", "Estimated total")}</p><p className="receipt-value">LKR {total.toLocaleString()}</p></div></div><footer className="receipt-footer">{t("print.catering.note", "This is an estimated quote. Final selections, service charges and availability will be confirmed by the restaurant.")}<br />{contact.hours}</footer></div></div></article>, document.body) : null}
    </>
  );
}
