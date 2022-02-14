import FormData from "./form";
import { mount, shallow } from "enzyme";
import storeData from "./../../mocks/MockData";

describe("Form data", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FormData storeData={storeData} />);
  });
  it("Form values", () => {
    // console.log(wrapper.debug());
    expect(wrapper.find("h5").text()).toBe("User Details");
  });
});
