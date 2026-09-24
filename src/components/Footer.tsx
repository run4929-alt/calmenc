import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-ink-strong">
      <div className="mx-auto flex max-w-[1152px] flex-col px-5 py-14 sm:px-8">
        <Logo fill="#ffffff" />

        <div className="pt-6">
          <p className="text-[16px] font-semibold text-white">
            주식회사 캄이앤씨 · 대표 양서원
          </p>
          <div className="pt-1 text-[14px] leading-[1.75] text-white/70">
            <p>전남 광주 북구 평교로 30번길 54-12</p>
            <p>010 9333 9542 · yang@solacalm.co.kr</p>
          </div>
          <p className="pt-1 text-[14px] text-white/50">
            전기공사업 면허 · 정보통신공사업 면허 보유
          </p>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-[12px] leading-[1.7] text-white/40">
          <p>
            ※ 본 사이트의 수익 수치는 추정치이며, SMP · REC 시세와 현장 여건에 따라 달라질 수 있습니다.
          </p>
          <p>© 2026 주식회사 캄이앤씨. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
