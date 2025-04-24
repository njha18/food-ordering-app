import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// it("Should load Header Component with a login button", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );
//   const loginButton = screen.getByRole("button", { name: "Login" });
//   //const loginButton=screen.getByText("Login");

//   expect(loginButton).toBeInTheDocument();
// });
// it("Should load Header Component with a Cart items 0 button", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );
//   const cartItems = screen.getByText("Cart- (0 items)");
//   //const loginButton=screen.getByText("Login");

//   expect(cartItems).toBeInTheDocument();
// });
// it("Should load Header Component with a Cart item", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );
//   const cartItems = screen.getByText(/Cart/);
//   //const loginButton=screen.getByText("Login");

//   expect(cartItems).toBeInTheDocument();
// });
it("Should change Login Buton to Logout on click Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
