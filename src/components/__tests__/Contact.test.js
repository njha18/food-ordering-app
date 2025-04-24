import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
describe("Contact us page test cases", () => {
  // beforeAll(()=>{
  //     console.log("Before All");
  // })
  // beforeEach(()=>{
  //     console.log("Before Each");
  // })
  // afterAll(()=>{
  //     console.log("After All");
  // })
  // afterEach(()=>{
  //     console.log("After Each");
  // })
  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  test("Should load button inside Contact Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("Should load input name inside contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });
  test("Should load 2 input boxes on the contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
