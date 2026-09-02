export type ContactSubmission =
  | {
      path: "product";
      product: string;
      name: string;
      organization: string;
      email: string;
      phone: string;
      message: string;
    }
  | {
      path: "partnership";
      name: string;
      company: string;
      email: string;
      phone: string;
      partnershipType: string;
      message: string;
    }
  | {
      path: "careers";
      name: string;
      email: string;
      expertise: string;
      linkedin: string;
      portfolio: string;
      cvName?: string;
      message: string;
    }
  | {
      path: "general";
      name: string;
      email: string;
      phone?: string;
      subject: string;
      message: string;
    };

export type SubmitResult = { ok: true } | { ok: false; error: string };

export async function submitContact(
  payload: ContactSubmission,
): Promise<SubmitResult> {
  // TODO: Connect to the PentaSoul contact backend.
  // This client-side abstraction captures a validated payload only.
  await new Promise((resolve) => setTimeout(resolve, 700));

  if (process.env.NODE_ENV !== "production") {
    console.info("[PentaSoul contact] captured submission", payload);
  }

  return { ok: true };
}

export function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}
