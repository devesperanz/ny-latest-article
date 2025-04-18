import { render, screen } from "@testing-library/react";
import Layout from "../components/layout";
import { BrowserRouter } from "react-router-dom";

test("renders layout header", () => {
  render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );

  expect(screen.getByText("NY Times Most Popular Article")).toBeInTheDocument();
});
