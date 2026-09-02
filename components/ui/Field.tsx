import { cn } from "@/lib/utils/cn";

type FieldProps = {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
};

export function Field({ label, name, error, children, className }: FieldProps) {
  return (
    <label className={cn("block", className)}>
      <span className="text-meta text-white/40">{label}</span>
      <div className="mt-3">{children}</div>
      {error ? (
        <span id={`${name}-error`} className="mt-2 block text-sm text-violet">
          {error}
        </span>
      ) : null}
    </label>
  );
}

export const inputClass =
  "w-full border-0 border-b border-white/20 bg-transparent py-3 text-[17px] text-white outline-none transition-colors placeholder:text-white/25 focus:border-violet";
