export type RoleDefinition = {
  title: string;
  summary: string;
  quote: string;
  responsibilities: string[];
};

export const ROLES: RoleDefinition[] = [
  {
    title: "Design Lead",
    summary:
      "Lidera a prática de design da área como ponte entre negócio e execução, definindo processos, governando o Design System, gerindo a equipa e respondendo pela qualidade e maturidade operacional da disciplina.",
    quote:
      "Profissional sênior com experiência em liderança de prática de design, gestão de sistemas de design e implementação de processos em contextos onde a disciplina está em maturação.",
    responsibilities: [
      "Definir e evoluir o processo de design da fábrica",
      "Liderar a construção e governança do Design System",
      "Orientar a equipa em decisões de design e critérios de qualidade",
      "Gerir alocação, desenvolvimento e rituais da equipa",
      "Estabelecer métricas de capacidade e qualidade",
      "Representar a área junto à liderança e stakeholders",
      "Actuar como designer executor em projectos estratégicos",
    ],
  },
  {
    title: "Designer Sênior",
    summary:
      "Executa projectos de maior complexidade com autonomia, desde o discovery até ao handoff com desenvolvedores, apoia tecnicamente os outros designers no dia-a-dia e contribui para a evolução do Design System.",
    quote:
      "Experiência sólida em design de produto em contextos complexos e multidisciplinares, com capacidade de comunicação técnica com equipa e desenvolvimento.",
    responsibilities: [
      "Conduzir projectos de maior complexidade do discovery ao handoff",
      "Apoiar o Lead na orientação diária da equipa",
      "Rever entregas dos Plenos antes de avançarem para desenvolvimento",
      "Garantir que o processo de handoff é seguido nas entregas da equipa",
      "Orientar Plenos e Júniors no dia-a-dia",
      "Contribuir para a evolução do Design System",
    ],
  },
  {
    title: "Designer Pleno",
    summary:
      "Executa projectos de ponta a ponta, apoia e atua em discovery, desenvolve trabalhos diversos do fluxo de design, consumindo o Design System e contribuindo pontualmente para a sua evolução.",
    quote:
      "Profissional com experiência em design de produto digital, domínio de ferramentas e processos, com capacidade de execução autónoma em projectos.",
    responsibilities: [
      "Mapear jornadas e definir fluxos de interação",
      "Prototipar soluções em diferentes níveis de fidelidade",
      "Preparar handoff com especificações para desenvolvimento",
      "Identificar e reportar inconsistências de design",
      "Validar soluções com utilizadores",
      "Contribuir com o Design System",
    ],
  },
  {
    title: "Designer Júnior",
    summary:
      "Apoia a execução de projectos com supervisão e actua em demandas do dia-a-dia, desenvolvendo-se dentro da prática e dos processos da área.",
    quote:
      "Perfil em início de carreira com base técnica em design e aptidão para aprendizagem dentro de um processo estruturado.",
    responsibilities: [
      "Desenhar interfaces e fluxos de menor complexidade",
      "Adaptar padrões e componentes existentes a novos contextos",
      "Atender pedidos de ajuste e evolução em projectos entregues",
      "Apoiar Plenos e Sênior em entregas de projectos maiores",
      "Preparar e organizar assets para handoff",
      "Participar em revisões e incorporar feedbacks",
    ],
  },
  {
    title: "UX Researcher",
    summary:
      "Mapeia comportamentos e necessidades dos utilizadores, apoia os designers em entrevistas, testes de usabilidade, análise qualitativa e definição de personas, além de actuar de forma autónoma em projectos de service design.",
    quote:
      "Profissional com experiência em pesquisa de utilizadores, domínio de métodos qualitativos e forte capacidade de síntese e comunicação de insights para equipas de design e produto.",
    responsibilities: [
      "Conduzir entrevistas, testes de usabilidade e análise qualitativa",
      "Definir personas e mapear jornadas dos utilizadores",
      "Estruturar e manter repositório de insights da área",
      "Traduzir achados em recomendações para design e produto",
      "Colaborar com os designers no planeamento de discovery",
      "Executar research em projectos de service design",
      "Contribuir para a definição de métricas de experiência",
    ],
  },
];
