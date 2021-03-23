import { render } from "@testing-library/react";
import Tree from "./Tree";

it("renders correctly", () => {
	const { queryByTestId } = render(<Tree shaking='img' />);
	expect(queryByTestId("treetest")).toBeTruthy();
});
