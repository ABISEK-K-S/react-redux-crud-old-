import { STORE } from "./../types/storeType";
import { toast } from "react-toastify";
import KEY_CONSTANT from "./../../constants/keyConstants";
export const updateStoreData = (data) => {
  return {
    type: STORE.UPDATE_STORE_INFO,
    data: data
  };
};

export const userAddedSuccess = (data) => {
  return {
    type: STORE.USER_ADDED_SUCCESS,
    data: data
  };
};

export const getInitialData = () => (dispatch) => {
  let response = fetch("https://gorest.co.in/public/v1/users");
  response
    .then((res) => res.json())
    .then((result) => {
      dispatch(updateStoreData(result.data));
    })
    .catch((e) => {
      toast.error("Error on API request");
      console.log("catch", e);
    });
};

export const deleteUser = (userID) => (dispatch) => {
  var requestData = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${KEY_CONSTANT.BEARER_TOKEN}`
    }
  };
  let request = fetch(
    `https://gorest.co.in/public/v1/users/${userID}`,
    requestData
  );
  request.then((result) => {
    if (result.status == 204) {
      toast.success(`User deleted successfully`);
      dispatch(getInitialData());
    } else {
      console.log(result);
      toast.error(`Problem deleting data`);
    }
  });
};

export const addUserData = (data) => (dispatch) => {
  var requestData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${KEY_CONSTANT.BEARER_TOKEN}`
    },
    body: data ? JSON.stringify(data) : ""
  };
  let request = fetch("https://gorest.co.in/public/v1/users", requestData);
  request.then((res) => {
    if (res.status == 201) {
      // 201: A resource was successfully created in response to a POST request.
      // created resource.
      toast.success("User added successfully");
      dispatch(userAddedSuccess(true));
    } else {
      toast.error("Error on API request");
    }
  });
};

export const editUserData = (data) => (dispatch) => {
  let values = {
    name: data.name,
    email: data.email,
    status: data.status
  };
  var requestData = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${KEY_CONSTANT.BEARER_TOKEN}`
    },
    body: data ? JSON.stringify(values) : ""
  };
  let request = fetch(
    `https://gorest.co.in/public/v1/users/${data.id}`,
    requestData
  );
  request.then((res) => {
    if (res.status == 200) {
      toast.success("Updated successfully");
      dispatch(userAddedSuccess(true));
    } else {
      console.log(res, "error");
      toast.error("Error on API request");
    }
  });
};
