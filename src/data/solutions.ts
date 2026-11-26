export interface Item {
  num: string;
  tag: string;
  title: string;
  text: string;
  link: string;
  className?: string;
}

export const solutionsData: Item[] = [
  {
    num: "01",
    tag: "Diagnóstico acústico",
    title: "Entender antes de intervir.",
    text: "Mapeamos o som, os materiais e a rotina do lugar. O ponto de partida é ouvir o que incomoda.",
    link: "VISITA + LEITURA DO AMBIENTE",
  },
  {
    num: "02",
    tag: "Projeto integrado",
    title: "Técnica com sensibilidade.",
    text: "Desenhamos soluções junto da arquitetura: proporção, textura e desempenho na mesma conversa.",
    link: "ESTUDO + DETALHAMENTO",
    className: "project",
  },
  {
    num: "03",
    tag: "Curadoria de materiais",
    title: "Cada superfície importa.",
    text: "Madeira, feltro e fibras escolhidos pela função e pelo toque. Nada de revestir tudo por revestir.",
    link: "AMOSTRAS + ESPECIFICAÇÃO",
    className: "curation",
  },
  {
    num: "04",
    tag: "Acompanhamento",
    title: "Do desenho ao último ajuste.",
    text: "Orientamos a instalação e conferimos o resultado. Conforto não termina na entrega do projeto.",
    link: "OBRA + ESCUTA FINAL",
    className: "follow-up",
  },
];
