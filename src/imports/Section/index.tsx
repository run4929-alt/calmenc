function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pt-[8px] relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] font-['Pretendard:SemiBold',sans-serif] leading-[0] not-italic relative shrink-0 text-[38px] text-center text-white w-[986px]">
        <p className="leading-[57px] mb-0">태양광 발전소 분양 자기 발전소로</p>
        <p className="leading-[57px]">30년간 수익 전액을 가져가세요!</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center max-w-[768px] relative shrink-0" data-name="Container">
      <Heading />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white content-stretch flex items-start px-[20px] py-[8px] relative rounded-[7px] shrink-0">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Bold',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#1f2129] text-[20px] whitespace-nowrap">30년 총 발전 수익</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0">
      <Frame3 />
      <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] text-center whitespace-nowrap">SMP+REC 판매기준</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center justify-center relative shrink-0 text-center">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[1.36] relative shrink-0 text-[24px] text-white">100kW 발전소 기준 수익</p>
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[1.6] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)]">전시간 3.7h/일 · SMP+REC 합산 233원/kWh · 발전율 저하 연 0.5% 적용</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 whitespace-nowrap">
      <div className="bg-clip-text flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] justify-end leading-[0] relative shrink-0 text-[99px] text-[transparent]" style={{ backgroundImage: "linear-gradient(123.31546930319112deg, rgb(255, 255, 255) 7.5546%, rgb(233, 246, 75) 96.19%)" }}>
        <p className="leading-[1.36]">약 8.79억원</p>
      </div>
      <Frame1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0">
      <Frame8 />
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 text-black">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[1.36] relative shrink-0 text-[34px]">자기자본 10%</p>
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[1.6] relative shrink-0 text-[18px]">+ 은행 대출 최대 90%</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <Frame11 />
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[0] relative shrink-0 text-[#1f2129] text-[20px]">
        <span className="leading-[1.36]">{`100kW 기준 `}</span>
        <span className="leading-[1.36]">자기자본 1,300만원</span>
        <span className="leading-[1.36]">만 있으면 됩니다</span>
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[37px] items-start justify-center not-italic relative shrink-0 w-[1018px] whitespace-nowrap">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[1.36] relative shrink-0 text-[#1f2129] text-[16px]">자금 조달 방식</p>
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#f2f3f5] content-stretch flex flex-col gap-[36px] items-center justify-center p-[30px] relative rounded-[16px] shrink-0 w-full">
      <Frame12 />
      <div className="h-0 relative shrink-0 w-[1018px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1018 1" width="1018">
            <line id="Line 2" stroke="#E3E7EE" strokeLinecap="round" x1="0.5" x2="1017.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ul className="[word-break:break-word] block font-['Pretendard_Variable:SemiBold',sans-serif] leading-[0] list-disc not-italic relative shrink-0 text-[18px] text-black w-[1018px]">
        <li className="mb-0 ms-[27px]">
          <span className="leading-[1.7]">자기자본 100% 또는 대출 병행 선택</span>
        </li>
        <li className="mb-0 ms-[27px]">
          <span className="leading-[1.7]">발전 수익 100% 소유주 귀속</span>
        </li>
        <li className="mb-0 ms-[27px]">
          <span className="leading-[1.7]">설치 + 유지관리 방식 선택 가능</span>
        </li>
        <li className="ms-[27px]">
          <span className="leading-[1.7]">원리금은 발전 수익으로 상환 · 추가 부담 없음</span>
        </li>
      </ul>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-white w-[210px]">
      <p className="relative shrink-0 w-full">총 사업비</p>
      <p className="relative shrink-0 w-full">자기자본 (10%)</p>
      <p className="relative shrink-0 w-full">월 발전 수익</p>
      <p className="relative shrink-0 w-full">전기안전관리자 선임</p>
      <p className="relative shrink-0 w-full">{`O&M 유지관리 (5년 후)`}</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 text-[#e9f64b] whitespace-nowrap">
      <p className="relative shrink-0">{` 1.3억원`}</p>
      <p className="relative shrink-0">약 1,300</p>
      <p className="relative shrink-0">262만원</p>
      <p className="relative shrink-0">월 18.5</p>
      <p className="relative shrink-0">연 200만</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-white">
      <p className="min-w-full relative shrink-0 w-[min-content]">kW 당 130 만원 기준</p>
      <p className="min-w-full relative shrink-0 w-[min-content]">대출 90% 기준</p>
      <p className="min-w-full relative shrink-0 w-[min-content]">연 약 3,100만원</p>
      <p className="relative shrink-0 whitespace-nowrap">100kW 이상 시 월 35만원</p>
      <p className="min-w-full relative shrink-0 w-[min-content]">솔라캄이 관리 대행</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] bg-[#3a3c46] content-stretch flex font-['Pretendard_Variable:SemiBold',sans-serif] items-center justify-between leading-[1.7] not-italic px-[30px] py-[29px] relative rounded-[16px] shrink-0 text-[18px] w-full">
      <Frame5 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
      <Frame />
      <Frame4 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center max-w-[1088px] relative shrink-0 w-full">
      <Frame9 />
      <Frame13 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[100px] items-center justify-center max-w-[1152px] px-[32px] py-[160px] relative shrink-0 w-[1152px]" data-name="Container">
      <Container1 />
      <Frame14 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#1f2129] content-stretch flex flex-col items-center relative size-full" data-name="Section">
      <Container />
    </div>
  );
}