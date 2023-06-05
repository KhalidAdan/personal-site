import { render } from "@testing-library/react";
import BlogBadge from "./BlogBadge";

describe("BlogBadge", () => {
  it("renders 'Unreleased' badge when hasBeenReleased is false", () => {
    const { getByText } = render(
      <BlogBadge isNew={false} hasBeenReleased={false} />
    );
    expect(getByText("Unreleased")).toBeInTheDocument();
  });

  it("renders 'New' badge when isNew is true", () => {
    const { getByText } = render(
      <BlogBadge isNew={true} hasBeenReleased={true} />
    );
    expect(getByText("New")).toBeInTheDocument();
  });

  it("does not render a badge when isNew is false and hasBeenReleased is true", () => {
    const { container } = render(
      <BlogBadge isNew={false} hasBeenReleased={true} />
    );
    expect(container.firstChild).toBeNull();
  });
});
