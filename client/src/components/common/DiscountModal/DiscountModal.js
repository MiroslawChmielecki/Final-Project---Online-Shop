import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const DiscountModal = props => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="discount-modal">
      <Button
        outline
        color="info"
        className="discount-modal-main-button"
        onClick={toggle}
      >
        <p className="discount-modal-main-button-first">NA CAŁY ASORTYMENT</p>
        <p className="discount-modal-main-button-second">-15%</p>
        <p className="discount-modal-main-button-third">OTRZYMAJ KOD</p>
      </Button>

      <Modal isOpen={modal} toggle={toggle} className="discount-modal-modal">
        <ModalHeader className="discount-modal-header" toggle={toggle}>
          KOD PROMOCYJNY
        </ModalHeader>
        <ModalBody className="discount-modal-body">
          <p className="discount-modal-body-first">
            Skopiuj poniższy kod i kupuj taniej o 15%
          </p>
          <p className="discount-modal-body-second">PayLessFromMiro</p>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

export default DiscountModal;
