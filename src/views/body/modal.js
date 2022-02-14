import React from "react";
import { Modal } from "react-bootstrap";
import FormData from "./form";
export default function ModalPopUp(props) {
  return (
    <Modal
      show={props.open}
      onHide={() => {
        props.handleOk();
      }}
      size="lg"
      aria-labelledby=" contained-modal-title-vcenter"
      centered
      className="modal-dailog-width "
    >
      <div className="modal-header border-0">
        <button
          type="button"
          className="close p-0"
          data-dismiss="modal"
          aria-label="Close"
          onClick={() => props.handleOk()}
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <FormData {...props} />
    </Modal>
  );
}
