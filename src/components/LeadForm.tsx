import { useRef, useState, type FormEvent } from "react";
import { sendEmail } from "@/lib/email";

type FieldDef = {
  name: string;
  label: string;
  required?: boolean;
  placeholder: string;
  textarea?: boolean;
};

export default function LeadForm({
  fields,
  submitLabel,
  formTitle = "상담 신청",
  consent = "개인정보 수집 · 이용 동의 (필수)",
  consentNote = " — 상담 목적으로만 이용하며, 목적 달성 후 지체 없이 파기합니다.",
}: {
  fields: FieldDef[];
  submitLabel: string;
  formTitle?: string;
  consent?: string;
  consentNote?: string;
}) {
  const [sent, setSent] = useState(false);
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!agree || loading) return;
    setLoading(true);
    try {
      const data = new FormData(formRef.current!);
      const params: Record<string, string> = { form_title: formTitle };
      fields.forEach((f) => {
        params[f.name] = (data.get(f.name) as string) ?? "";
      });
      await sendEmail(params);
    } catch (err) {
      console.error("Email send failed:", err);
    } finally {
      setLoading(false);
      setSent(true);
    }
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white px-8 py-16 text-center shadow-[0_10px_40px_rgba(31,33,41,0.06)]">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(127,145,13,0.12)]">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="#7f910d" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-[22px] font-bold text-ink">신청이 접수되었습니다</p>
        <p className="text-[15px] leading-[1.6] text-ink/60">담당자가 확인 후 빠르게 연락드리겠습니다.</p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="flex w-full flex-col gap-6 rounded-2xl bg-white px-6 py-8 shadow-[0_10px_40px_rgba(31,33,41,0.06)] sm:px-8 sm:py-10"
    >
      {fields.map((f) => (
        <div key={f.name} className="flex flex-col gap-2">
          <label className="text-[16px] font-medium text-ink sm:text-[18px]">
            {f.label}
            {f.required && <span className="text-[#f66]"> *</span>}
          </label>
          {f.textarea ? (
            <textarea
              name={f.name}
              required={f.required}
              placeholder={f.placeholder}
              rows={4}
              className="resize-none rounded-lg border-[0.5px] border-[#d6dae1] bg-surface px-4 py-3 text-[16px] text-ink outline-none transition-colors placeholder:text-[rgba(16,18,17,0.5)] focus:border-olive"
            />
          ) : (
            <input
              name={f.name}
              required={f.required}
              placeholder={f.placeholder}
              className="rounded-lg border-[0.5px] border-[#d6dae1] bg-surface px-4 py-3 text-[16px] text-ink outline-none transition-colors placeholder:text-[rgba(16,18,17,0.5)] focus:border-olive"
            />
          )}
        </div>
      ))}

      <button type="button" onClick={() => setAgree(!agree)} className="flex items-start gap-2.5 text-left w-full">
        <div className="mt-[3px] shrink-0">
          <div
            className={`size-[19px] rounded-[3px] border-[0.731px] border-solid flex items-center justify-center transition-colors duration-150 ${
              agree ? "bg-[#1f2129] border-[#1f2129]" : "bg-[#f2f3f5] border-[#d6dae1]"
            }`}
          >
            {agree && (
              <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
                <path d="M1 4L4 7L10 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        </div>
        <span className="text-[15px] leading-[1.5] text-[#40453f]">
          <span className="font-bold text-ink-strong">{consent}</span>
          {consentNote}
        </span>
      </button>

      <button
        type="submit"
        disabled={!agree || loading}
        className="rounded-lg bg-ink py-4 text-[18px] font-bold text-white transition-all enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {loading ? "전송 중..." : submitLabel}
      </button>
    </form>
  );
}
