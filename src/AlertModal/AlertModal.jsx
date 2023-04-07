import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

// Create toast component 
// https://www.upbeatcode.com/react/react-naming-conventions/
// https://react-bootstrap.github.io/components/toasts/

export default function AlertModal(message, variant, show = false) {
    const [showModal, setShowModal] = useState(show);
    const handleClose = () => setShowModal(!showModal);
    console.log('Modal message ... ');


    return (
        <Modal 
            show={show}
            onHide={handleClose}
            // backdrop="static"
            // keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {message}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Ok
                </Button>
            </Modal.Footer>
        </Modal>
    );
}