"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowButton } from "@/components/ui/ArrowLink";
import { Field, inputClass } from "@/components/ui/Field";
import {
  contactPaths,
  expertiseAreas,
  partnershipTypes,
  productInterestOptions,
  type ContactPathId,
} from "@/data/contact";
import { isEmail, submitContact } from "@/lib/contact/submit";
import { cn } from "@/lib/utils/cn";

type Errors = Record<string, string>;

const empty = {
  product: "",
  name: "",
  organization: "",
  company: "",
  email: "",
  phone: "",
  message: "",
  partnershipType: "",
  expertise: "",
  linkedin: "",
  portfolio: "",
  subject: "",
};

export function ContactExperience() {
  const [path, setPath] = useState<ContactPathId | null>(null);
  const [values, setValues] = useState(empty);
  const [cv, setCv] = useState<File | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );

  const selected = useMemo(
    () => contactPaths.find((item) => item.id === path) ?? null,
    [path],
  );

  function set<K extends keyof typeof empty>(key: K, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function validate(): boolean {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please add your name.";
    if (!values.email.trim()) next.email = "An email is required.";
    else if (!isEmail(values.email)) next.email = "Enter a valid email address.";
    if (!values.message.trim()) next.message = "Please include a short message.";

    if (path === "product") {
      if (!values.product) next.product = "Choose a product.";
      if (!values.organization.trim()) next.organization = "Organization is required.";
    }
    if (path === "partnership") {
      if (!values.company.trim()) next.company = "Company is required.";
      if (!values.partnershipType) next.partnershipType = "Select a partnership type.";
    }
    if (path === "careers") {
      if (!values.expertise) next.expertise = "Select an area of expertise.";
    }
    if (path === "general") {
      if (!values.subject.trim()) next.subject = "A subject helps us route this.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!path) return;
    if (!validate()) return;

    setStatus("submitting");
    const payload =
      path === "product"
        ? {
            path,
            product: values.product,
            name: values.name,
            organization: values.organization,
            email: values.email,
            phone: values.phone,
            message: values.message,
          }
        : path === "partnership"
          ? {
              path,
              name: values.name,
              company: values.company,
              email: values.email,
              phone: values.phone,
              partnershipType: values.partnershipType,
              message: values.message,
            }
          : path === "careers"
            ? {
                path,
                name: values.name,
                email: values.email,
                expertise: values.expertise,
                linkedin: values.linkedin,
                portfolio: values.portfolio,
                cvName: cv?.name,
                message: values.message,
              }
            : {
                path,
                name: values.name,
                email: values.email,
                phone: values.phone || undefined,
                subject: values.subject,
                message: values.message,
              };

    const result = await submitContact(payload);
    setStatus(result.ok ? "success" : "error");
  }

  return (
    <section data-nav-theme="dark" className="bg-ink pb-32 text-white">
      <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12">
        <p className="text-heading max-w-[16ch] pt-6">
          What would you like to talk about?
        </p>

        <ul className="mt-16 border-t border-white/10">
          {contactPaths.map((item) => {
            const on = path === item.id;
            return (
              <li key={item.id} className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    setPath(item.id);
                    setStatus("idle");
                    setErrors({});
                  }}
                  className="flex w-full items-baseline justify-between gap-6 py-7 text-left sm:py-9"
                >
                  <span className="flex items-baseline gap-6 sm:gap-10">
                    <span className={cn("text-meta", on ? "text-violet" : "text-white/35")}>
                      {item.index}
                    </span>
                    <span
                      className={cn(
                        "font-display text-4xl tracking-tight uppercase sm:text-6xl lg:text-7xl",
                        on ? "text-white" : "text-white/35",
                      )}
                    >
                      {item.label}
                    </span>
                  </span>
                  <span className="hidden max-w-xs text-right text-sm text-white/40 md:block">
                    {item.hint}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <AnimatePresence mode="wait">
          {selected && status !== "success" ? (
            <motion.form
              key={selected.id}
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-16 grid gap-10 lg:grid-cols-12"
              noValidate
            >
              <div className="lg:col-span-4">
                <p className="text-meta text-violet">{selected.index} {selected.label}</p>
                <p className="mt-4 max-w-sm text-lg text-white/55">{selected.hint}</p>
              </div>
              <div className="grid gap-8 lg:col-span-8">
                {path === "product" ? (
                  <Field label="Which product?" name="product" error={errors.product}>
                    <select
                      className={inputClass}
                      value={values.product}
                      onChange={(e) => set("product", e.target.value)}
                      aria-invalid={Boolean(errors.product)}
                    >
                      <option value="">Select</option>
                      {productInterestOptions.map((option) => (
                        <option key={option} value={option} className="text-ink">
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>
                ) : null}

                <div className="grid gap-8 sm:grid-cols-2">
                  <Field label="Name" name="name" error={errors.name}>
                    <input
                      className={inputClass}
                      value={values.name}
                      onChange={(e) => set("name", e.target.value)}
                      autoComplete="name"
                    />
                  </Field>
                  {path === "product" ? (
                    <Field label="Organization" name="organization" error={errors.organization}>
                      <input
                        className={inputClass}
                        value={values.organization}
                        onChange={(e) => set("organization", e.target.value)}
                      />
                    </Field>
                  ) : null}
                  {path === "partnership" ? (
                    <Field label="Company" name="company" error={errors.company}>
                      <input
                        className={inputClass}
                        value={values.company}
                        onChange={(e) => set("company", e.target.value)}
                      />
                    </Field>
                  ) : null}
                  <Field label="Email" name="email" error={errors.email}>
                    <input
                      className={inputClass}
                      type="email"
                      value={values.email}
                      onChange={(e) => set("email", e.target.value)}
                      autoComplete="email"
                    />
                  </Field>
                  {path !== "careers" ? (
                    <Field
                      label={path === "general" ? "Phone (optional)" : "Phone / WhatsApp"}
                      name="phone"
                    >
                      <input
                        className={inputClass}
                        value={values.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        autoComplete="tel"
                      />
                    </Field>
                  ) : null}
                </div>

                {path === "partnership" ? (
                  <Field label="Partnership type" name="partnershipType" error={errors.partnershipType}>
                    <select
                      className={inputClass}
                      value={values.partnershipType}
                      onChange={(e) => set("partnershipType", e.target.value)}
                    >
                      <option value="">Select</option>
                      {partnershipTypes.map((option) => (
                        <option key={option} value={option} className="text-ink">
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>
                ) : null}

                {path === "careers" ? (
                  <>
                    <Field label="Area of expertise" name="expertise" error={errors.expertise}>
                      <select
                        className={inputClass}
                        value={values.expertise}
                        onChange={(e) => set("expertise", e.target.value)}
                      >
                        <option value="">Select</option>
                        {expertiseAreas.map((option) => (
                          <option key={option} value={option} className="text-ink">
                            {option}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <div className="grid gap-8 sm:grid-cols-2">
                      <Field label="LinkedIn" name="linkedin">
                        <input
                          className={inputClass}
                          value={values.linkedin}
                          onChange={(e) => set("linkedin", e.target.value)}
                        />
                      </Field>
                      <Field label="Portfolio" name="portfolio">
                        <input
                          className={inputClass}
                          value={values.portfolio}
                          onChange={(e) => set("portfolio", e.target.value)}
                        />
                      </Field>
                    </div>
                    <Field label="CV" name="cv">
                      <input
                        className="text-sm text-white/70 file:mr-4 file:border-0 file:bg-white file:px-4 file:py-2 file:text-ink"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => setCv(e.target.files?.[0] ?? null)}
                      />
                    </Field>
                  </>
                ) : null}

                {path === "general" ? (
                  <Field label="Subject" name="subject" error={errors.subject}>
                    <input
                      className={inputClass}
                      value={values.subject}
                      onChange={(e) => set("subject", e.target.value)}
                    />
                  </Field>
                ) : null}

                <Field label="Message" name="message" error={errors.message}>
                  <textarea
                    className={cn(inputClass, "min-h-32 resize-y")}
                    value={values.message}
                    onChange={(e) => set("message", e.target.value)}
                  />
                </Field>

                <div className="flex items-center gap-6">
                  <ArrowButton type="submit" tone="fill" disabled={status === "submitting"}>
                    {status === "submitting" ? "Sending" : "Send"}
                  </ArrowButton>
                  {status === "error" ? (
                    <p className="text-sm text-violet">
                      Something went wrong. Please try again.
                    </p>
                  ) : null}
                </div>
              </div>
            </motion.form>
          ) : null}

          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-20"
            >
              <p className="text-statement max-w-[12ch]">Received.</p>
              <p className="mt-6 max-w-md text-white/55">
                Thank you. This message is captured locally until the contact
                backend is connected.
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
