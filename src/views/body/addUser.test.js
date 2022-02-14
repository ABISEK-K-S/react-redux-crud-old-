import AddUser from "./addUser";
import Enzyme from "enzyme";

describe("Add User Test suite", () => {
  it("verify add user button", () => {
    const wrapper = Enzyme.shallow(<AddUser />);
    expect(wrapper.find("#add-user").text()).toBe("Add user");
  });
});
