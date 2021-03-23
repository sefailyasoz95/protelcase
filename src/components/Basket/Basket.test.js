import { render } from "@testing-library/react";
import Basket from "./Basket";

it("renders correctly", () => {
	const { queryByTestId } = render(<Basket apples={[0, 1, 2]} />);
	expect(queryByTestId("baskettest")).toBeTruthy();
});
