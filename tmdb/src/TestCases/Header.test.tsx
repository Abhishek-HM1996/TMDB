import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

describe("Header Component", () => {
  window.history.pushState({}, "Test page", "/home");
  test("app title and navigation on click", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Header />} />
        </Routes>
      </BrowserRouter>
    );
    const handleNavigation = jest.fn();
    fireEvent.click(getByTestId("app-logo"));

    expect(handleNavigation);
    expect(screen.getByText("TMDB")).toBeInTheDocument();
  });

  test("render favourite text in header and navigation on click", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Header />} />
        </Routes>
      </BrowserRouter>
    );
    const handleNavigation = jest.fn();
    fireEvent.click(getByTestId("favourite"));
    expect(handleNavigation);
  });
});
