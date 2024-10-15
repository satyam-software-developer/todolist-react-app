import { render, screen } from "@testing-library/react"; // Import the necessary functions from React Testing Library
import App from "./App"; // Import the App component for testing

// Define a test case using the 'test' function, which takes a description of the test and a callback function
test("renders learn react link", () => {
  // Render the App component within the test environment
  render(<App />);

  // Find an element that contains the text "learn react" (case-insensitive using /learn react/i)
  const linkElement = screen.getByText(/learn react/i);

  // Assert that the element found is present in the document
  expect(linkElement).toBeInTheDocument();
});
