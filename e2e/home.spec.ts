import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should load successfully", async ({ page }) => {
    await page.goto("/");

    // Verify page title
    await expect(page).toHaveTitle(/Create Next App/);
  });

  test("should display main heading", async ({ page }) => {
    await page.goto("/");

    // Check for the main heading
    const heading = page.getByRole("heading", {
      name: /to get started, edit the page\.tsx file/i,
    });
    await expect(heading).toBeVisible();
  });

  test("should have working navigation links", async ({ page }) => {
    await page.goto("/");

    // Verify Documentation link
    const docLink = page.getByRole("link", { name: /documentation/i });
    await expect(docLink).toBeVisible();
    await expect(docLink).toHaveAttribute("href");
    await expect(docLink).toHaveAttribute("target", "_blank");

    // Verify Deploy Now link
    const deployLink = page.getByRole("link", { name: /deploy now/i });
    await expect(deployLink).toBeVisible();
    await expect(deployLink).toHaveAttribute("href");
  });
});
