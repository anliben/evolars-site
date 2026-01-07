const boazContent = {
  meta: {
    title: "Boaz AI | Evolars LTDA",
    description:
      "Assistente digital para apoio administrativo, educacional e organizacional de Lojas Maçônicas.",
  },
  hero: {
    tag: "Evolars LTDA",
    title: "Boaz AI",
    subtitle:
      "Assistente digital para apoio administrativo, educacional e organizacional de Lojas Maçônicas",
    description:
      "O Boaz AI apoia a gestão da Loja com discrição, ética e foco em eficiência. Atua como ferramenta de organização e suporte contínuo, sem assumir autoridade ritualística ou decisões internas.",
    primaryCta: {
      label: "Solicitar demonstração",
      href: "https://wa.me/5511994946644",
    },
    secondaryCta: {
      label: "Conhecer o Boaz AI",
      href: "/#contato",
    },
    highlights: [
      {
        title: "Confidencialidade",
        description: "Dados tratados com reserva, rastreabilidade e sigilo.",
      },
      {
        title: "Organização",
        description: "Fluxos administrativos claros e estruturados.",
      },
    ],
    cardTitle: "Diretrizes centrais",
    cardDescription:
      "O Boaz AI atua exclusivamente como ferramenta de apoio, mantendo a Loja como autoridade soberana nas decisões e práticas ritualísticas.",
  },
  whatItDoes: {
    eyebrow: "O que o Boaz AI faz",
    title: "Frentes de atuação estruturadas",
    items: [
      {
        title: "Administração da Loja",
        items: [
          "Organização administrativa da Loja.",
          "Controle de compromissos, agendas e marcações de textos.",
          "Gestão de cobranças de mensalidades.",
          "Apoio à tesouraria com registros e acompanhamento, sem expor dados sensíveis.",
          "Bolsa de propostas e organização de pautas.",
        ],
      },
      {
        title: "Apoio Ritualístico e Educacional",
        items: [
          "Apoio ao ensino dos 3 graus da Loja Azul.",
          "Apoio aos graus filosóficos com conteúdo, organização e estudo.",
          "Estruturação e explicação de conteúdos de forma respeitosa e didática.",
          "Suporte educacional contínuo aos irmãos.",
        ],
      },
      {
        title: "Análise e Avaliação de Trabalhos",
        items: [
          "Leitura e análise de trabalhos em PDF.",
          "Avaliação estrutural, clareza, coerência e alinhamento simbólico.",
          "Sugestões de melhoria e organização de ideias.",
          "Apoio ao desenvolvimento intelectual dos irmãos.",
        ],
      },
      {
        title: "Atendimento e Triagem de Profanos",
        items: [
          "Atendimento inicial de profanos de forma respeitosa e ética.",
          "Coleta de informações preliminares.",
          "Organização e agendamento de entrevistas.",
          "Encaminhamento estruturado para a Loja, sem decisões automáticas.",
        ],
      },
    ],
  },
  support: {
    eyebrow: "Como o Boaz AI apoia a Loja",
    title: "Apoio contínuo, discreto e confiável",
    items: [
      {
        title: "Organização",
        description: "Centraliza informações e mantém fluxos administrativos consistentes.",
      },
      {
        title: "Discrição",
        description: "Respeito absoluto à confidencialidade e aos limites ritualísticos.",
      },
      {
        title: "Eficiência",
        description: "Automatiza tarefas repetitivas e libera tempo para o essencial.",
      },
      {
        title: "Apoio contínuo",
        description: "Suporte constante às demandas recorrentes da Loja.",
      },
    ],
  },
  useCases: {
    eyebrow: "Casos de uso",
    title: "Aplicações práticas no cotidiano da Loja",
    note:
      "Todas as interações são conduzidas com ética, discrição e respeito à confidencialidade.",
    items: [
      "Tesouraria e mensalidades.",
      "Trabalhos, estudos e organização de conteúdos.",
      "Entrevistas, triagens e organização de agendas.",
      "Gestão de propostas e pautas administrativas.",
      "Comunicação institucional e demandas recorrentes.",
    ],
  },
  cta: {
    eyebrow: "Solicite uma apresentação",
    title: "Boaz AI é um aliado discreto para a gestão da Loja",
    description:
      "Entre em contato para conhecer como o Boaz AI pode apoiar sua Loja com ética, confidencialidade e organização.",
    primaryCta: {
      label: "Solicitar demonstração",
      href: "https://wa.me/5511994946644",
    },
    secondaryCta: {
      label: "Conhecer o Boaz AI",
      href: "/#contato",
    },
  },
};

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
};

const setLink = (selector, { label, href }) => {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = label;
    element.setAttribute("href", href);
  }
};

const renderHighlights = (items) => {
  const container = document.querySelector("[data-const='heroHighlights']");
  if (!container) return;
  container.innerHTML = items
    .map(
      (item) => `
      <div>
        <strong>${item.title}</strong>
        <span>${item.description}</span>
      </div>
    `,
    )
    .join("");
};

const renderCardGrid = (selector, items) => {
  const container = document.querySelector(selector);
  if (!container) return;
  container.innerHTML = items
    .map(
      (item) => `
      <article class="card">
        <h3>${item.title}</h3>
        <ul>
          ${item.items.map((text) => `<li>${text}</li>`).join("")}
        </ul>
      </article>
    `,
    )
    .join("");
};

const renderSupportGrid = (selector, items) => {
  const container = document.querySelector(selector);
  if (!container) return;
  container.innerHTML = items
    .map(
      (item) => `
      <article class="card card--compact">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    `,
    )
    .join("");
};

const renderList = (selector, items) => {
  const container = document.querySelector(selector);
  if (!container) return;
  container.innerHTML = items.map((text) => `<li>${text}</li>`).join("");
};

const applyBoazContent = () => {
  if (typeof document === "undefined") return;
  const { meta, hero, whatItDoes, support, useCases, cta } = boazContent;

  document.title = meta.title;
  const description = document.querySelector("meta[name='description']");
  if (description) {
    description.setAttribute("content", meta.description);
  }

  setText("[data-const='heroTag']", hero.tag);
  setText("[data-const='heroTitle']", hero.title);
  setText("[data-const='heroSubtitle']", hero.subtitle);
  setText("[data-const='heroDescription']", hero.description);
  setText("[data-const='heroCardTitle']", hero.cardTitle);
  setText("[data-const='heroCardDescription']", hero.cardDescription);
  setLink("[data-const-link='primaryCta']", hero.primaryCta);
  setLink("[data-const-link='secondaryCta']", hero.secondaryCta);
  renderHighlights(hero.highlights);

  setText("[data-const='whatEyebrow']", whatItDoes.eyebrow);
  setText("[data-const='whatTitle']", whatItDoes.title);
  renderCardGrid("[data-const-grid='whatItDoes']", whatItDoes.items);

  setText("[data-const='supportEyebrow']", support.eyebrow);
  setText("[data-const='supportTitle']", support.title);
  renderSupportGrid("[data-const-grid='support']", support.items);

  setText("[data-const='useCasesEyebrow']", useCases.eyebrow);
  setText("[data-const='useCasesTitle']", useCases.title);
  setText("[data-const='useCasesNote']", useCases.note);
  renderList("[data-const-list='useCases']", useCases.items);

  setText("[data-const='ctaEyebrow']", cta.eyebrow);
  setText("[data-const='ctaTitle']", cta.title);
  setText("[data-const='ctaDescription']", cta.description);
  setLink("[data-const-link='ctaPrimary']", cta.primaryCta);
  setLink("[data-const-link='ctaSecondary']", cta.secondaryCta);
};

document.addEventListener("DOMContentLoaded", applyBoazContent);
