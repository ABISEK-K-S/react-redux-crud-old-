import React from "react";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row mb-4 mt-4">
        <div className="col col-md-10"></div>
        <div
          className="col col-md-2 btn orange-button"
          id="add-user"
          onClick={() => this.props.updatePopUp(true)}
        >
          Add user
        </div>
      </div>
    );
  }
}

export default AddUser;
