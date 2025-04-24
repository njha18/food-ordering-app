import MOCK_DATA from "../mocks/mockResMenu.json";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import Cart from "../Cart";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});
it("Should load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText("Chai (5)");

  fireEvent.click(accordianHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  fireEvent.click(accordianHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  const addBtn = screen.getAllByRole("button", { name: "Add +" });
  expect(addBtn.length).toBe(5);
  fireEvent.click(addBtn[0]);
  expect(screen.getByText("Cart- (1 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(6);
  fireEvent.click(screen.getByRole("button", { name: "clear cart" }));
  expect(screen.getByText("cart is empty.Add items to the cart"));
  expect(screen.getByText("Cart- (0 items)")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(5);
});
