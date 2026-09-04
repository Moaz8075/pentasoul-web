export type ContactPayload = {
  name: string;
  email: string;
  organization?: string;
  topic: string;
  message: string;
};

export async function submitContact(
  payload: ContactPayload,
): Promise<{ ok: true } | { ok: false; error: string }> {
  // TODO: connect to a real backend.
  void payload;
  return { ok: true };
}
