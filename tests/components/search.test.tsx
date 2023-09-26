import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import Search from "../../src/Components/Search";

describe("Search", () => {
  render(<Search />);
  it("renders Search page", () => {
    expect(screen.getByRole("addnewbutton")).toBeInTheDocument();
    expect(screen.getByRole("searchbutton")).toBeInTheDocument();
  });
});
