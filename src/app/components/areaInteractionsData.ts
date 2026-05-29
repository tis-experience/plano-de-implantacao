export type AreaInteractionItem = {
  number: string;
  title: string;
  body: string;
};

export const AREA_INTERACTIONS: AreaInteractionItem[] = [
  {
    number: "01",
    title: "Tradução entre partes",
    body: "A área traduz a estratégia do negócio, a necessidade do utilizador e a viabilidade do desenvolvimento em uma linguagem única, mantendo o produto coerente entre essas três perspectivas durante todo o projecto.",
  },
  {
    number: "02",
    title: "Trocas explícitas",
    body: "Cada relação com outra área tem entradas e saídas declaradas, de forma que aquilo que recebemos e devolvemos faz parte de um contrato explícito de trabalho, sem ficar subentendido ou dependente da boa vontade.",
  },
  {
    number: "03",
    title: "Responsabilidade compartilhada",
    body: "Uma boa experiência não é responsabilidade exclusiva de uma área, e cada equipa que toca o projecto carrega a sua parte do compromisso com o utilizador, dentro daquilo que a sua competência permite entregar.",
  },
  {
    number: "04",
    title: "Difusão de conhecimento",
    body: "A área amplia a maturidade da empresa ao partilhar método, vocabulário e referências com as equipas com que opera, e o ganho de cada projecto espalha-se pela organização ao invés de ficar restrito à entrega.",
  },
];

export const AREA_INTERACTIONS_PAGE_COUNT = 4;
