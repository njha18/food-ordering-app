import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import { render, screen } from "@testing-library/react";
const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
import { withPromotedLabel } from "../RestaurantCard";
import "@testing-library/jest-dom";
it("Should render RestaurantCard component with Props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Kalia's Kitchen");
  expect(name).toBeInTheDocument();
});
it("Should render RestaurantCard component with Prompted label", () => {
  //const testProps = { resData: MOCK_DATA };
  render(<RestaurantCardPromoted resData={MOCK_DATA} />);
  //  render(<RestaurantCardPromoted {...testProps}/>);

  const subheader = screen.getByText("₹125 OFFABOVE ₹249");
  expect(subheader).toBeInTheDocument();
});
