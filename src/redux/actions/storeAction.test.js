import configureStore from "redux-mock-store";
import * as selectActions from "./storeAction";
import mockData from "./../../mocks/actionMock";

const mockStore = configureStore();
const store = mockStore();
describe("select_actions", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });
  it("User added success", () => {
    const expectedActions = [
      {
        data: true,
        type: "USER_ADDED_SUCCESS"
      }
    ];
    store.dispatch(selectActions.userAddedSuccess(true));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("Update store data", () => {
    const expectedActions = [
      {
        data: mockData,
        type: "UPDATE_STORE_INFO"
      }
    ];
    store.dispatch(selectActions.updateStoreData(mockData));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
