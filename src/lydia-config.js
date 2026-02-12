(() => {
  const defaults = {
    ctaTalkUrl: "https://wa.me/5511994946644",
    ctaDemoUrl: "mailto:atendimento@evolars.com.br?subject=Demo%20Lydia",
    ctaTalkLabel: "Falar com a Lydia",
    ctaDemoLabel: "Solicitar demonstração",
  };

  window.LYDIA_CONFIG = {
    ...defaults,
    ...(window.LYDIA_CONFIG || {}),
  };

  const applyConfig = () => {
    const { ctaTalkUrl, ctaDemoUrl, ctaTalkLabel, ctaDemoLabel } = window.LYDIA_CONFIG;

    document.querySelectorAll("[data-lydia-cta='talk']").forEach((link) => {
      link.setAttribute("href", ctaTalkUrl);
      link.textContent = ctaTalkLabel;
    });

    document.querySelectorAll("[data-lydia-cta='demo']").forEach((link) => {
      link.setAttribute("href", ctaDemoUrl);
      link.textContent = ctaDemoLabel;
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyConfig);
  } else {
    applyConfig();
  }
})();
