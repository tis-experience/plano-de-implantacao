import svgPaths from "./svg-q2kz47c459";
import { imgGroup } from "./svg-h4x0i";

function HeaderContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[650px]" data-name="Header Container">
      <p className="font-['Bronkoh-SemiBold:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#036ef2] text-[16px] tracking-[2px] uppercase w-full">Estrutura e processo atual</p>
      <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-none relative shrink-0 text-[#04165d] text-[80px] tracking-[-1.5px] w-full">Como tem decorrido o trabalho da área</p>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[120px] not-italic top-[96px] w-[860px]" data-name="Header">
      <HeaderContainer />
      <p className="font-['Bronkoh-Regular:Regular',sans-serif] leading-[1.5] min-w-full relative shrink-0 text-[#2f3237] text-[28px] w-[min-content]">Da entrada nos projectos às consequências observáveis no resultado final.</p>
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
      <p className="font-['Bronkoh-SemiBold:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#036ef2] text-[14px] tracking-[1.5px] uppercase whitespace-nowrap">03</p>
      <Spacer />
      <p className="font-['Bronkoh-SemiBold:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6e7587] text-[14px] tracking-[1.5px] uppercase whitespace-nowrap">Estrutura e processo atual</p>
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

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-[160px]">
      <p className="font-['Bronkoh-SemiBold:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#036ef2] text-[16px] tracking-[2px] uppercase w-full">Como entramos</p>
      <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-none relative shrink-0 text-[#04165d] text-[80px] tracking-[-1.5px] w-full">01</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Content">
      <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#04165d] text-[28px] w-full">Entrada via proposta comercial</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#2f3237] text-[20px] w-full">A área é accionada para produzir ecrãs com prazo curto e sem fundamentação prévia. Quando aprovadas, vão directamente para desenvolvimento.</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Content">
      <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#04165d] text-[28px] w-full">Projecto inicia pelo desenho</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#2f3237] text-[20px] w-full">O ponto de partida do projecto é o desenho de ecrãs, porque os programadores precisam de material para trabalhar. As etapas anteriores não acontecem.</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[64px] items-start min-w-px relative">
      <Content />
      <Content1 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <Frame3 />
      <Frame6 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start px-[56px] py-[48px] relative rounded-[40px] shrink-0 w-[1320px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(3, 110, 242, 0.06) 0%, rgba(3, 110, 242, 0.06) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Container">
      <Row />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-[160px]">
      <p className="font-['Bronkoh-SemiBold:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#036ef2] text-[16px] tracking-[2px] uppercase w-full">O que falta</p>
      <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-none relative shrink-0 text-[#04165d] text-[80px] tracking-[-1.5px] w-full">02</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Content">
      <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#04165d] text-[28px] w-full">Sem etapa de Discovery</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#2f3237] text-[20px] w-full">UX é entendido como brainstorming seguido de criação de ecrãs. A compreensão do problema fica de fora.</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Content">
      <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#04165d] text-[28px] w-full">Sem teste de usabilidade</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#2f3237] text-[20px] w-full">Os protótipos seguem para desenvolvimento sem validação com o utilizador. Os problemas são identificados muito tarde.</p>    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Content">
      <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#04165d] text-[28px] w-full">Escopos pré-fechados</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#2f3237] text-[20px] w-full">User stories sem detalhamento ou documentação já contêm escopo definido, sem espaço para alternativas.</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[64px] items-start min-w-px relative">
      <Content2 />
      <Content3 />
      <Content4 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <Frame2 />
      <Frame5 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[56px] py-[48px] relative rounded-[40px] shrink-0 w-[1680px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(3, 110, 242, 0.06) 0%, rgba(3, 110, 242, 0.06) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Container">
      <Row1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-[160px]">
      <p className="font-['Bronkoh-SemiBold:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#036ef2] text-[16px] tracking-[2px] uppercase w-full">Consequência</p>
      <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-none relative shrink-0 text-[#04165d] text-[80px] tracking-[-1.5px] w-full">03</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Content">
      <p className="font-['Bronkoh-Heavy:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#04165d] text-[28px] w-full">Projectos descartados</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#2f3237] text-[20px] w-full">Alguns projectos são descartados por não atenderem à necessidade real, ou por disputa externa.</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[460px]">
      <Content5 />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0" data-name="Row">
      <Frame1 />
      <Frame4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[56px] py-[48px] relative rounded-[40px] shrink-0 w-[1680px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(3, 110, 242, 0.06) 0%, rgba(3, 110, 242, 0.06) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Container">
      <Row2 />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="absolute content-stretch flex gap-[32px] items-start left-[120px] top-[453px]" data-name="Main Container">
      <Container />
      <Container1 />
      <Container2 />
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

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[40px]">
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

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[40px]">
      <ArrowForwardIos />
    </div>
  );
}

function NavigationContainer() {
  return (
    <div className="absolute content-stretch flex gap-[32px] items-end justify-end left-[128px] top-[741px]" data-name="Navigation Container">
      <Frame />
      <Frame7 />
    </div>
  );
}

export default function Component03EstruturaEProcessoAtual() {
  return (
    <div className="bg-white relative size-full" data-name="03 · Estrutura e processo atual">
      <Header />
      <Footer />
      <p className="absolute font-['Bronkoh-Heavy:Regular',sans-serif] leading-[1.3] left-[120px] not-italic text-[#04165d] text-[26px] top-[860px] whitespace-nowrap">A área entra tarde porque não tem uma porta de entrada formalizada.</p>
      <MainContainer />
      <NavigationContainer />
    </div>
  );
}