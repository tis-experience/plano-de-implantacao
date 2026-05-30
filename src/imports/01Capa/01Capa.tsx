import svgPaths from "./svg-9xym7sn689";

function Frame() {
  return <div className="h-[40px] shrink-0 w-px" data-name="Frame" />;
}

function Hero() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[120px] top-[calc(50%-151px)]" data-name="hero">
      <p className="font-['Bronkoh-Regular:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#036ef2] text-[24px] tracking-[1px] uppercase whitespace-nowrap">Planeamento da área</p>
      <Frame />
      <div className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[168px] text-white tracking-[-5px] whitespace-nowrap">
        <p className="leading-[0.92] mb-0">Experience</p>
        <p className="leading-[0.92]">Engineering</p>
      </div>
    </div>
  );
}

function Spacer() {
  return (
    <div className="h-[2px] overflow-clip relative shrink-0 w-[24px]" data-name="Spacer">
      <div className="absolute bg-[rgba(43,118,193,0.4)] h-px left-0 right-0 top-0" data-name="Rectangle" />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center left-[120px] overflow-clip top-[984px]" data-name="Footer">
      <p className="font-['Bronkoh-SemiBold:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#036ef2] text-[14px] tracking-[1.5px] uppercase whitespace-nowrap">2026</p>
      <Spacer />
      <p className="font-['Bronkoh-SemiBold:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white tracking-[1.5px] uppercase whitespace-nowrap">Kickoff</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[80.64px] h-[538.358px] right-[80px] w-[540px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 540 538.358">
        <g id="Group">
          <path d={svgPaths.p26e5dc80} fill="var(--fill-0, #036EF2)" id="Vector" />
          <path d={svgPaths.p2da8a80} fill="var(--fill-0, #036EF2)" id="Vector_2" />
          <path d={svgPaths.p21370b80} fill="var(--fill-0, #036EF2)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function ArrowForward() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="arrow_forward">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="arrow_forward">
          <mask height="48" id="mask0_1_36" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="48" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="48" id="Bounding box" width="48" />
          </mask>
          <g mask="url(#mask0_1_36)">
            <path d={svgPaths.pa0c5900} fill="var(--fill-0, white)" id="arrow_forward_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Start() {
  return (
    <div className="absolute bg-[#036ef2] content-stretch flex items-center justify-center left-[120px] p-[16px] rounded-[999px] top-[674px]" data-name="Start">
      <ArrowForward />
    </div>
  );
}

export default function Component01Capa() {
  return (
    <div className="bg-[#04165d] relative size-full" data-name="01 · Capa">
      <Hero />
      <Footer />
      <Group />
      <Start />
    </div>
  );
}