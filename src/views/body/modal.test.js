import ModalPopUp from "./modal";
import Enzyme from "enzyme";

describe("Modal Popup Test suite", () => {
  it("verify close button", () => {
    const wrapper = Enzyme.shallow(<ModalPopUp />);
    expect(wrapper.find("button").exists()).toBe(true);
    expect(wrapper.find("button")).toBeDefined();
  });
});
