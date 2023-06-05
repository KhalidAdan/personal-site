import { fireEvent, render } from "@testing-library/react";
import { Textarea } from "./textarea";

describe("Textarea", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(<Textarea data-testid="textarea" />);
    const textareaElement = getByTestId("textarea");
    expect(textareaElement).toBeInTheDocument();
  });

  it("applies the correct default classes", () => {
    const { getByTestId } = render(<Textarea data-testid="textarea" />);
    const textareaElement = getByTestId("textarea");
    expect(textareaElement).toHaveClass(
      "flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    );
  });

  it("applies additional classes when a className prop is provided", () => {
    const { getByTestId } = render(
      <Textarea data-testid="textarea" className="text-red-500" />
    );
    const textareaElement = getByTestId("textarea");
    expect(textareaElement).toHaveClass("text-red-500");
  });

  it("calls the onChange callback when the value changes", () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <Textarea data-testid="textarea" onChange={handleChange} />
    );
    const textareaElement = getByTestId("textarea");
    fireEvent.change(textareaElement, { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("disables the textarea when the disabled prop is true", () => {
    const { getByTestId } = render(
      <Textarea data-testid="textarea" disabled={true} />
    );
    const textareaElement = getByTestId("textarea");
    expect(textareaElement).toBeDisabled();
  });
});
