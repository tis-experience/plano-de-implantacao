import driveFileMoveIcon from "../../assets/slide12/drive-file-move.svg";
import exploreIcon from "../../assets/slide12/explore.svg";
import mobileLayoutIcon from "../../assets/slide12/mobile-layout.svg";
import codeXmlIcon from "../../assets/slide12/code-xml.svg";
import thumbUpIcon from "../../assets/slide12/thumb-up.svg";
import tableEyeIcon from "../../assets/slide12/table-eye.svg";

export type StageRoleTag = "apoio" | "validacao" | "avaliacao";

export type StageRole = {
  tag: StageRoleTag;
  label: string;
};

export type StageResponsibility = {
  step: string;
  title: string;
  icon: string;
  owner: string;
  roles: StageRole[];
};

export const STAGE_RESPONSIBILITIES: StageResponsibility[] = [
  {
    step: "ETAPA 01",
    title: "Entrada da demanda",
    icon: driveFileMoveIcon,
    owner: "Comercial/Stakeholder",
    roles: [
      { tag: "apoio", label: "XP Engineering e Produto" },
      { tag: "validacao", label: "Direcção" },
    ],
  },
  {
    step: "ETAPA 02",
    title: "Discovery",
    icon: exploreIcon,
    owner: "XP Engineering",
    roles: [
      { tag: "apoio", label: "Produto, Dados/BI" },
      { tag: "validacao", label: "Produto" },
    ],
  },
  {
    step: "ETAPA 03",
    title: "Desenho da solução",
    icon: mobileLayoutIcon,
    owner: "XP Engineering",
    roles: [
      { tag: "apoio", label: "Produto, Engenharia, Stakeholder e Utilizador" },
      { tag: "validacao", label: "Produto, Stakeholder e Utilizador" },
    ],
  },
  {
    step: "ETAPA 04",
    title: "Implementação",
    icon: codeXmlIcon,
    owner: "Desenvolvimento",
    roles: [
      { tag: "apoio", label: "XP Engineering e Produto" },
      { tag: "validacao", label: "QA, Produto e XP Engineering" },
    ],
  },
  {
    step: "ETAPA 05",
    title: "Aceite",
    icon: thumbUpIcon,
    owner: "QA",
    roles: [
      { tag: "apoio", label: "XP Engineering" },
      { tag: "validacao", label: "Produto e Stakeholder" },
    ],
  },
  {
    step: "ETAPA 06",
    title: "Pós-release",
    icon: tableEyeIcon,
    owner: "Dados/BI",
    roles: [
      { tag: "apoio", label: "XP Engineering e Suporte/CS" },
      { tag: "avaliacao", label: "XP Engineering e Produto" },
    ],
  },
];

export const STAGE_RESPONSIBILITIES_FOOTNOTE =
  "Experience Engineering como guardião da experiência ao longo do ciclo";
