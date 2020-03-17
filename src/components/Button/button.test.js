import React from "react";
import { shallow } from "enzyme";
import { Button } from "./index";

describe("Button", () => {
  const buttonText = "Some button";
  const onClick = jest.fn();
  const disabled = false;

  const component = shallow(
    <Button onClick={onClick} disabled={disabled}>
      {buttonText}
    </Button>
  );

  it("button should be rendered", () => {
    expect(component.length).toEqual(1);
  });

  it("button includes text", () => {
    expect(component.text()).toEqual(buttonText);
  });

  it("button include pros onClick", () => {
    expect(component.prop("onClick")).toEqual(onClick);
  });

  it("button include pros disabled", () => {
    expect(component.prop("disabled")).toEqual(disabled);
  });
});
