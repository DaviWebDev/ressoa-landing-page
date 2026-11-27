import { expect, test } from "@playwright/test";

test("same-page navigation links target sections and scroll smoothly", async ({
  page,
}) => {
  await page.goto("/");

  const samePageLinksResolve = await page
    .locator('a[href^="#"]')
    .evaluateAll((links) =>
      links.every((link) => {
        const id = (link as HTMLAnchorElement).hash.slice(1);
        return id.length > 0 && document.getElementById(id) !== null;
      }),
    );

  expect(samePageLinksResolve).toBe(true);
  await expect(page.locator("html")).toHaveCSS("scroll-behavior", "smooth");
  await expect(page.locator("#solucoes")).toHaveCSS(
    "scroll-margin-top",
    "100px",
  );
});

test("mobile navigation opens and closes", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menuButton = page.locator('[data-js="toggle-menu"]');
  const navMenu = page.locator("#primary-navigation");

  await expect(menuButton).toBeVisible();
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await expect(navMenu).toHaveJSProperty("inert", true);

  await page.evaluate(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 300);
  });
  const scrollYBeforeOpening = await page.evaluate(() => window.scrollY);

  await menuButton.click();

  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  await expect(menuButton).toHaveAttribute(
    "aria-label",
    "Fechar menu de navegação",
  );
  await expect(navMenu).toHaveJSProperty("inert", false);
  await expect(navMenu).toHaveClass(/nav-menu--open/);

  const buttonBox = await menuButton.boundingBox();
  if (!buttonBox) {
    throw new Error("Menu button is not visible");
  }
  await page.mouse.move(
    buttonBox.x + buttonBox.width / 2,
    buttonBox.y + buttonBox.height / 2,
  );
  await page.mouse.wheel(0, 500);
  await expect
    .poll(() => page.evaluate(() => window.scrollY))
    .toBe(scrollYBeforeOpening);

  await menuButton.click();

  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await expect(menuButton).toHaveAttribute(
    "aria-label",
    "Abrir menu de navegação",
  );
  await expect(navMenu).toHaveJSProperty("inert", true);
  await expect(navMenu).not.toHaveClass(/nav-menu--open/);
});
