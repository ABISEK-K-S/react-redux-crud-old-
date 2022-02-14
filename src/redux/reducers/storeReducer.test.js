import storeReducer from "./storeReducer";
import {
  STORE // Only ones related to the reducer being tested
} from "./../types/storeType";
import mockData from "./../../mocks/actionMock";

describe("INITIAL_STATE", () => {
  it("check initisl redux state value", () => {
    const expectedState = { storeData: {}, userAddedStatus: false };
    expect(storeReducer(undefined, STORE)).toEqual(expectedState);
  });
});

describe("UPDATE REDUX STATE ", () => {
  it("check updated redux state value", () => {
    const action = { type: "UPDATE_STORE_INFO", data: mockData };
    const expectedState = { storeData: mockData, userAddedStatus: false };
    expect(storeReducer(undefined, action)).toEqual(expectedState);
  });
});
