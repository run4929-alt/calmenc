import type { ReactNode } from "react";
import { Container, SectionTitle } from "./primitives";
import Reveal from "./Reveal";
import PowerRoiDesign from "@/imports/Section";

/* ---------------- Hero ---------------- */
export function Hero({
  eyebrow,
  title,
  desc,
  cta,
  ctaHref = "#lead",
  image,
  imageAlt,
  tone = "light",
}: {
  eyebrow: string;
  title: ReactNode;
  desc?: ReactNode;
  cta: string;
  ctaHref?: string;
  image: string;
  imageAlt: string;
  tone?: "light" | "warm";
}) {
  return (
    <section className={tone === "warm" ? "bg-lime-soft/40" : "bg-white"}>
      <Container className="grid items-center gap-10 py-14 md:grid-cols-2 md:py-20 lg:py-24">
        <div className="flex flex-col items-start gap-6">
          <p className="text-[17px] font-bold text-mute sm:text-[20px]">{eyebrow}</p>
          <h1 className="text-[38px] font-bold leading-[1.28] tracking-tight text-ink sm:text-[52px] md:text-[58px]">
            {title}
          </h1>
          {desc && (
            <div className="text-[16px] leading-[1.6] text-ink/70 sm:text-[19px]">
              {desc}
            </div>
          )}
          <a
            href={ctaHref}
            className="mt-2 rounded-lg bg-ink px-8 py-4 text-[17px] font-bold text-white transition-transform hover:-translate-y-0.5 sm:text-[20px]"
          >
            {cta}
          </a>
        </div>
        <Reveal className="overflow-hidden rounded-[30px] shadow-[0_20px_60px_rgba(31,33,41,0.12)]">
          <img
            src={image}
            alt={imageAlt}
            className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------------- Dark ROI band ---------------- */
export function RoiBand({
  heading,
  badge,
  amount,
  amountNote,
  breakdown,
  footnote,
  design,
}: {
  heading: ReactNode;
  badge: string;
  amount: string;
  amountNote?: string;
  breakdown: { label: string; value: string; accent?: boolean }[];
  footnote?: string;
  design?: "power";
}) {
  if (design === "power") {
    return (
      <section className="overflow-hidden bg-ink-strong">
        <div className="power-roi-design">
          <PowerRoiDesign />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-ink-strong">
      <Container className="flex flex-col items-center py-20 text-center sm:py-28">
        <Reveal className="flex flex-col items-center gap-6">
          <p className="max-w-[640px] text-[20px] font-bold leading-[1.5] text-white sm:text-[24px]">
            {heading}
          </p>
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-[13px] font-medium text-white/70">
            {badge}
          </span>
          <p className="text-[52px] font-bold leading-none text-lime sm:text-[72px]">
            {amount}
          </p>
          {amountNote && <p className="text-[14px] text-white/50">{amountNote}</p>}
        </Reveal>

        <Reveal
          delay={120}
          className="mt-12 grid w-full max-w-[860px] gap-3 rounded-2xl bg-white/5 p-6 sm:grid-cols-2 sm:p-8"
        >
          {breakdown.map((b, i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b border-white/10 py-3 last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
            >
              <span className="text-[15px] text-white/60">{b.label}</span>
              <span
                className={`text-[16px] font-semibold ${
                  b.accent ? "text-lime" : "text-white"
                }`}
              >
                {b.value}
              </span>
            </div>
          ))}
        </Reveal>
        {footnote && (
          <p className="mt-6 text-[13px] text-white/40">{footnote}</p>
        )}
      </Container>
    </section>
  );
}

/* ---------------- Income table ---------------- */
export function IncomeTable({
  title,
  columns,
  rows,
  total,
}: {
  title: string;
  columns: string[];
  rows: (string | { v: string; accent?: boolean })[][];
  total: { label: string; value: string };
}) {
  return (
    <section className="bg-surface">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <SectionTitle className="mb-8">{title}</SectionTitle>
        </Reveal>
        <Reveal delay={80} className="overflow-x-auto rounded-2xl bg-white shadow-[0_8px_30px_rgba(31,33,41,0.05)]">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="bg-ink text-white">
                {columns.map((c, i) => (
                  <th key={i} className="px-5 py-4 text-[14px] font-semibold sm:text-[15px]">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri} className="border-b border-line last:border-b-0">
                  {r.map((cell, ci) => {
                    const val = typeof cell === "string" ? cell : cell.v;
                    const accent = typeof cell === "object" && cell.accent;
                    return (
                      <td
                        key={ci}
                        className={`px-5 py-4 text-[14px] sm:text-[15px] ${
                          ci === 0 ? "font-semibold text-ink" : "text-ink/70"
                        } ${accent ? "!font-bold !text-olive" : ""}`}
                      >
                        {val}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <Reveal
          delay={120}
          className="mt-4 flex flex-col items-start justify-between gap-2 rounded-2xl bg-ink px-6 py-6 sm:flex-row sm:items-center sm:px-8"
        >
          <span className="text-[16px] font-medium text-white/80">{total.label}</span>
          <span className="text-[32px] font-bold text-lime sm:text-[40px]">
            {total.value}
          </span>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------------- Process steps ---------------- */
export function ProcessSteps({
  title,
  steps,
  tone = "warm",
}: {
  title: string;
  steps: { n: string; label: string; desc: string; tag?: string }[];
  tone?: "warm" | "plain";
}) {
  return (
    <section
      className={
        tone === "warm"
          ? "bg-gradient-to-b from-white to-lime-soft"
          : "bg-white"
      }
    >
      <Container className="py-20 sm:py-28">
        <Reveal>
          <SectionTitle className="mb-10">{title}</SectionTitle>
        </Reveal>
        <ol className="flex flex-col gap-3">
          {steps.map((s, i) => (
            <Reveal
              key={i}
              delay={i * 70}
              as="li"
              className="flex items-start gap-5 rounded-2xl border border-line bg-white/70 p-6 transition-transform duration-300 hover:translate-x-1"
            >
              <span className="text-[18px] font-bold text-olive">{s.n}</span>
              <div className="flex flex-col gap-1">
                <p className="flex flex-wrap items-center gap-2 text-[19px] font-bold text-ink sm:text-[22px]">
                  {s.label}
                  {s.tag && (
                    <span className="rounded-full bg-[rgba(127,145,13,0.12)] px-2.5 py-0.5 text-[12px] font-semibold text-olive">
                      {s.tag}
                    </span>
                  )}
                </p>
                <p className="text-[15px] leading-[1.6] text-ink/60">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ---------------- Business structure ---------------- */
export function BusinessStructure() {
  const nodes = [
    { k: "지붕주 / 투자자", d: "공간 · 자본" },
    { k: "솔라캄 (캄이앤씨)", d: "설계 · 시공 · 관리", strong: true },
    { k: "안정적 수익", d: "20~30년 발전" },
  ];
  return (
    <section className="bg-lime-soft/50">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <SectionTitle className="mb-10">
            믿을 수 있는 사업 구조와 파트너
          </SectionTitle>
        </Reveal>
        <Reveal
          delay={80}
          className="flex flex-col items-stretch gap-4 rounded-2xl bg-white p-6 sm:flex-row sm:items-center sm:p-10"
        >
          {nodes.map((n, i) => (
            <div key={i} className="flex flex-1 items-center gap-4">
              <div
                className={`flex-1 rounded-xl px-5 py-6 text-center ${
                  n.strong
                    ? "bg-ink text-white"
                    : "bg-surface text-ink"
                }`}
              >
                <p className="text-[17px] font-bold">{n.k}</p>
                <p
                  className={`pt-1 text-[13px] ${
                    n.strong ? "text-lime" : "text-ink/50"
                  }`}
                >
                  {n.d}
                </p>
              </div>
              {i < nodes.length - 1 && (
                <span className="hidden text-2xl text-olive sm:block">→</span>
              )}
            </div>
          ))}
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            ["전기공사업 · 정보통신공사업 면허 보유", "정식 면허를 갖춘 시공 파트너가 전 과정을 책임집니다."],
            ["설계부터 관리까지 일괄 대행", "인허가 · 시공 · 유지보수를 솔라캄이 직접 진행합니다."],
            ["장기 O&M 운영 지원", "발전량 모니터링과 정기 점검으로 수익을 지킵니다."],
          ].map(([t, d], i) => (
            <Reveal key={i} delay={i * 80} className="flex flex-col gap-1.5">
              <p className="text-[17px] font-bold text-ink">{t}</p>
              <p className="text-[14px] leading-[1.6] text-ink/60">{d}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Reasons grid wrapper ---------------- */
export function ReasonsSection({
  title,
  bg = "bg-white",
  children,
  footnote,
}: {
  title: ReactNode;
  bg?: string;
  children: ReactNode;
  footnote?: string;
}) {
  return (
    <section className={bg}>
      <Container className="py-20 sm:py-28">
        <Reveal>
          <SectionTitle className="mb-10">{title}</SectionTitle>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">{children}</div>
        {footnote && (
          <p className="mt-8 text-[15px] leading-[1.5] text-mute sm:text-[18px]">
            {footnote}
          </p>
        )}
      </Container>
    </section>
  );
}
