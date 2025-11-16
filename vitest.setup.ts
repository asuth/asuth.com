import { vi } from "vitest";
import React from "react";

// Mock Next.js router
const mockRouter = {
  pathname: "/",
  route: "/",
  query: {},
  asPath: "/",
  push: vi.fn(),
  replace: vi.fn(),
  reload: vi.fn(),
  back: vi.fn(),
  prefetch: vi.fn(),
  beforePopState: vi.fn(),
  events: {
    on: vi.fn(),
    off: vi.fn(),
    emit: vi.fn(),
  },
  isFallback: false,
  isLocaleDomain: false,
  isReady: true,
  defaultLocale: "en-US",
  domainLocales: [],
  isPreview: false,
};

vi.mock("next/router", () => ({
  useRouter: () => mockRouter,
  withRouter: (Component: any) => (props: any) => {
    return React.createElement(Component, { ...props, router: mockRouter });
  },
}));

// Mock Next.js Link component
vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: any) => {
    return React.createElement("a", { href, ...props }, children);
  },
}));

// Mock Next.js Image component
vi.mock("next/image", () => ({
  default: ({ src, alt, fill, ...props }: any) => {
    // Remove fill prop and other Next.js Image-specific props that aren't valid for <img>
    const imgProps: any = { src, alt, ...props };
    // If fill is true, we can add appropriate styling, but for snapshots we'll just remove it
    if (fill) {
      // fill makes the image fill its container, but for snapshots we don't need this
      // Just remove the fill prop
    }
    return React.createElement("img", imgProps);
  },
}));

// Mock @vercel/analytics
vi.mock("@vercel/analytics/react", () => ({
  Analytics: () => null,
}));
