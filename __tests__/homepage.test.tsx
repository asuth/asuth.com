import { describe, it, expect, vi, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import Homepage from "../pages/index";
import HomepageComponent from "../components/homepage";

// Mock window properties needed for Homepage component
const mockWindow = {
  innerWidth: 1920,
  innerHeight: 1080,
  devicePixelRatio: 2,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
};

beforeEach(() => {
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: mockWindow.innerWidth,
  });
  Object.defineProperty(window, "innerHeight", {
    writable: true,
    configurable: true,
    value: mockWindow.innerHeight,
  });
  Object.defineProperty(window, "devicePixelRatio", {
    writable: true,
    configurable: true,
    value: mockWindow.devicePixelRatio,
  });
  Object.defineProperty(document, "readyState", {
    writable: true,
    configurable: true,
    value: "complete",
  });
});

describe("Homepage", () => {
  it("should render with correct background color styles", () => {
    const { container } = render(<Homepage />);
    const styleElement = container.querySelector("style");
    const styleContent = styleElement?.textContent || "";

    expect(styleContent).toContain("--bg-color");
    expect(styleContent).toContain("--lightBlue");
    expect(styleContent).toContain("--darkLightBlue");
  });

  it("should render homepage component with image containers", () => {
    const { container } = render(
      <HomepageComponent homepageIsCurrent={true} />
    );

    // Check that animation containers are rendered
    const animationContainers = container.querySelectorAll(
      '[class*="AnimationContainer"]'
    );
    expect(animationContainers.length).toBeGreaterThan(0);
  });

  it("should render images with correct src patterns", () => {
    const { container } = render(
      <HomepageComponent homepageIsCurrent={true} />
    );

    // Wait for component to calculate sizes and render
    const images = container.querySelectorAll("img");
    expect(images.length).toBeGreaterThan(0);

    // Check that images have src attributes matching expected patterns (dog, kids, boat)
    const imageSrcs = Array.from(images).map((img) => img.getAttribute("src"));
    const hasAnimationImages = imageSrcs.some(
      (src) =>
        src &&
        (src.includes("dog-") || src.includes("kids-") || src.includes("boat-"))
    );
    expect(hasAnimationImages).toBe(true);
  });
});
