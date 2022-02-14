import React, { Component } from "react";
import { Formik } from "formik";

class FormData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialData: {
        name: props.alterData?.name ? props.alterData.name : "",
        email: props.alterData?.email ? props.alterData.email : "",
        gender: props.alterData?.gender ? props.alterData.gender : "",
        status: props.alterData?.status ? props.alterData.status : "",
        id: props.alterData?.id ? props.alterData.id : ""
      }
    };
  }

  componentWillUnmount() {
    //component will unmount for clearing the form data
    this.props.setAlterData({});
  }

  render() {
    let source = this.props.alterData?.source
      ? this.props.alterData.source
      : " ";

    return (
      <div className="container">
        <h5 className="text-center custom-bg">User Details</h5>
        <Formik
          initialValues={this.state.initialData}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Name is Required";
            }
            if (!values.gender) {
              errors.gender = "Gender is Required";
            }
            if (!values.status) {
              errors.status = "Status is Required";
            }
            if (!values.email) {
              errors.email = "Email Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              source == "edit_form"
                ? this.props.editUserData(values)
                : this.props.addUserData(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            touched
          }) => (
            <form onSubmit={handleSubmit} className="text-center">
              <div className="row">
                <div className="col col-12  font-weight-bold"> Name</div>
                <div className="col">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </div>
              </div>
              <div className="text-danger">
                {errors.name && touched.name && errors.name}
              </div>
              <div className="row">
                <div className="col col-12  font-weight-bold">Gender</div>
                <div className="col">
                  <input
                    type="text"
                    name="gender"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.gender}
                  />
                </div>
              </div>
              <div className="text-danger">
                {errors.gender && touched.gender && errors.gender}
              </div>
              <div className="row">
                <div className="col col-12 font-weight-bold">Email</div>
                <div className="col">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
              </div>
              <div className="text-danger">
                {errors.email && touched.email && errors.email}
              </div>
              <div className="row">
                <div className="col col-12  font-weight-bold">Status</div>
                <div className="col">
                  <input
                    type="text"
                    name="status"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.status}
                  />
                </div>
              </div>
              <div className="text-danger">
                {errors.status && touched.status && errors.status}
              </div>

              <div className="row">
                <div>
                  <input
                    type="submit"
                    className="btn btn-primary row mt-2 mb-2"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default FormData;
