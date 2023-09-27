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
        <Reservations data={ReservationData[0]} />
      </AppContext.Provider>
    );
    //screen.debug();
    expect(screen.getByText("First Name")).toBeInTheDocument();
    expect(screen.getByText("Street Name")).toBeInTheDocument();
    expect(
      screen.getByText("I confirm the information given above")
    ).toBeInTheDocument();
    const firstName = container.getByDisplayValue("IDM") as HTMLInputElement;
    fireEvent.change(firstName, { target: { value: "abcdef" } });
    expect(firstName.value).toBe("abcdef");
  });

  it("handles room size and quantity change", async () => {
    const container = render(
      <AppContext.Provider value={appState}>
        <Reservations data={ReservationData[0]} />
      </AppContext.Provider>
    );
    const roomSize = container.getByDisplayValue(3) as HTMLInputElement;
    fireEvent.change(roomSize, { target: { value: 4 } });
    expect(roomSize.value).toBe("4");
  });

  it("handles address change", async () => {
    const container = render(
      <AppContext.Provider value={appState}>
        <Reservations data={ReservationData[0]} />
      </AppContext.Provider>
    );
    const street = container.getByDisplayValue(
      "IDM Street"
    ) as HTMLInputElement;
    fireEvent.change(street, { target: { value: "New Street" } });
    expect(street.value).toBe("New Street");
    const zip = container.getByDisplayValue("123456") as HTMLInputElement;
    fireEvent.change(zip, { target: { value: "12389" } });
    expect(zip.value).toBe("12389");
  });

  it("handles switch change", async () => {
    const container = render(
      <AppContext.Provider value={appState}>
        <Reservations data={ReservationData[0]} />
      </AppContext.Provider>
    );
    const switchComponent = (container.getAllByRole("checkbox"))[0] as HTMLInputElement;
    fireEvent.change(switchComponent, { target: { checked: true } });
    expect(container.getAllByRole("checkbox")[0]).toBeChecked();
  });

  it("handles update button", async () => {
    const container = render(
      <AppContext.Provider value={appState}>
        <Reservations data={ReservationData[0]} />
      </AppContext.Provider>
    );
    const buttonComponent = container.getByTestId("update-button");
    await userEvent.click(buttonComponent);
    expect(container.getByRole('dialog')).toBeInTheDocument();
    expect(container.getByText('OK')).toBeInTheDocument();
    await userEvent.click(container.getByText('OK'));
    expect(container.queryByRole('dialog')).toBeNull();
  });

  it("handles Delete button", async () => {
    const container = render(
      <AppContext.Provider value={appState}>
        <Reservations data={ReservationData[0]} />
      </AppContext.Provider>
    );
    const buttonComponent = container.getByTestId("delete-button");
    await userEvent.click(buttonComponent);
    expect(container.getByRole('dialog')).toBeInTheDocument();
    expect(container.getByText('OK')).toBeInTheDocument();
    await userEvent.click(container.getByText('OK'));
    expect(container.queryByRole('dialog')).toBeNull();
  });

  it("test date change", async () => {
    const container = render(
      <AppContext.Provider value={appState}>
        <Reservations data={ReservationData[0]} />
      </AppContext.Provider>
    );
    const dateComponent = container.getAllByTestId("CalendarIcon")[0];
    await userEvent.click(dateComponent);
    expect(container.getByRole('dialog')).toBeInTheDocument();
    expect(container.getByText('17')).toBeInTheDocument();
    await userEvent.click(container.getByText('17')); 
    expect(container.queryByRole('dialog')).toBeNull();
    expect(container.getByDisplayValue('11/17/2021')).toBeInTheDocument();
  });
});
