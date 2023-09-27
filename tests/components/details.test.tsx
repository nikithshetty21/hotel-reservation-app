import {
    render,
    fireEvent,
    screen
  } from "@testing-library/react";
  import React from "react";
  import Reservations from "../../src/Components/Details/Reservations";
  import { ReservationData } from "../../src/Resources";
  import { AppContext } from "../../src/Context";
  import userEvent from "@testing-library/user-event";
import Details from "../../src/Components/Details";
  
  describe("Criteria", () => {
    const appState = {
      reservationData: ReservationData,
      setReservationData: jest.fn(),
      searchCriteria: "firstName",
      setSearchCriteria: jest.fn(),
      searchString: "IDM",
      setSearchString: jest.fn(),
      open: true,
      setOpen: jest.fn(),
      handleOpen: jest.fn(),
      handleClose: jest.fn(),
    };
    it("renders Select Criteria and handles name change", async () => {
      const container = render(
        <AppContext.Provider value={appState}>
          <Details data={ReservationData[0]} modalOpen={true}/>
        </AppContext.Provider>
      );
      expect(screen.getByText("First Name")).toBeInTheDocument();
      expect(screen.getByText("Street Name")).toBeInTheDocument();
      expect(
        screen.getByText("I confirm the information given above")
      ).toBeInTheDocument();
      const firstName = container.getByDisplayValue("IDM") as HTMLInputElement;
      fireEvent.change(firstName, { target: { value: "abcdef" } });
      expect(firstName.value).toBe("abcdef");
    });
  });
  