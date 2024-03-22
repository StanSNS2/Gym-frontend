import React from 'react';
import {Modal} from 'react-bootstrap';
import "./LoginModal.css"
import {FaTimes} from "react-icons/fa";

function LoginModal({show, handleClose}) {
    return (
        <Modal show={show} onHide={handleClose} className="loginModal" centered="true" data-bs-theme="dark">
            <Modal.Header >
                <Modal.Title>Login</Modal.Title>

                <FaTimes className="loginModalClose" onClick={handleClose}/>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <label>
                        Username: <input type="text"/>
                    </label>
                    <label>
                        Password:
                        <input type="password"/>
                    </label>
                    <button type="submit">Login</button>
                </form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    );
}

export default LoginModal;
