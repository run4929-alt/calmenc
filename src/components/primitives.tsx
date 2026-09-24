import type { ReactNode } from "react";
import Reveal from "./Reveal";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1152px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-[28px] font-bold leading-[1.3] text-ink-strong sm:text-[34px] md:text-[38px] ${className}`}
    >
      {children}
    </h2>
  );
}

/** Numbered content card (01 / 02 …) used in "reasons" and "benefits" grids. */
export function NumberCard({
  n,
  title,
  desc,
  bg = "bg-surface",
  delay = 0,
}: {
  n: string;
  title: string;
  desc: ReactNode;
  bg?: string;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className={`flex flex-col justify-between gap-8 rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1 ${bg}`}
    >
      <p className="text-[20px] font-semibold text-olive">{n}</p>
      <div className="flex flex-col gap-1.5">
        <p className="text-[22px] font-bold leading-[1.36] text-black sm:text-[24px]">
          {title}
        </p>
        <div className="text-[15px] leading-[1.6] text-black/60 sm:text-[16px]">
          {desc}
        </div>
      </div>
    </Reveal>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="11" fill="rgba(127,145,13,0.12)" />
      <path
        d="M7.5 12.2l3 3 6-6.4"
        stroke="#7f910d"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
