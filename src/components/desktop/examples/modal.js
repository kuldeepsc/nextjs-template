/*
* In this example, the Modal component is a modal that is rendered using the createPortal function from react-dom. The Modal component takes a boolean prop isOpen that determines whether the modal is visible, and an onClose prop that is a function to close the modal. The MyApp component has a state variable isModalOpen that is used to control the visibility of the modal, and two functions handleOpenModal and handleCloseModal that are used to open and close the modal.
*
* */
import {useState} from "react";
import { createPortal } from 'react-dom';

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return createPortal(
        <div>
            <div>{children}</div>
            <button onClick={onClose}>Close</button>
        </div>,
        document.body
    );
}

function MyApp() {
    const [isModalOpen, setModalOpen] = useState(false);

    function handleOpenModal() {
        setModalOpen(true);
    }

    function handleCloseModal() {
        setModalOpen(false);
    }

    return (
        <div>
            <button onClick={handleOpenModal}>Open Modal</button>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <h1>Hello World!</h1>
            </Modal>
        </div>
    );
}

export default MyApp;
