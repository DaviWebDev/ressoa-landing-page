const toggleMenu = document.querySelector<HTMLButtonElement>(
  '[data-js="toggle-menu"]',
);
const navMenu = document.querySelector<HTMLElement>('[data-js="nav-menu"]');
const contactLink = document.querySelector<HTMLAnchorElement>(
  '[data-js="contact-link"]',
);
const intermediaryMedia = window.matchMedia("(width >= 52.125rem)");
const desktopMedia = window.matchMedia("(width >= 64rem)");

if (toggleMenu && navMenu && contactLink) {
  const setMenuState = (isOpen: boolean) => {
    toggleMenu.setAttribute("aria-expanded", String(isOpen));
    toggleMenu.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação",
    );

    navMenu.inert = !isOpen;
    contactLink.inert = isOpen;
    toggleMenu.dataset.open = String(isOpen);
    navMenu.classList.toggle("nav-menu--open", isOpen);
    contactLink?.classList.toggle("isHidden", isOpen);
    document.body.classList.toggle("no-scroll", isOpen);
  };

  toggleMenu.addEventListener("click", () => {
    const isOpen = toggleMenu.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  document.addEventListener("click", (e) => {
    const target = e?.target as Node;
    const clickedInsideMenu = navMenu.contains(target);
    const clickedToggleMenu = toggleMenu.contains(target);

    if (!clickedInsideMenu && !clickedToggleMenu) {
      setMenuState(false);
    }
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      toggleMenu.getAttribute("aria-expanded") === "true"
    ) {
      setMenuState(false);
      toggleMenu.focus();
    }
  });

  intermediaryMedia.addEventListener("change", () => setMenuState(false));
  desktopMedia.addEventListener("change", () => setMenuState(false));
}
