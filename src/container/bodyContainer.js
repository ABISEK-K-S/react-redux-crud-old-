import React from "react";
import BodySection from "../views/body/bodyComponent";
import {
  getInitialData,
  deleteUser,
  userAddedSuccess,
  editUserData,
  addUserData
} from "../redux/actions/storeAction";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    storeData: state.storeReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInitialData: () => dispatch(getInitialData()),
    deleteUser: (userID) => dispatch(deleteUser(userID)),
    userAddedSuccess: (data) => dispatch(userAddedSuccess(data)),
    addUserData: (data) => dispatch(addUserData(data)),
    editUserData: (data) => dispatch(editUserData(data))
  };
};

class BodyContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <BodySection {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);
