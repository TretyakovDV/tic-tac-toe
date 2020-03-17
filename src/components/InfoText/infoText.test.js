import React from "react";
import { shallow } from "enzyme";
import { InfoText } from "./index";

describe("InfoText", () => {
  const text = "Some text";
  const value = 5;

  const component = shallow(<InfoText value={value} text={text} />);

  it("info-text should be rendered", () => {
    expect(component.length).toEqual(1);
  });

  it("info-text should be include prop text", () => {
    expect(component.find(".text").text()).toEqual(text.toString());
  });

  it("info-text should be include prop value", () => {
    expect(component.find(".value").text()).toEqual(value.toString());
  });
});
