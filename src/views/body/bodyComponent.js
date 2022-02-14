import React, { useEffect, useState } from "react";
import ModalPopUp from "./modal";
import AddUser from "./addUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/fontawesome-free-solid";

function BodySection(props) {
  const [users, setUsers] = useState({});
  const [popup, updatePopUp] = useState(false);
  const [alterData, setAlterData] = useState({});

  useEffect(() => {
    props.getInitialData();
  }, []);

  useEffect(() => {
    props.userAddedSuccess(false);
    updatePopUp(false);
  }, [props.storeData.userAddedStatus]);

  useEffect(() => {
    setUsers(props.storeData.storeData);
  }, [props.storeData.storeData]);

  const editForm = (data) => {
    let inputs = {
      name: data.name,
      email: data.email,
      gender: data.gender,
      status: data.status,
      id: data.id,
      source: "edit_form"
    };
    setAlterData(inputs);
    updatePopUp(true);
  };
  const userList = () => {
    return (
      users.length > 0 && (
        <div class="p-2 mb-4">
          <div class="row text-color font-weight-bold">
            <div class="col col-md-1 ">ID</div>
            <div class="col col-md-2 ">Name</div>
            <div class="col col-md-4">E-mail</div>
            <div class="col col-md-1">Gender</div>
            <div class="col col-md-2 ">Status</div>
            <div class="col col-md-1">Edit</div>
            <div class="col col-md-1">Delete</div>
          </div>

          {users.map((data) => {
            return (
              <div class="row on-hover">
                <div class="col col-md-1 border-bottom">{data.id}</div>
                <div class="col col-md-2 border-bottom">{data.name}</div>
                <div class="col col-md-4  border-bottom">{data.email}</div>
                <div class="col col-md-1 border-bottom">{data.gender}</div>
                <div class="col col-md-2 border-bottom">{data.status}</div>
                <div
                  class="col col-md-1 border-bottom cursor-pointer "
                  onClick={() => editForm(data)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </div>
                <div
                  class="col col-md-1 border-bottom text-danger cursor-pointer"
                  onClick={() => props.deleteUser(data.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>
            );
          })}
        </div>
      )
    );
  };

  const searchForm = () => {
    return (
      <>
        <div class="container welcome-container">
          <div class="welcome">Welcome Chethan</div>
          <h4 class="search">Search Plan</h4>
        </div>
        <div class="container">
          <div class="row">
            <form class="row g-3">
              <div class="col-md-3">
                <label for="inputEmail4" class="form-label">
                  Plan Code
                </label>
                <select
                  class="form-select select"
                  aria-label="Disabled select example"
                >
                  <option selected>-- select--</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="col-md-3">
                <label for="inputPassword4" class="form-label">
                  Plan Name
                </label>
                <select
                  class="form-select select"
                  aria-label="Disabled select example"
                >
                  <option selected>-- select--</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="col-md-3">
                <label for="inputPassword4" class="form-label">
                  Client Name
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                ></input>
              </div>
              <div class="col-md-3">
                <label for="inputPassword4" class="form-label">
                  Program Name
                </label>
                <select
                  class="form-select select"
                  aria-label="Disabled select example"
                >
                  <option selected>-- select--</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="col-md-3 padding-top">
                <label for="inputPassword4" class="form-label">
                  Record
                </label>
                <select class="form-select select">
                  <option selected>-- select--</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="col-md-3 padding-top">
                <label for="inputPassword4" class="form-label">
                  Status
                </label>
                <select class="form-select select">
                  <option selected>-- select--</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="col-12 button-right">
                <a
                  class="btn btn-primary orange-button mr-2"
                  onClick={() => {
                    // searchRequest();
                  }}
                >
                  Search
                </a>
                <button type="submit" class="btn btn-primary orange-button">
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };

  const handleOk = () => {
    updatePopUp(false);
  };
  return (
    <div className="container">
      {popup && (
        <ModalPopUp
          open={popup}
          handleOk={handleOk}
          alterData={alterData}
          setAlterData={setAlterData}
          {...props}
        />
      )}
      <AddUser updatePopUp={updatePopUp} />
      {userList()}
    </div>
  );
}

export default BodySection;
