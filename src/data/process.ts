interface Data {
  num: string;
  title: string;
  describe: string;
  complement: string;
}

export const processData: Data[] = [
  {
    num: "01",
    title: "Escuta e diagnóstico",
    describe:
      "Você conta como usa o espaço. Nós analisamos as fontes de ruído, as superfícies e o que precisa mudar.",
    complement: "Você recebe: leitura do ambiente e prioridades.",
  },
  {
    num: "02",
    title: "Desenho e escolhas",
    describe:
      "Soluções acústicas entram em sintonia com a arquitetura. Materiais, posições e detalhes são definidos em conjunto, considerando a rotina e o orçamento do projeto.",
    complement:
      "Você recebe: proposta de soluções, seleção de materiais e detalhamento técnico.",
  },
  {
    num: "03",
    title: "Instalação e afinação",
    describe:
      "Orientamos a instalação e acompanhamos os pontos críticos da execução. Ao final, conferimos o resultado no ambiente e indicamos os ajustes necessários.",
    complement:
      "Você recebe: orientações de instalação, acompanhamento e recomendações finais.",
  },
];
