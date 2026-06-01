import svgPaths from "./svg-ffteejrzcj";

function Tag() {
  return (
    <div className="bg-[#036ef2] content-stretch flex h-[40px] items-center justify-center px-[16px] py-[10px] relative rounded-[999px] shrink-0" data-name="Tag">
      <p className="font-['Bronkoh-Bold:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[20px] text-white tracking-[-0.5px] whitespace-nowrap">Nível 6</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Tag />
      <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[40px] text-white tracking-[-0.5px] whitespace-nowrap">Orientado ao Utilizador</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content">
      <Container />
      <p className="font-['Bronkoh-lightItalic:Italic',sans-serif] italic leading-[1.2] min-w-full relative shrink-0 text-[30px] text-white w-[min-content]">{`"O nível mais alto, onde a investigação e a UX impulsionam a estratégia de negócios e a inovação."`}</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[20px] text-[rgba(255,255,255,0.6)] tracking-[0.25px] w-[min-content]">Nas organizações de estágio 6, todos estão plenamente conscientes do valor do design centrado no utilizador. A investigação com utilizadores e o design centrado no utilizador são a força motriz por trás de tudo o que estas organizações fazem, desde o mais alto nível da estratégia organizacional até ao menor elemento de design dentro de um sistema de design. As operações de desenvolvimento adoptam um design iterativo orientado pelo utilizador. Tanto indivíduos como equipas planeiam para a mudança e inovação, e a investigação com utilizadores impulsiona novos investimentos ao responder a necessidades não satisfeitas no mercado.</p>
    </div>
  );
}

function CloseSmall() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="close_small">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="close_small">
          <mask height="32" id="mask0_8_515" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_8_515)">
            <path d={svgPaths.peeed100} fill="var(--fill-0, white)" id="close_small_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Close() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex items-center right-[24px] rounded-[999px] top-[24px]" data-name="Close">
      <CloseSmall />
    </div>
  );
}

function ArrowBackIosNew() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_back_ios_new">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_back_ios_new">
          <mask height="24" id="mask0_8_511" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_8_511)">
            <path d={svgPaths.pc8e8d80} fill="var(--fill-0, white)" id="arrow_back_ios_new_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[40px]" data-name="Arrow Left">
      <ArrowBackIosNew />
    </div>
  );
}

function PaginationDot() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Pagination Dot">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Pagination Dot">
          <circle cx="12" cy="12" fill="var(--fill-0, white)" fillOpacity="0.4" id="Ellipse 1" r="8" />
        </g>
      </svg>
    </div>
  );
}

function PaginationDot1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Pagination Dot">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Pagination Dot">
          <circle cx="12" cy="12" fill="var(--fill-0, white)" fillOpacity="0.4" id="Ellipse 1" r="8" />
        </g>
      </svg>
    </div>
  );
}

function PaginationDot2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Pagination Dot">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Pagination Dot">
          <circle cx="12" cy="12" fill="var(--fill-0, white)" fillOpacity="0.4" id="Ellipse 1" r="8" />
        </g>
      </svg>
    </div>
  );
}

function PaginationDot3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Pagination Dot">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Pagination Dot">
          <circle cx="12" cy="12" fill="var(--fill-0, white)" fillOpacity="0.4" id="Ellipse 1" r="8" />
        </g>
      </svg>
    </div>
  );
}

function PaginationDot4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Pagination Dot">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Pagination Dot">
          <circle cx="12" cy="12" fill="var(--fill-0, white)" fillOpacity="0.4" id="Ellipse 1" r="8" />
        </g>
      </svg>
    </div>
  );
}

function CurrentPaginationDot() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Current Pagination Dot">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Current Pagination Dot">
          <circle cx="12" cy="12" fill="var(--fill-0, white)" id="Ellipse 1" r="10" />
        </g>
      </svg>
    </div>
  );
}

function PaginationContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Pagination Container">
      <PaginationDot />
      <PaginationDot1 />
      <PaginationDot2 />
      <PaginationDot3 />
      <PaginationDot4 />
      <CurrentPaginationDot />
    </div>
  );
}

function ArrowForwardIos() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_forward_ios">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward_ios">
          <mask height="24" id="mask0_8_501" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_8_501)">
            <path d={svgPaths.p11a80500} fill="var(--fill-0, white)" id="arrow_forward_ios_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[40px]" data-name="Arrow Right">
      <ArrowForwardIos />
    </div>
  );
}

function NavigationContainer() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[8px] relative shrink-0 w-full" data-name="Navigation Container">
      <ArrowLeft />
      <PaginationContainer />
      <ArrowRight />
    </div>
  );
}

export default function Modal() {
  return (
    <div className="bg-[#3126b4] content-stretch flex flex-col gap-[48px] items-start p-[64px] relative rounded-[40px] size-full" data-name="Modal">
      <Content />
      <Close />
      <NavigationContainer />
    </div>
  );
}