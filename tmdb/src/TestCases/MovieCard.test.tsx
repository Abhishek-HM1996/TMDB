import { fireEvent, render, screen } from "@testing-library/react";
import MovieCard from "../Components/MovieCard";

const props = {
  id: 1,
  url: "example.jpg",
  rating: 8.5,
  title: "Example Movie",
  favourite: false,
  handleFavouriteClick: jest.fn(),
  handleCardClick: jest.fn(),
};

describe("MovieCard Component", () => {
  test("renders title text", () => {
    render(<MovieCard {...props} />);
    const headingElement = screen.getByText(/Example Movie/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("renders rating text", () => {
    render(<MovieCard {...props} />);
    const headingElement = screen.getByText(/8.5/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("calls the handleFavouriteClick function when the favourite icon is clicked", () => {
    const { getByTestId } = render(<MovieCard {...props} />);

    fireEvent.click(getByTestId("favourite-icon"));

    expect(props.handleFavouriteClick).toHaveBeenCalledWith(props.id);
  });

  test("calls the handleCardClick function when the card is clicked", () => {
    const { getByTestId } = render(<MovieCard {...props} />);

    fireEvent.click(getByTestId("movie-card"));

    expect(props.handleCardClick).toHaveBeenCalledWith(
      props.id,
      props.favourite
    );
  });

  test("should render the image", () => {
    render(<MovieCard {...props} />);

    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      `https://image.tmdb.org/t/p/original/${props.url}`
    );
  });
});
