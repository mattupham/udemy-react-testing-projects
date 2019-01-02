import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr } from "../test/testUtils";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Iniitial state for setup.
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  props = {
    success: true
  };
  return shallow(<Congrats {...props} />);
};

test("renders without error", () => {});

test("renders no text when 'success' prop is false", () => {});

test("renders non-empty congrats message when success prop is true", () => {});
