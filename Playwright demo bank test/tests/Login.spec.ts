import { test, expect } from "@playwright/test";

test.describe("User login to Demobank", () => {
  test("Successful login with correct credentials", async ({ page }) => {
    await page.goto("https://demo-bank.vercel.app/");
    await page.getByTestId("login-input").fill("olatoja1");
    await page.getByTestId("password-input").fill("mnjhbvgf");
    await page.getByTestId("login-button").click();









    
    await expect(page.getByTestId("user-name")).toHaveText("Jan Demobankowy");
  });

  test("Unsuccessful login with too short username", async ({ page }) => {
    await page.goto("https://demo-bank.vercel.app/");
    await page.getByTestId("login-input").fill("olat");
    await page.getByTestId("password-input").click();

    await expect(page.getByTestId("error-login-id")).toHaveText("identyfikator ma min. 8 znaków");
  });

  test("Unsuccessful login with too short password", async ({ page }) => {
    await page.goto("https://demo-bank.vercel.app/");
    await page.getByTestId("login-input").fill("olatoja");
    await page.getByTestId("password-input").fill("1234");
    await page.getByTestId("password-input").blur();

    await expect(page.getByTestId("error-login-password")).toHaveText("hasło ma min. 8 znaków");
  });
});
