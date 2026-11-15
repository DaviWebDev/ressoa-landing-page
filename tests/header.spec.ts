import { expect, test } from "@playwright/test";

test("mobile navigation opens and closes", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menuButton = page.locator('[data-js="toggle-menu"]');
  const navMenu = page.locator("#primary-navigation");

  await expect(menuButton).toBeVisible();
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await expect(navMenu).toHaveJSProperty("inert", true);

  await menuButton.click();

  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  await expect(menuButton).toHaveAttribute(
    "aria-label",
    "Fechar menu de navegação",
  );
  await expect(navMenu).toHaveJSProperty("inert", false);
  await expect(navMenu).toHaveClass(/nav-menu--open/);

  await menuButton.click();

  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await expect(menuButton).toHaveAttribute(
    "aria-label",
    "Abrir menu de navegação",
  );
  await expect(navMenu).toHaveJSProperty("inert", true);
  await expect(navMenu).not.toHaveClass(/nav-menu--open/);
});
