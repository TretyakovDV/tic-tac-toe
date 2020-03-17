import React from "react";
import { shallow } from "enzyme";
import { Cell } from "./index";

describe("Cell", () => {
  const player = 1;
  const onClick = jest.fn();

  const component = shallow(<Cell player={player} onClick={onClick} />);

  const expectedText = "X";

  it("cell should be rendered", () => {
    expect(component.length).toEqual(1);
  });

  it("button includes text", () => {
    expect(component.text()).toEqual(expectedText);
  });

  it("cell include pros onClick", () => {
    expect(component.prop("onClick")).toEqual(onClick);
  });
});
