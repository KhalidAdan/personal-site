import { render, waitFor } from "@testing-library/react";
import { AnimatePresence } from "framer-motion";
import { AnimatedSection, Section } from "./section";

describe("Section", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(<Section data-testid="section" />);
    const sectionElement = getByTestId("section");
    expect(sectionElement).toBeInTheDocument();
  });

  it("applies the correct default classes", () => {
    const { getByTestId } = render(<Section data-testid="section" />);
    const sectionElement = getByTestId("section");
    expect(sectionElement).toHaveClass("flex flex-col mt-12");
  });

  it("applies additional classes when a className prop is provided", () => {
    const { getByTestId } = render(
      <Section data-testid="section" className="text-red-500" />
    );
    const sectionElement = getByTestId("section");
    expect(sectionElement).toHaveClass("text-red-500");
  });
});

describe("AnimatedSection", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(
      <AnimatePresence>
        <AnimatedSection data-testid="animated-section" />
      </AnimatePresence>
    );
    const animatedSectionElement = getByTestId("animated-section");
    expect(animatedSectionElement).toBeInTheDocument();
  });

  it("applies the correct default classes", () => {
    const { getByTestId } = render(
      <AnimatePresence>
        <AnimatedSection data-testid="animated-section" />
      </AnimatePresence>
    );
    const animatedSectionElement = getByTestId("animated-section");
    expect(animatedSectionElement).toHaveClass("flex flex-col mt-12");
  });

  it("applies additional classes when a className prop is provided", () => {
    const { getByTestId } = render(
      <AnimatePresence>
        <AnimatedSection
          data-testid="animated-section"
          className="text-red-500"
        />
      </AnimatePresence>
    );
    const animatedSectionElement = getByTestId("animated-section");
    expect(animatedSectionElement).toHaveClass("text-red-500");
  });

  it("applies the correct styles after animating", async () => {
    const animation = {
      hidden: { opacity: 0.0001 },
      visible: { opacity: 1 },
    };
    const component = (
      <AnimatePresence>
        <AnimatedSection
          data-testid="animated-section"
          variants={animation}
          initial="hidden"
          animate="visible"
        />
      </AnimatePresence>
    );
    const { getByTestId } = render(component);
    const animatedSectionElement = getByTestId("animated-section");
    expect(animatedSectionElement).toHaveStyle("opacity: 0");

    await waitFor(() => {
      expect(animatedSectionElement).toHaveStyle("opacity: 1");
    });
  });
});
