import svgPaths from "./svg-xc3vwdt1gg";

function ManageSearch() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="manage_search">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="manage_search">
          <mask height="32" id="mask0_2033_1085" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_2033_1085)">
            <path d={svgPaths.p22ba1e00} fill="var(--fill-0, #04165D)" id="manage_search_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Header">
      <ManageSearch />
      <p className="flex-[1_0_0] font-['Bronkoh-Heavy:Regular',sans-serif] leading-[32px] min-w-px not-italic relative text-[#04165d] text-[24px]">Pesquisa e Discovery</p>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#036ef2] shrink-0 size-[12px]" data-name="Rectangle" />
      <p className="flex-[1_0_0] font-['Bronkoh-Regular:Regular',sans-serif] leading-[24px] min-w-px not-italic relative text-[#2f3237] text-[18px]">Entrevistas com utilizadores e stakeholders</p>    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#036ef2] shrink-0 size-[12px]" data-name="Rectangle" />
      <p className="flex-[1_0_0] font-['Bronkoh-Regular:Regular',sans-serif] leading-[24px] min-w-px not-italic relative text-[#2f3237] text-[18px]">Personas e jornadas</p>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#036ef2] shrink-0 size-[12px]" data-name="Rectangle" />
      <p className="flex-[1_0_0] font-['Bronkoh-Regular:Regular',sans-serif] leading-[24px] min-w-px not-italic relative text-[#2f3237] text-[18px]">Benchmarks e análise de contexto</p>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[4px] relative size-full">
        <Item />
        <Item1 />
        <Item2 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[24px] items-start pl-[32px] pr-[24px] py-[24px] relative rounded-[16px] shrink-0 w-[560px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#036ef2] border-l-4 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Header />
      <List />
    </div>
  );
}

function ViewComfy() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="view_comfy">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="view_comfy">
          <mask height="32" id="mask0_2033_1093" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_2033_1093)">
            <path d={svgPaths.p1c0e6c00} fill="var(--fill-0, #04165D)" id="view_comfy_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Header">
      <ViewComfy />
      <p className="flex-[1_0_0] font-['Bronkoh-Heavy:Regular',sans-serif] leading-[32px] min-w-px not-italic relative text-[#04165d] text-[24px]">Design de Interface e Interacção</p>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#036ef2] shrink-0 size-[12px]" data-name="Rectangle" />
      <p className="flex-[1_0_0] font-['Bronkoh-Regular:Regular',sans-serif] leading-[24px] min-w-px not-italic relative text-[#2f3237] text-[18px]">Wireframes, fluxos e protótipos</p>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#036ef2] shrink-0 size-[12px]" data-name="Rectangle" />
      <p className="flex-[1_0_0] font-['Bronkoh-Regular:Regular',sans-serif] leading-[24px] min-w-px not-italic relative text-[#2f3237] text-[18px]">Design de alta fidelidade</p>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#036ef2] shrink-0 size-[12px]" data-name="Rectangle" />
      <p className="flex-[1_0_0] font-['Bronkoh-Regular:Regular',sans-serif] leading-[24px] min-w-px not-italic relative text-[#2f3237] text-[18px]">Especificação técnica para DEV</p>
    </div>
  );
}

function List1() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[4px] relative size-full">
        <Item3 />
        <Item4 />
        <Item5 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[24px] items-start pl-[32px] pr-[24px] py-[24px] relative rounded-[16px] shrink-0 w-[560px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#036ef2] border-l-4 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Header1 />
      <List1 />
    </div>
  );
}

function ConveyorBelt() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="conveyor_belt">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="conveyor_belt">
          <mask height="32" id="mask0_2033_1089" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_2033_1089)">
            <path d={svgPaths.p37c7f480} fill="var(--fill-0, #04165D)" id="conveyor_belt_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Header">
      <ConveyorBelt />
      <p className="flex-[1_0_0] font-['Bronkoh-Heavy:Regular',sans-serif] leading-[32px] min-w-px not-italic relative text-[#04165d] text-[24px]">Design de Serviço</p>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#036ef2] shrink-0 size-[12px]" data-name="Rectangle" />
      <p className="flex-[1_0_0] font-['Bronkoh-Regular:Regular',sans-serif] leading-[24px] min-w-px not-italic relative text-[#2f3237] text-[18px]">Mapeamento de processos</p>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#036ef2] shrink-0 size-[12px]" data-name="Rectangle" />
      <p className="flex-[1_0_0] font-['Bronkoh-Regular:Regular',sans-serif] leading-[24px] min-w-px not-italic relative text-[#2f3237] text-[18px]">Service blueprints</p>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#036ef2] shrink-0 size-[12px]" data-name="Rectangle" />
      <p className="flex-[1_0_0] font-['Bronkoh-Regular:Regular',sans-serif] leading-[24px] min-w-px not-italic relative text-[#2f3237] text-[18px]">Desenho de jornadas operacionais</p>
    </div>
  );
}

function List2() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[4px] relative size-full">
        <Item6 />
        <Item7 />
        <Item8 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[24px] items-start pl-[32px] pr-[24px] py-[24px] relative rounded-[16px] shrink-0 w-[560px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#036ef2] border-l-4 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Header2 />
      <List2 />
    </div>
  );
}

function Widgets() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="widgets">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="widgets">
          <mask height="32" id="mask0_2033_1097" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_2033_1097)">
            <path d={svgPaths.p132ccd80} fill="var(--fill-0, #04165D)" id="widgets_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Header">
      <Widgets />
      <p className="flex-[1_0_0] font-['Bronkoh-Heavy:Regular',sans-serif] leading-[32px] min-w-px not-italic relative text-[#04165d] text-[24px]">Design System</p>
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#036ef2] shrink-0 size-[12px]" data-name="Rectangle" />
      <p className="flex-[1_0_0] font-['Bronkoh-Regular:Regular',sans-serif] leading-[24px] min-w-px not-italic relative text-[#2f3237] text-[18px]">Tokens, componentes e padrões</p>
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#036ef2] shrink-0 size-[12px]" data-name="Rectangle" />
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-px not-italic relative text-[#2f3237] text-[16px]">Documentação e governança</p>
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#036ef2] shrink-0 size-[12px]" data-name="Rectangle" />
      <p className="flex-[1_0_0] font-['Bronkoh-Regular:Regular',sans-serif] leading-[24px] min-w-px not-italic relative text-[#2f3237] text-[18px]">Integração com desenvolvimento</p>
    </div>
  );
}

function List3() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[4px] relative size-full">
        <Item9 />
        <Item10 />
        <Item11 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[24px] items-start pl-[32px] pr-[24px] py-[24px] relative rounded-[16px] shrink-0 w-[560px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#036ef2] border-l-4 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Header3 />
      <List3 />
    </div>
  );
}

function AccessibilityNew() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="accessibility_new">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="accessibility_new">
          <mask height="32" id="mask0_2033_1077" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_2033_1077)">
            <path d={svgPaths.p1fba0a80} fill="var(--fill-0, #04165D)" id="accessibility_new_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Header">
      <AccessibilityNew />
      <p className="flex-[1_0_0] font-['Bronkoh-Heavy:Regular',sans-serif] leading-[32px] min-w-px not-italic relative text-[#04165d] text-[24px]">Acessibilidade e Compliance</p>
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#036ef2] shrink-0 size-[12px]" data-name="Rectangle" />
      <p className="flex-[1_0_0] font-['Bronkoh-Regular:Regular',sans-serif] leading-[24px] min-w-px not-italic relative text-[#2f3237] text-[18px]">Auditoria WCAG</p>
    </div>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#036ef2] shrink-0 size-[12px]" data-name="Rectangle" />
      <p className="flex-[1_0_0] font-['Bronkoh-Regular:Regular',sans-serif] leading-[24px] min-w-px not-italic relative text-[#2f3237] text-[18px]">Documentação de boas práticas</p>
    </div>
  );
}

function Item14() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#036ef2] shrink-0 size-[12px]" data-name="Rectangle" />
      <p className="flex-[1_0_0] font-['Bronkoh-Regular:Regular',sans-serif] leading-[24px] min-w-px not-italic relative text-[#2f3237] text-[18px]">Testes com utilizadores diversos</p>    </div>
  );
}

function List4() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[4px] relative size-full">
        <Item12 />
        <Item13 />
        <Item14 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[24px] items-start pl-[32px] pr-[24px] py-[24px] relative rounded-[16px] shrink-0 w-[560px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#036ef2] border-l-4 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Header4 />
      <List4 />
    </div>
  );
}

function SyncSavedLocally() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="sync_saved_locally">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="sync_saved_locally">
          <mask height="32" id="mask0_2033_1081" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_2033_1081)">
            <path d={svgPaths.p37567ac0} fill="var(--fill-0, #04165D)" id="sync_saved_locally_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Header">
      <SyncSavedLocally />
      <p className="flex-[1_0_0] font-['Bronkoh-Heavy:Regular',sans-serif] leading-[32px] min-w-px not-italic relative text-[#04165d] text-[24px]">Validação e Testes</p>
    </div>
  );
}

function Item15() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#036ef2] shrink-0 size-[12px]" data-name="Rectangle" />
      <p className="flex-[1_0_0] font-['Bronkoh-Regular:Regular',sans-serif] leading-[24px] min-w-px not-italic relative text-[#2f3237] text-[18px]">Testes de usabilidade</p>
    </div>
  );
}

function Item16() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#036ef2] shrink-0 size-[12px]" data-name="Rectangle" />
      <p className="flex-[1_0_0] font-['Bronkoh-Regular:Regular',sans-serif] leading-[24px] min-w-px not-italic relative text-[#2f3237] text-[18px]">Análise de dados qualitativos</p>
    </div>
  );
}

function Item17() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#036ef2] shrink-0 size-[12px]" data-name="Rectangle" />
      <p className="flex-[1_0_0] font-['Bronkoh-Regular:Regular',sans-serif] leading-[24px] min-w-px not-italic relative text-[#2f3237] text-[18px]">Iteração baseada em evidência</p>
    </div>
  );
}

function List5() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[4px] relative size-full">
        <Item15 />
        <Item16 />
        <Item17 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[24px] items-start pl-[32px] pr-[24px] py-[24px] relative rounded-[16px] shrink-0 w-[560px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#036ef2] border-l-4 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Header5 />
      <List5 />
    </div>
  );
}

export default function MainContainer() {
  return (
    <div className="content-start flex flex-wrap gap-[20px] items-start relative size-full" data-name="main Container">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}
