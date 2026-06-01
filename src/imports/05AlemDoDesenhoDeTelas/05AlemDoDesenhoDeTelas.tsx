import svgPaths from "./svg-d0t3u4q1u6";
import { imgGroup } from "./svg-s8nfu";

function HeaderContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Header Container">
      <p className="font-['Bronkoh-SemiBold:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#036ef2] text-[16px] tracking-[2px] uppercase w-full">Mudança de paradigma</p>
      <div className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-[0] relative shrink-0 text-[#04165d] text-[80px] tracking-[-1.5px] w-full">
        <p className="leading-none mb-0">Experience Engineering</p>
        <p className="leading-none">muito além do desenho de ecrãs</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[120px] not-italic top-[96px] w-[1672px]" data-name="Header">
      <HeaderContainer />
      <p className="font-['Bronkoh-Regular:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[#2f3237] text-[28px] w-[1536px]">A área deve assegurar que as soluções atendam a problemas reais, funcionem adequadamente em cada contexto de uso e cumpram os requisitos de negócio. Para isso, existem seis frentes nas quais devemos atuar com protagonismo:</p>
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

function Page() {
  return (
    <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-name="Page">
      <p className="font-['Bronkoh-SemiBold:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#036ef2] text-[14px] tracking-[1.5px] uppercase whitespace-nowrap">05</p>
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

function Header1() {
  return (
    <div className="content-stretch flex font-['Bronkoh-Heavy:Regular',sans-serif] gap-[24px] items-center not-italic relative shrink-0 w-full" data-name="Header">
      <p className="leading-[40px] relative shrink-0 text-[#036ef2] text-[32px] whitespace-nowrap">01</p>
      <p className="flex-[1_0_0] leading-[32px] min-w-px relative text-[#04165d] text-[24px]">Pesquisa e Discovery</p>
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
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[24px] items-start pl-[32px] pr-[24px] py-[24px] relative rounded-[4px] shrink-0 w-[560px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#036ef2] border-l-4 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Header1 />
      <List />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex font-['Bronkoh-Heavy:Regular',sans-serif] gap-[24px] items-center not-italic relative shrink-0 w-full" data-name="Header">
      <p className="leading-[40px] relative shrink-0 text-[#036ef2] text-[32px] whitespace-nowrap">02</p>
      <p className="flex-[1_0_0] leading-[32px] min-w-px relative text-[#04165d] text-[24px]">Design de Interface e Interacção</p>
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
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[24px] items-start pl-[32px] pr-[24px] py-[24px] relative rounded-[4px] shrink-0 w-[560px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#036ef2] border-l-4 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Header2 />
      <List1 />
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex font-['Bronkoh-Heavy:Regular',sans-serif] gap-[24px] items-center not-italic relative shrink-0 w-full" data-name="Header">
      <p className="leading-[40px] relative shrink-0 text-[#036ef2] text-[32px] whitespace-nowrap">03</p>
      <p className="flex-[1_0_0] leading-[32px] min-w-px relative text-[#04165d] text-[24px]">Design de Serviço</p>
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
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[24px] items-start pl-[32px] pr-[24px] py-[24px] relative rounded-[4px] shrink-0 w-[560px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#036ef2] border-l-4 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Header3 />
      <List2 />
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex font-['Bronkoh-Heavy:Regular',sans-serif] gap-[24px] items-center not-italic relative shrink-0 w-full" data-name="Header">
      <p className="leading-[40px] relative shrink-0 text-[#036ef2] text-[32px] whitespace-nowrap">04</p>
      <p className="flex-[1_0_0] leading-[32px] min-w-px relative text-[#04165d] text-[24px]">Design System</p>
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
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[24px] items-start pl-[32px] pr-[24px] py-[24px] relative rounded-[4px] shrink-0 w-[560px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#036ef2] border-l-4 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Header4 />
      <List3 />
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex font-['Bronkoh-Heavy:Regular',sans-serif] gap-[24px] items-center not-italic relative shrink-0 w-full" data-name="Header">
      <p className="leading-[40px] relative shrink-0 text-[#036ef2] text-[32px] whitespace-nowrap">05</p>
      <p className="flex-[1_0_0] leading-[32px] min-w-px relative text-[#04165d] text-[24px]">Acessibilidade e Compliance</p>
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
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[24px] items-start pl-[32px] pr-[24px] py-[24px] relative rounded-[4px] shrink-0 w-[560px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#036ef2] border-l-4 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Header5 />
      <List4 />
    </div>
  );
}

function Header6() {
  return (
    <div className="content-stretch flex font-['Bronkoh-Heavy:Regular',sans-serif] gap-[24px] items-center not-italic relative shrink-0 w-full" data-name="Header">
      <p className="leading-[40px] relative shrink-0 text-[#036ef2] text-[32px] whitespace-nowrap">06</p>
      <p className="flex-[1_0_0] leading-[32px] min-w-px relative text-[#04165d] text-[24px]">Validação e Testes</p>
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
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[24px] items-start pl-[32px] pr-[24px] py-[24px] relative rounded-[4px] shrink-0 w-[560px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#036ef2] border-l-4 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Header6 />
      <List5 />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[20px] items-start left-[120px] top-[455px] w-[1720px]" data-name="main Container">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

export default function Component05AlemDoDesenhoDeTelas() {
  return (
    <div className="bg-white relative size-full" data-name="05 · Além do desenho de ecrãs">
      <Header />
      <Footer />
      <MainContainer />
    </div>
  );
}
