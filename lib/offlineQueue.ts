export type QueuedSubmission = {
  id: string;
  endpoint: string;
  payload: Record<string, unknown>;
  createdAt: string;
};

const queueKey = "cydo-pending-submissions";

function readQueue(): QueuedSubmission[] {
  try {
    const stored = window.localStorage.getItem(queueKey);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function writeQueue(queue: QueuedSubmission[]) {
  window.localStorage.setItem(queueKey, JSON.stringify(queue));
  window.dispatchEvent(new Event("cydo-queue-change"));
}

export function queueSubmission(endpoint: string, payload: Record<string, unknown>) {
  const queue = readQueue();
  queue.push({ id: crypto.randomUUID(), endpoint, payload, createdAt: new Date().toISOString() });
  writeQueue(queue);
}

export async function sendQueuedSubmissions() {
  const queue = readQueue();
  const remaining: QueuedSubmission[] = [];
  let sentCount = 0;

  for (const submission of queue) {
    try {
      const response = await fetch(submission.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission.payload),
      });
      if (!response.ok) remaining.push(submission);
      else sentCount += 1;
    } catch {
      remaining.push(submission);
    }
  }

  writeQueue(remaining);
  return { sentCount, pendingCount: remaining.length };
}

export function pendingSubmissionCount() {
  return readQueue().length;
}
