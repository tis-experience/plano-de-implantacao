import svgPaths from "./svg-ak1yyfo2ug";

function Row() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Row">
      <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#036ef2] text-[0px] tracking-[-1px] w-[120px]">
        <span className="leading-[normal] text-[64px]">53</span>
        <span className="leading-[normal] text-[48px]">%</span>
      </p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#04165d] text-[20px] w-[292px]">não conhecem bem o conceito de User Experience</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Row">
      <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#036ef2] text-[0px] tracking-[-1px] w-[120px]">
        <span className="leading-[normal] text-[64px]">34</span>
        <span className="leading-[normal] text-[48px]">%</span>
      </p>
      <p className="flex-[1_0_0] font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[#04165d] text-[20px]">acham que UX é responsabilidade apenas dos designers</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Row">
      <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#036ef2] text-[0px] tracking-[-1px] w-[120px]">
        <span className="leading-[normal] text-[64px]">31</span>
        <span className="leading-[normal] text-[48px]">%</span>
      </p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#04165d] text-[20px] w-[351px]">não sabem exatamente o que a área (Gabinete Criativo) faz</p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Row">
      <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#036ef2] text-[0px] tracking-[-1px] w-[120px]">
        <span className="leading-[normal] text-[64px]">23</span>
        <span className="leading-[normal] text-[48px]">%</span>
      </p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#04165d] text-[20px] w-[334px]">{`dizem que UX "impacta bastante mas não é tratada como prioridade"`}</p>
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[495px]" data-name="Content container">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

function ArrowBackIosNew() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_back_ios_new">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_back_ios_new">
          <mask height="24" id="mask0_2_189" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_2_189)">
            <path d={svgPaths.p90d8b80} fill="var(--fill-0, #036EF2)" id="arrow_back_ios_new_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[40px]" data-name="Arrow Left">
      <ArrowBackIosNew />
    </div>
  );
}

function ArrowForwardIos() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_forward_ios">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward_ios">
          <mask height="24" id="mask0_2_177" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_2_177)">
            <path d={svgPaths.p23cbb200} fill="var(--fill-0, #036EF2)" id="arrow_forward_ios_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[40px]" data-name="Arrow Right">
      <ArrowForwardIos />
    </div>
  );
}

function NavigationContainer() {
  return (
    <div className="content-stretch flex gap-[32px] items-end justify-end relative shrink-0 w-full" data-name="Navigation Container">
      <ArrowLeft />
      <ArrowRight />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start px-[56px] py-[48px] relative rounded-[40px] size-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(3, 110, 242, 0.06) 0%, rgba(3, 110, 242, 0.06) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Container">
      <p className="font-['Bronkoh-SemiBold:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#036ef2] text-[16px] tracking-[2px] uppercase w-[min-content]">Inquérito interno (NOV/2024) · 143 respostas</p>
      <ContentContainer />
      <NavigationContainer />
    </div>
  );
}