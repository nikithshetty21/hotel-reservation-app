import { render, fireEvent, screen, getByRole } from "@testing-library/react";
import React from "react";
import Search from "../../src/Components/Search";
import { ReservationData } from "../../src/Resources";
import { AppContext } from "../../src/Context";
import userEvent from "@testing-library/user-event";
describe("Search", () => {
  const appState = {
    reservationData: ReservationData,
    setReservationData: jest.fn(),
    searchCriteria: "",
    setSearchCriteria: jest.fn(),
    searchString: "",
    setSearchString: jest.fn(),
    open: false,
    setOpen: jest.fn(),
    handleOpen: jest.fn(),
    handleClose: jest.fn(),
  };

  it("renders Search page", () => {
    render(<Search />);
    expect(screen.getByRole("addnewbutton")).toBeInTheDocument();
    expect(screen.getByRole("searchbutton")).toBeInTheDocument();
  });

  it("renders Search page", async () => {
    render(<AppContext.Provider value={appState}><Search /></AppContext.Provider>);
    expect(screen.getByRole("addnewbutton")).toBeInTheDocument();
    expect(screen.getByRole("searchbutton")).toBeInTheDocument();
    await userEvent.click(getByRole(screen.getByTestId("select-dropdown"), "button"));
    expect(screen.getByTestId("firstName")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId('firstName'), { target: { value: 'firstName' } })
    expect(screen.getByText("First Name")).toBeInTheDocument();
    expect(screen.getByTestId("search-box")).toBeInTheDocument();
    const searchBox = (screen.getAllByLabelText("Search..."))[0] as HTMLInputElement;
    fireEvent.change(searchBox, { target: { value: "IDM" } });
    expect(searchBox.value).toBe("IDM");
    expect(screen.getByDisplayValue("IDM")).toBeInTheDocument();
    expect(screen.getByTestId("searchbutton")).toBeInTheDocument();
    const searchButton = screen.getByTestId("searchbutton") as HTMLInputElement;
    fireEvent.click(searchButton);
  });
});
