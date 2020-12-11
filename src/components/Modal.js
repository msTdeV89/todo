import React from "react";
import Button from "./Button";
import { connect } from "react-redux";
import { toggleModal } from "../redux/actions/globalActions";
import { clearList } from "../redux/actions/todoActions";
import { useSelector } from "react-redux";

const Modal = ({ toggleModal, clearList }) => {
  const modalActive = useSelector((state) => state.globalReducer.modalActive);

  return (
    <div className={modalActive ? "modal-container show" : "modal-container"}>
      <div className='modal'>
        <p>Are you sure?</p>
        <div className='modal-btns'>
          <Button
            text='yes'
            width='90px'
            func={() => {
              toggleModal();
              clearList();
            }}
          />
          <Button text='no' width='90px' func={toggleModal} />
        </div>
      </div>
    </div>
  );
};

export default connect(null, { toggleModal, clearList })(Modal);

//
