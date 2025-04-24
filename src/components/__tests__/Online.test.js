import { Provider } from "react-redux";
import Header from "../Header";
import Body from "../Body";
import appStore from "../../utils/appStore";
import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import MOCK_DATA from "../mocks/mockResListData.json";

// Mock fetch globally
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should show red dot and offline message when offline", async () => {
  // Initially render components
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Body />
        </Provider>
      </BrowserRouter>
    );
  });

  // Simulate offline event
  await act(async () => {
    global.window.dispatchEvent(new Event("offline"));
  });

  // Wait for changes to propagate
  //await waitFor(() =>{-you can either use act await or wait for
  // Assert the online status has changed
  expect(screen.getByText("OnlineStatus:🔴")).toBeInTheDocument();

  // Assert the offline message is displayed in the Body component
  expect(
    screen.getByText(
      "looks like you're offline!! please check your internet connection"
    )
  ).toBeInTheDocument();
  await act(async () => {
    global.window.dispatchEvent(new Event("online"));
  });
  expect(screen.getByText("OnlineStatus:🟢")).toBeInTheDocument();
});
