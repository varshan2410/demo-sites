"use client";

import { useCallback, useEffect, useState } from "react";
import { pendingSubmissionCount, sendQueuedSubmissions } from "@/lib/offlineQueue";

export default function OfflineSubmissionQueue() {
  const [pending, setPending] = useState(0);
  const [message, setMessage] = useState("");

  const refresh = useCallback(() => setPending(pendingSubmissionCount()), []);
  const sendPending = useCallback(async () => {
    if (!navigator.onLine) return;
    const result = await sendQueuedSubmissions();
    setPending(result.pendingCount);
    if (result.sentCount) setMessage(`${result.sentCount} queued request${result.sentCount === 1 ? "" : "s"} sent.`);
  }, []);

  useEffect(() => {
    refresh();
    void sendPending();
    window.addEventListener("online", sendPending);
    window.addEventListener("cydo-queue-change", refresh);
    return () => {
      window.removeEventListener("online", sendPending);
      window.removeEventListener("cydo-queue-change", refresh);
    };
  }, [refresh, sendPending]);

  if (!pending && !message) return null;
  return (
    <div role="status" aria-live="polite" className="fixed bottom-5 left-5 z-50 max-w-sm rounded-2xl bg-slate-950 px-4 py-3 text-sm text-white shadow-xl">
      {pending ? `${pending} request${pending === 1 ? "" : "s"} queued. It will send automatically when you are back online.` : message}
    </div>
  );
}
