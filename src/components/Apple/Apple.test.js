import { render } from "@testing-library/react";
import Apple from "./Apple";

it("renders correctly", () => {
	const { queryByTestId } = render(<Apple />);
	expect(queryByTestId("appletest")).toBeTruthy();
});
