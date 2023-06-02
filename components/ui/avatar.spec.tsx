import { render } from "@testing-library/react";
import React from "react";
import { Avatar } from "./avatar";

describe("Avatar", () => {
  it("renders without crashing", () => {
    const ref = React.createRef<HTMLDivElement>();
    const props = {
      src: "https://example.com/avatar.png",
      alt: "Avatar",
    };
    const { getByTestId } = render(
      <Avatar data-testid="avatar" ref={ref} {...props} />
    );
    const avatarElement = getByTestId("avatar");
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveClass(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
    );
    expect(ref.current).toBe(avatarElement);
    expect(avatarElement).toHaveAttribute("src", props.src);
    expect(avatarElement).toHaveAttribute("alt", props.alt);
  });
});
