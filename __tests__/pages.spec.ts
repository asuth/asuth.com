import { test, expect } from "@playwright/test";

// List of all pages to test
const pages = [
  { path: "/", title: "Andrew Sutherland", keyContent: "Andrew Sutherland" },
  { path: "/about", title: "About Andrew", keyContent: "About me" },
  { path: "/contact", title: "Contact", keyContent: "Say hello" },
  { path: "/writing", title: "Writing", keyContent: "March 2025" },
  { path: "/investments", title: "Investments", keyContent: "Investments" },
  {
    path: "/questions",
    title: "Questions I’m Pondering",
    keyContent: "Questions",
  },
  {
    path: "/great-engineer",
    title: "What makes a great engineer?",
    keyContent: "What makes a great",
  },
  {
    path: "/goodbye-quizlet",
    title: "Goodbye Quizlet",
    keyContent: "Goodbye Quizlet",
  },
  {
    path: "/building-a-demo-culture",
    title: "Giggles over mockups",
    keyContent: "Building a demo culture",
  },
  {
    path: "/how-to-not-be-late",
    title: "How to not be late",
    keyContent: "How to not be late",
  },
  {
    path: "/investment-worksheet",
    title: "How I decide on investments",
    keyContent: "principal agent",
  },
  {
    path: "/im-joining-aops",
    title: "I’m joining AoPS",
    keyContent: "I’m joining AoPS",
  },
  { path: "/paper", title: "Paper", keyContent: "Paper" },
  { path: "/memorial", title: "Memorial", keyContent: "Memorial" },
];

test.describe("Page Navigation and Loading", () => {
  for (const page of pages) {
    test(`should load ${page.path} successfully`, async ({
      page: browserPage,
    }) => {
      const response = await browserPage.goto(page.path);
      expect(response?.status()).toBe(200);
    });

    test(`${page.path} should have correct title`, async ({
      page: browserPage,
    }) => {
      await browserPage.goto(page.path);
      await expect(browserPage).toHaveTitle(new RegExp(page.title, "i"));
    });

    test(`${page.path} should contain key content`, async ({
      page: browserPage,
    }) => {
      await browserPage.goto(page.path);
      await expect(browserPage.locator("body")).toContainText(
        new RegExp(page.keyContent, "i")
      );
    });
  }
});

test.describe("Error Pages", () => {
  test("404 page should load and display error message", async ({ page }) => {
    await page.goto("/404");
    await expect(page).toHaveTitle(/404/i);
    await expect(page.locator("body")).toContainText(/404/i);
    await expect(page.locator("body")).toContainText(/Not Found/i);

    // Check for escape link
    const escapeLink = page.getByRole("link", { name: /escape/i });
    await expect(escapeLink).toBeVisible();
    await expect(escapeLink).toHaveAttribute("href", "/");
  });

  test("500 page should load and display error message", async ({ page }) => {
    await page.goto("/500");
    await expect(page.locator("body")).toContainText(/500/i);
    await expect(page.locator("body")).toContainText(/Server-side error/i);
  });

  test("non-existent page should redirect to 404", async ({ page }) => {
    const response = await page.goto("/this-page-does-not-exist");
    // Next.js will serve 404 page but status might be 200
    await expect(page.locator("body")).toContainText(/404/i);
  });
});

test.describe("Homepage", () => {
  test("should load homepage", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Andrew Sutherland/i);
  });

  test("should have meta description", async ({ page }) => {
    await page.goto("/");
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute(
      "content",
      /On the lookout for wonder/i
    );
  });
});

test.describe("About Page", () => {
  test("should display about content", async ({ page }) => {
    await page.goto("/about");
    await expect(page.locator("h1, h3")).toContainText(/About me|Hi Friend/i);
    await expect(page.locator("body")).toContainText(/Quizlet/i);
  });

  test("should have working back to home link", async ({ page }) => {
    await page.goto("/about");
    const backLink = page.getByRole("link", { name: /Back to Home/i });
    await expect(backLink).toBeVisible();
    await expect(backLink).toHaveAttribute("href", "/");

    await backLink.click();
    await expect(page).toHaveURL("/");
  });
});

test.describe("Contact Page", () => {
  test("should display contact information", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.locator("body")).toContainText(/Say hello/i);
    await expect(page.locator("body")).toContainText(/asuth@asuth.com/i);
  });

  test("should have email link", async ({ page }) => {
    await page.goto("/contact");
    const emailLink = page.getByRole("link", { name: /asuth@asuth.com/i });
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute("href", "mailto:asuth@asuth.com");
  });

  test("should have social media links", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.getByRole("link", { name: /@asuth/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /LinkedIn/i })).toBeVisible();
  });
});

test.describe("Writing Page", () => {
  test("should display writing list", async ({ page }) => {
    await page.goto("/writing");
    await expect(page.locator("body")).toContainText(/I’m joining AoPS/i);
  });

  test("should have links to articles", async ({ page }) => {
    await page.goto("/writing");
    const articleLinks = [
      page.getByRole("link", { name: /I’m joining AoPS/i }),
      page.getByRole("link", { name: /Paper/i }),
      page.getByRole("link", { name: /Building a demo culture/i }),
      page.getByRole("link", { name: /How to not be late/i }),
      page.getByRole("link", { name: /What makes a great engineer/i }),
      page.getByRole("link", { name: /Goodbye Quizlet/i }),
    ];

    for (const link of articleLinks) {
      await expect(link).toBeVisible();
    }
  });
});

test.describe("Investments Page", () => {
  test("should display investments list", async ({ page }) => {
    await page.goto("/investments");
    await expect(page.locator("body")).toContainText(/Investments/i);
    await expect(page.locator("body")).toContainText(/Investing is my way/i);
  });

  test("should have investment cards", async ({ page }) => {
    await page.goto("/investments");
    // Check for some known investments
    await expect(page.locator("body")).toContainText(/Replit/i);
    await expect(page.locator("body")).toContainText(/Vercel/i);
  });

  test("should have back to home link", async ({ page }) => {
    await page.goto("/investments");
    const backLink = page.getByRole("link", { name: /Back to Home/i });
    await expect(backLink).toBeVisible();
  });
});

test.describe("Questions Page", () => {
  test("should display questions", async ({ page }) => {
    await page.goto("/questions");
    await expect(page.locator("body")).toContainText(/Questions/i);
    await expect(page.locator("body")).toContainText(/Your Instructions/i);
  });

  test("should have contact link", async ({ page }) => {
    await page.goto("/questions");
    const contactLink = page.getByRole("link", { name: /contact me/i });
    await expect(contactLink).toBeVisible();
    await expect(contactLink).toHaveAttribute("href", "/contact");
  });
});

test.describe("Great Engineer Page", () => {
  test("should display article content", async ({ page }) => {
    await page.goto("/great-engineer");
    await expect(page.locator("body")).toContainText(
      /What makes a great engineer/i
    );
    await expect(page.locator("body")).toContainText(
      /Has learned from the consequences/i
    );
  });

  test("should have back to home link", async ({ page }) => {
    await page.goto("/great-engineer");
    const backLink = page.getByRole("link", { name: /Back to Home/i });
    await expect(backLink).toBeVisible();
  });
});

test.describe("Navigation Links", () => {
  test("back to home links should work", async ({ page }) => {
    // Test on a few pages that have back to home links
    const pagesWithBackLink = [
      "/about",
      "/great-engineer",
      "/investments",
      "/questions",
    ];

    for (const pagePath of pagesWithBackLink) {
      await page.goto(pagePath);
      const backLink = page.getByRole("link", { name: /Back to Home/i });
      if (await backLink.isVisible()) {
        await backLink.click();
        await expect(page).toHaveURL("/");
        await page.goBack();
      }
    }
  });
});

test.describe("Meta Tags", () => {
  test("pages should have meta tags", async ({ page }) => {
    const testPages = [
      { path: "/", expectedTitle: "Andrew Sutherland" },
      { path: "/about", expectedTitle: "About Andrew" },
      { path: "/contact", expectedTitle: "Contact" },
      { path: "/writing", expectedTitle: "Writing" },
    ];

    for (const testPage of testPages) {
      await page.goto(testPage.path);
      const title = await page.title();
      expect(title).toContain(testPage.expectedTitle);

      // Check for meta description
      const metaDescription = page.locator('meta[name="description"]');
      await expect(metaDescription).toHaveCount(1);
    }
  });
});

test.describe("Responsive Design", () => {
  test("pages should be responsive on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone size

    await page.goto("/");
    await expect(page.locator("body")).toBeVisible();

    await page.goto("/about");
    await expect(page.locator("body")).toBeVisible();

    await page.goto("/contact");
    await expect(page.locator("body")).toBeVisible();
  });

  test("pages should be responsive on tablet", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 }); // iPad size

    await page.goto("/");
    await expect(page.locator("body")).toBeVisible();

    await page.goto("/investments");
    await expect(page.locator("body")).toBeVisible();
  });
});

test.describe("Accessibility", () => {
  test("pages should have proper heading structure", async ({ page }) => {
    await page.goto("/about");
    const h1 = page.locator("h1");
    await expect(h1).toHaveCount(1);
  });

  test("links should have proper href attributes", async ({ page }) => {
    await page.goto("/writing");
    const links = page.locator("a[href]");
    const count = await links.count();

    for (let i = 0; i < Math.min(count, 10); i++) {
      const href = await links.nth(i).getAttribute("href");
      expect(href).toBeTruthy();
    }
  });
});
