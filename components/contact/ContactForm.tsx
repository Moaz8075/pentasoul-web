"use client";

import { useState } from "react";
import { submitContact } from "@/lib/contact/submit";
import { PillButton } from "@/components/ui/PillButton";

const topics = ["Product", "Partnership", "Careers", "General"] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">(
    "idle",
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(formData: FormData) {
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const organization = String(formData.get("organization") ?? "").trim();
    const topic = String(formData.get("topic") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email.";
    }
    if (!topic) nextErrors.topic = "Please choose a topic.";
    if (message.length < 12) nextErrors.message = "Please share a little more.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    const result = await submitContact({
      name,
      email,
      organization,
      topic,
      message,
    });
    setStatus(result.ok ? "sent" : "error");
  }

  if (status === "sent") {
    return (
      <div className="rounded-[28px] bg-[#f6f6f8] px-8 py-12">
        <h2 className="text-3xl font-bold tracking-tight">Thank you.</h2>
        <p className="mt-3 max-w-md text-muted">
          Your message was received. We will be in touch.
        </p>
        <div className="mt-8">
          <PillButton href="/">Back home</PillButton>
        </div>
      </div>
    );
  }

  return (
    <form
      action={onSubmit}
      className="grid gap-5 rounded-[28px] bg-[#f6f6f8] px-6 py-8 sm:px-8"
    >
      <label className="grid gap-2 text-sm font-medium">
        Name
        <input
          name="name"
          autoComplete="name"
          className="h-12 rounded-full border border-ink/10 bg-white px-5 text-[15px] font-normal outline-none focus:border-purple"
        />
        {errors.name ? <span className="text-purple">{errors.name}</span> : null}
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Email
        <input
          name="email"
          type="email"
          autoComplete="email"
          className="h-12 rounded-full border border-ink/10 bg-white px-5 text-[15px] font-normal outline-none focus:border-purple"
        />
        {errors.email ? <span className="text-purple">{errors.email}</span> : null}
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Organization
        <input
          name="organization"
          autoComplete="organization"
          className="h-12 rounded-full border border-ink/10 bg-white px-5 text-[15px] font-normal outline-none focus:border-purple"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Topic
        <select
          name="topic"
          defaultValue=""
          className="h-12 rounded-full border border-ink/10 bg-white px-5 text-[15px] font-normal outline-none focus:border-purple"
        >
          <option value="" disabled>
            What would you like to talk about?
          </option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
        {errors.topic ? <span className="text-purple">{errors.topic}</span> : null}
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Message
        <textarea
          name="message"
          rows={5}
          className="rounded-3xl border border-ink/10 bg-white px-5 py-4 text-[15px] font-normal outline-none focus:border-purple"
        />
        {errors.message ? (
          <span className="text-purple">{errors.message}</span>
        ) : null}
      </label>
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center gap-3 rounded-full bg-ink py-1.5 pr-1.5 pl-5 text-[15px] font-medium text-white disabled:opacity-60"
        >
          <span style={{ color: "#ffffff" }}>
            {status === "submitting" ? "Sending" : "Send message"}
          </span>
          <span className="grid size-9 place-items-center rounded-full bg-white text-ink">
            →
          </span>
        </button>
        {status === "error" ? (
          <p className="mt-3 text-sm text-purple">Something went wrong. Please try again.</p>
        ) : null}
      </div>
    </form>
  );
}
