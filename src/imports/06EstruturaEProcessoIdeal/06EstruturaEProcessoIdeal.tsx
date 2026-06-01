import svgPaths from "./svg-qr6s1d1r3a";
import { imgGroup } from "./svg-cceda";

function Spacer() {
  return (
    <div className="h-[2px] overflow-clip relative shrink-0 w-[24px]" data-name="Spacer">
      <div className="absolute bg-[rgba(43,118,193,0.4)] h-px left-0 right-0 top-0" data-name="Rectangle" />
    </div>
  );
}

function Page() {
  return (
    <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-name="Page">
      <p className="font-['Bronkoh-SemiBold:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#036ef2] text-[14px] tracking-[1.5px] uppercase whitespace-nowrap">06</p>
      <Spacer />
      <p className="font-['Bronkoh-SemiBold:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6e7587] text-[14px] tracking-[1.5px] uppercase whitespace-nowrap">PLANO DE IMPLANTAÇÃO  -  EXPERIENCE ENGINEERING</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0_0.06%_0.73%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[236px_105.223px]" style={{ maskImage: `url('${imgGroup}')` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119.929 53.6039">
        <g id="Group">
          <path d={svgPaths.p1bc3fc80} fill="var(--fill-0, #036EF2)" id="Vector" />
          <path d={svgPaths.p8ed8880} fill="var(--fill-0, #036EF2)" id="Vector_2" />
          <path d={svgPaths.p79b1980} fill="var(--fill-0, #036EF2)" id="Vector_3" />
          <path d={svgPaths.p3380500} fill="var(--fill-0, #04165D)" id="Vector_4" />
          <path d={svgPaths.p3777a600} fill="var(--fill-0, #04165D)" id="Vector_5" />
          <path d={svgPaths.p30300b00} fill="var(--fill-0, #04165D)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[0_0_0.73%_0]" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute content-stretch flex items-end justify-between left-[120px] top-[946px] w-[1680px]" data-name="Footer">
      <Page />
      <div className="h-[54px] opacity-90 overflow-clip relative shrink-0 w-[120px]" data-name="Logo">
        <ClipPathGroup />
      </div>
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Header Container">
      <p className="font-['Bronkoh-SemiBold:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#036ef2] text-[16px] tracking-[2px] uppercase w-full">Como o trabalho passa a acontecer</p>
      <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-none relative shrink-0 text-[#04165d] text-[80px] tracking-[-1.5px] w-full">Processo de Design apoiado por IA</p>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[120px] not-italic top-[96px] w-[1680px]" data-name="Header">
      <HeaderContainer />
      <p className="font-['Bronkoh-Regular:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[#2f3237] text-[28px] w-full">Etapas com profundidade ajustada ao problema, onde a IA actua como suporte para acelerar o processo.</p>
    </div>
  );
}

function Subject() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="subject">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="subject">
          <mask height="32" id="mask0_2040_1476" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_2040_1476)">
            <path d={svgPaths.p138e2c00} fill="var(--fill-0, white)" id="subject_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#036ef2] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[48px]" data-name="Icon">
      <Subject />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 text-center w-full" data-name="Text">
      <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#04165d] text-[24px] whitespace-nowrap">Contexto</p>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] min-w-full relative shrink-0 text-[#2f3237] text-[14px] tracking-[0.25px] w-[min-content]">Negócio, Utilizadores, Dados, Tecnologia, Restrições</p>
    </div>
  );
}

function Conection() {
  return (
    <div className="h-[354px] relative shrink-0 w-full" data-name="Conection">
      <div className="absolute flex h-[291px] items-center justify-center left-[74px] top-[2px] w-[118.005px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[118.005px] relative w-[291px]">
            <div className="absolute inset-[-1.69%_-0.69%_-1.69%_-0.97%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 295.828 122.005">
                <path d={svgPaths.p11bb4800} id="Vector 1" stroke="var(--stroke-0, #04165D)" strokeLinecap="round" strokeWidth="4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center pt-[88px] relative shrink-0 w-[180px]" data-name="Step">
      <Icon />
      <Text />
      <Conection />
    </div>
  );
}

function NorthEast() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="north_east">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="north_east">
          <mask height="32" id="mask0_2040_1488" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_2040_1488)">
            <path d={svgPaths.p2b38b00} fill="var(--fill-0, #04165D)" id="north_east_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SouthEast() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="south_east">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="south_east">
          <mask height="32" id="mask0_2040_1472" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_2040_1472)">
            <path d={svgPaths.p35a70680} fill="var(--fill-0, #04165D)" id="south_east_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Col() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pt-[126px] relative shrink-0" data-name="Col">
      <NorthEast />
      <SouthEast />
    </div>
  );
}

function ManageSearch() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="manage_search">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="manage_search">
          <mask height="32" id="mask0_2040_1454" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_2040_1454)">
            <path d={svgPaths.p22ba1e00} fill="var(--fill-0, #036EF2)" id="manage_search_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IaPesquisaContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-[160px]" data-name="IA pesquisa container">
      <ManageSearch />
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#2f3237] text-[15px] tracking-[-0.25px] w-[72px]">Pesquisa e síntese</p>
    </div>
  );
}

function Lightbulb() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="lightbulb_2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="lightbulb_2">
          <mask height="32" id="mask0_2040_1480" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_2040_1480)">
            <path d={svgPaths.p24a727c0} fill="var(--fill-0, #036EF2)" id="lightbulb_2_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IaIdeiasContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-[160px]" data-name="IA ideias container">
      <Lightbulb />
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#2f3237] text-[15px] tracking-[-0.25px] w-[70px]">Geração de ideias</p>
    </div>
  );
}

function ViewComfy() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="view_comfy">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="view_comfy">
          <mask height="32" id="mask0_2040_1492" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_2040_1492)">
            <path d={svgPaths.p1c0e6c00} fill="var(--fill-0, #036EF2)" id="view_comfy_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IaPrototipacaoContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-[160px]" data-name="IA prototipacao container">
      <ViewComfy />
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#2f3237] text-[15px] tracking-[-0.25px] w-[96px]">Prototipação rápida</p>
    </div>
  );
}

function Monitoring() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="monitoring">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="monitoring">
          <mask height="32" id="mask0_2040_1464" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_2040_1464)">
            <path d={svgPaths.p24739b00} fill="var(--fill-0, #036EF2)" id="monitoring_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IaAnaliseContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-[160px]" data-name="IA analise container">
      <Monitoring />
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#2f3237] text-[15px] tracking-[-0.25px] w-[72px]">Análise e avaliação</p>
    </div>
  );
}

function LabProfile() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="lab_profile">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="lab_profile">
          <mask height="32" id="mask0_2040_1460" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_2040_1460)">
            <path d={svgPaths.p6cb7d00} fill="var(--fill-0, #036EF2)" id="lab_profile_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IaDocumentacaoContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-[160px]" data-name="IA documentacao container">
      <LabProfile />
      <p className="flex-[1_0_0] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-px relative text-[#2f3237] text-[15px] tracking-[-0.25px]">Documentação e comunicação</p>
    </div>
  );
}

function ArrowSplit() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="arrow_split">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="arrow_split">
          <mask height="32" id="mask0_2040_1450" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_2040_1450)">
            <path d={svgPaths.p29031600} fill="var(--fill-0, #036EF2)" id="arrow_split_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IaAutomacaoContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-[160px]" data-name="IA automacao container">
      <ArrowSplit />
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#2f3237] text-[15px] tracking-[-0.25px] w-[90px]">Automação e escala</p>
    </div>
  );
}

function IaApoioContent() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="IA apoio content">
      <IaPesquisaContainer />
      <IaIdeiasContainer />
      <IaPrototipacaoContainer />
      <IaAnaliseContainer />
      <IaDocumentacaoContainer />
      <IaAutomacaoContainer />
    </div>
  );
}

function ExpandContent() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="expand_content">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_content">
          <mask height="24" id="mask0_2040_1468" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_2040_1468)">
            <path d={svgPaths.p2e4a3200} fill="var(--fill-0, #04165D)" id="expand_content_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[1320px] overflow-clip rounded-[999px] size-[32px] top-[8px]" data-name="Icon">
      <ExpandContent />
    </div>
  );
}

function IaApoioContainer() {
  return (
    <div className="relative rounded-[28px] shrink-0 w-full" data-name="IA apoio container">
      <div aria-hidden="true" className="absolute border border-[#6e7587] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center px-[56px] py-[24px] relative size-full">
          <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[#04165d] text-[24px] text-center w-[min-content]">IA como camada de apoio transversal</p>
          <IaApoioContent />
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function SwapVert() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="swap_vert">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="swap_vert">
          <mask height="32" id="mask0_2040_1442" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_2040_1442)">
            <path d={svgPaths.p15dcc200} fill="var(--fill-0, #04165D)" id="swap_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SwapVert1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="swap_vert">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="swap_vert">
          <mask height="32" id="mask0_2040_1442" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_2040_1442)">
            <path d={svgPaths.p15dcc200} fill="var(--fill-0, #04165D)" id="swap_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SwapVert2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="swap_vert">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="swap_vert">
          <mask height="32" id="mask0_2040_1442" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_2040_1442)">
            <path d={svgPaths.p15dcc200} fill="var(--fill-0, #04165D)" id="swap_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SwapVert3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="swap_vert">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="swap_vert">
          <mask height="32" id="mask0_2040_1442" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_2040_1442)">
            <path d={svgPaths.p15dcc200} fill="var(--fill-0, #04165D)" id="swap_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SwapVert4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="swap_vert">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="swap_vert">
          <mask height="32" id="mask0_2040_1442" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_2040_1442)">
            <path d={svgPaths.p15dcc200} fill="var(--fill-0, #04165D)" id="swap_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SwapVert5() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="swap_vert">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="swap_vert">
          <mask height="32" id="mask0_2040_1442" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_2040_1442)">
            <path d={svgPaths.p15dcc200} fill="var(--fill-0, #04165D)" id="swap_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[190px] items-center justify-center py-[2px] relative shrink-0 w-full" data-name="Row">
      <SwapVert />
      <SwapVert1 />
      <SwapVert2 />
      <SwapVert3 />
      <SwapVert4 />
      <SwapVert5 />
    </div>
  );
}

function Circle() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Circle">
          <circle cx="22" cy="22" fill="var(--fill-0, #036EF2)" id="Ellipse" r="22" />
          <circle cx="22" cy="22" fill="var(--fill-0, white)" id="Ellipse_2" r="14" />
          <circle cx="22" cy="22" fill="var(--fill-0, #036EF2)" id="Ellipse_3" r="7" />
        </g>
      </svg>
    </div>
  );
}

function Step1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip relative shrink-0 w-[220px]" data-name="Step">
      <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[#04165d] text-[24px] text-center w-[min-content]">Descobrir</p>
      <Circle />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#2f3237] text-[14px] text-center tracking-[0.25px] w-[190px]">Entender o problema, o utilizador e o contexto</p>    </div>
  );
}

function Circle1() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Circle">
          <circle cx="22" cy="22" fill="var(--fill-0, #036EF2)" id="Ellipse" r="22" />
          <circle cx="22" cy="22" fill="var(--fill-0, white)" id="Ellipse_2" r="14" />
          <circle cx="22" cy="22" fill="var(--fill-0, #036EF2)" id="Ellipse_3" r="7" />
        </g>
      </svg>
    </div>
  );
}

function Step2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip relative shrink-0 w-[220px]" data-name="Step">
      <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[#04165d] text-[24px] text-center w-[min-content]">Definir</p>
      <Circle1 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#2f3237] text-[14px] text-center tracking-[0.25px] w-[190px]">Estabelecer escopo, personas e critérios</p>
    </div>
  );
}

function Circle2() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Circle">
          <circle cx="22" cy="22" fill="var(--fill-0, #036EF2)" id="Ellipse" r="22" />
          <circle cx="22" cy="22" fill="var(--fill-0, white)" id="Ellipse_2" r="14" />
          <circle cx="22" cy="22" fill="var(--fill-0, #036EF2)" id="Ellipse_3" r="7" />
        </g>
      </svg>
    </div>
  );
}

function Step3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip relative shrink-0 w-[220px]" data-name="Step">
      <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[#04165d] text-[24px] text-center w-[min-content]">Explorar</p>
      <Circle2 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#2f3237] text-[14px] text-center tracking-[0.25px] w-[190px]">Gerar e avaliar possibilidades de solução</p>
    </div>
  );
}

function Circle3() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Circle">
          <circle cx="22" cy="22" fill="var(--fill-0, #036EF2)" id="Ellipse" r="22" />
          <circle cx="22" cy="22" fill="var(--fill-0, white)" id="Ellipse_2" r="14" />
          <circle cx="22" cy="22" fill="var(--fill-0, #036EF2)" id="Ellipse_3" r="7" />
        </g>
      </svg>
    </div>
  );
}

function Step4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip relative shrink-0 w-[220px]" data-name="Step">
      <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[#04165d] text-[24px] text-center w-[min-content]">Validar</p>
      <Circle3 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#2f3237] text-[14px] text-center tracking-[0.25px] w-[190px]">Testar com utilizadores, iterar com evidência</p>    </div>
  );
}

function Circle4() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Circle">
          <circle cx="22" cy="22" fill="var(--fill-0, #036EF2)" id="Ellipse" r="22" />
          <circle cx="22" cy="22" fill="var(--fill-0, white)" id="Ellipse_2" r="14" />
          <circle cx="22" cy="22" fill="var(--fill-0, #036EF2)" id="Ellipse_3" r="7" />
        </g>
      </svg>
    </div>
  );
}

function Step5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip relative shrink-0 w-[220px]" data-name="Step">
      <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[#04165d] text-[24px] text-center w-[min-content]">Entregar</p>
      <Circle4 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#2f3237] text-[14px] text-center tracking-[0.25px] w-[190px]">Especificar, alinhar com dev, acompanhar build</p>
    </div>
  );
}

function Circle5() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Circle">
          <circle cx="22" cy="22" fill="var(--fill-0, #036EF2)" id="Ellipse" r="22" />
          <circle cx="22" cy="22" fill="var(--fill-0, white)" id="Ellipse_2" r="14" />
          <circle cx="22" cy="22" fill="var(--fill-0, #036EF2)" id="Ellipse_3" r="7" />
        </g>
      </svg>
    </div>
  );
}

function Step6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip relative shrink-0 w-[220px]" data-name="Step">
      <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[#04165d] text-[24px] text-center w-[min-content]">Acompanhar</p>
      <Circle5 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#2f3237] text-[14px] text-center tracking-[0.25px] w-[190px]">Avaliar impacto, extrair aprendizados</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
      <Step6 />
    </div>
  );
}

function IncertezaContainer() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[999px] shrink-0" data-name="Incerteza container">
      <div aria-hidden="true" className="absolute border border-[rgba(43,118,193,0.4)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#2f3237] text-[14px] tracking-[-0.25px] whitespace-nowrap">Nível de incerteza</p>
    </div>
  );
}

function RiscoContainer() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[999px] shrink-0" data-name="Risco container">
      <div aria-hidden="true" className="absolute border border-[rgba(43,118,193,0.4)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#2f3237] text-[14px] tracking-[-0.25px] whitespace-nowrap">Risco da decisão</p>
    </div>
  );
}

function ImpactoContainer() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[999px] shrink-0" data-name="Impacto container">
      <div aria-hidden="true" className="absolute border border-[rgba(43,118,193,0.4)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#2f3237] text-[14px] tracking-[-0.25px] whitespace-nowrap">Impacto para os utilizadores e o negócio</p>
    </div>
  );
}

function RecursosContainer() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[999px] shrink-0" data-name="Recursos container">
      <div aria-hidden="true" className="absolute border border-[rgba(43,118,193,0.4)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#2f3237] text-[14px] tracking-[-0.25px] whitespace-nowrap">Tempo e recursos disponíveis</p>
    </div>
  );
}

function EvidenciasContainer() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[999px] shrink-0" data-name="Evidencias container">
      <div aria-hidden="true" className="absolute border border-[rgba(43,118,193,0.4)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#2f3237] text-[14px] tracking-[-0.25px] whitespace-nowrap">Evidências e confiança</p>
    </div>
  );
}

function DecidirDetalhesContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Decidir detalhes container">
      <IncertezaContainer />
      <RiscoContainer />
      <ImpactoContainer />
      <RecursosContainer />
      <EvidenciasContainer />
    </div>
  );
}

function DecidirContainer() {
  return (
    <div className="bg-[rgba(3,110,242,0.06)] relative rounded-[16px] shrink-0 w-full" data-name="Decidir container">
      <div aria-hidden="true" className="absolute border border-[rgba(43,118,193,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center px-[32px] py-[16px] relative size-full">
          <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#04165d] text-[18px] text-center whitespace-nowrap">Decidir o quanto investir, acelerar ou aprofundar em cada fase com base em:</p>
          <DecidirDetalhesContainer />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[rgba(3,110,242,0.06)] relative rounded-[28px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#036ef2] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[20px] pt-[32px] px-[20px] relative size-full">
        <div className="absolute bg-[#036ef2] h-[4px] left-[130px] right-[130px] top-[100px]" data-name="Line" />
        <Content />
        <DecidirContainer />
      </div>
    </div>
  );
}

function Autorenew() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="autorenew">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="autorenew">
          <mask height="28" id="mask0_2040_1484" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="28" id="Bounding box" width="28" />
          </mask>
          <g mask="url(#mask0_2040_1484)">
            <path d={svgPaths.p37063700} fill="var(--fill-0, white)" id="autorenew_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[#078207] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[44px]" data-name="Icon">
      <Autorenew />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 whitespace-nowrap" data-name="Text">
      <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#078207] text-[22px]">Processo contínuo de aprendizagem e iteração</p>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#2f3237] text-[14px] tracking-[0.25px]">Cada ciclo gera evidências que realimentam o contexto e melhoram as próximas decisões</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-[rgba(44,201,44,0.06)] content-stretch flex gap-[16px] items-center justify-center px-[56px] py-[24px] relative rounded-[28px] shrink-0 w-[1360px]" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#3b953b] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Icon2 />
      <Text1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Content1 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[1360px]" data-name="Row">
      <IaApoioContainer />
      <Row1 />
      <Frame />
      <Container1 />
    </div>
  );
}

function ArrowAndEdge() {
  return (
    <div className="relative size-[40px]" data-name="arrow_and_edge">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="arrow_and_edge">
          <mask height="40" id="mask0_2040_1446" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="40" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="40" id="Bounding box" width="40" />
          </mask>
          <g mask="url(#mask0_2040_1446)">
            <path d={svgPaths.p3a327f1} fill="var(--fill-0, #04165D)" id="arrow_and_edge_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Col1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pt-[142px] relative shrink-0" data-name="Col">
      <div className="flex items-center justify-center relative shrink-0 size-[40px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <ArrowAndEdge />
        </div>
      </div>
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="star">
          <mask height="32" id="mask0_2040_1431" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_2040_1431)">
            <path d={svgPaths.p12090600} fill="var(--fill-0, white)" id="star_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="bg-[#078207] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[48px]" data-name="Icon">
      <Star />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 text-center w-full" data-name="Text">
      <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#078207] text-[24px] whitespace-nowrap">Valor</p>
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] min-w-full relative shrink-0 text-[#2f3237] text-[14px] tracking-[0.25px] w-[min-content]">Valor gerado para os utilizadores e o negócio</p>
    </div>
  );
}

function Conection1() {
  return (
    <div className="h-[354px] relative shrink-0 w-full" data-name="Conection">
      <div className="absolute h-[325.005px] left-[-20px] top-[2px] w-[111px]">
        <div className="absolute inset-[-0.62%_-1.8%_-0.62%_-2.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115.828 329.005">
            <path d={svgPaths.p29e92690} id="Vector 1" stroke="var(--stroke-0, #04165D)" strokeLinecap="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Step7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center pt-[88px] relative shrink-0 w-[180px]" data-name="Step">
      <Icon3 />
      <Text2 />
      <Conection1 />
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 top-[325px]" data-name="Container">
      <Step />
      <Col />
      <Row />
      <Col1 />
      <Step7 />
    </div>
  );
}

export default function Component06EstruturaEProcessoIdeal() {
  return (
    <div className="bg-white relative size-full" data-name="06 · Estrutura e processo ideal">
      <Footer />
      <Header />
      <Container />
    </div>
  );
}