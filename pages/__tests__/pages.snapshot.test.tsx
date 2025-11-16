import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import "../../styles/globals.css";

// Dynamically import all page files
// @ts-expect-error - import.meta.glob is a Vite feature
const pageModules = import.meta.glob("../**/*.{tsx,jsx}", {
  eager: true,
  import: "default",
});

// Filter out non-page files
const pageFiles = Object.entries(pageModules)
  .filter(([path]) => {
    // Exclude test files, _app, api routes, and files in subdirectories (except root pages)
    const fileName = path.split("/").pop() || "";
    const isInSubdirectory = path.split("/").length > 2; // More than '../filename'

    return (
      !path.includes("__tests__") &&
      !path.includes("_app") &&
      !path.includes("/api/") &&
      !isInSubdirectory &&
      (fileName.endsWith(".tsx") || fileName.endsWith(".jsx"))
    );
  })
  .map(([path, module]) => {
    // Extract page name from path
    const fileName =
      path
        .split("/")
        .pop()
        ?.replace(/\.(tsx|jsx)$/, "") || "";
    const pageName = fileName === "index" ? "index" : fileName;

    return {
      path,
      name: pageName,
      component: module as React.ComponentType<any>,
    };
  });

describe("Page Snapshots", () => {
  // Dynamically generate tests for each page
  pageFiles.forEach(({ name, component: PageComponent }) => {
    it(`should match snapshot for ${name} page`, () => {
      const { container } = render(<PageComponent />);
      expect(container).toMatchSnapshot();
    });
  });
});
