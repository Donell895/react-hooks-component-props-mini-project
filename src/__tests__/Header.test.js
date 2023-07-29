import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("renders a <header> element", () => {
  const { container } = render(<Header />);
  expect(container.querySelector("header")).toBeInTheDocument();
});


const Header = ({ name }) => {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
};

export default Header;
