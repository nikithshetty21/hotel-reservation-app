import { getByRole, render, fireEvent, screen , waitFor, within} from "@testing-library/react";
import React from "react";
import SelectBox from "../../src/Containers/SelectBox";
import userEvent from "@testing-library/user-event";

describe("Criteria", () => {
  
  it("renders Select Criteria", async () => {
    render(<SelectBox label={'labelText'}
    id={'labelTextId'}
    handleChange={() => {}}
    options= {[{
        value:'abc',
        text:'abc'
    }, {
        value:'def',
        text:'def'
    }
    ]}
    multiple={true}
    value={["abc"]}/>);
  const selectEl = await screen.getByTestId('select-dropdown');
  expect(selectEl).toBeInTheDocument();
  userEvent.click(getByRole(screen.getByTestId("select-dropdown"), "button"));
  await waitFor(() => userEvent.click(screen.getByTestId('select-label')));
  userEvent.click(screen.getByTestId('abc'))
  expect(await (screen.findByLabelText('abc'))).toBeInTheDocument();

  });
});
