import {useContext, useState, useEffect} from 'react';
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";
import EditForm from './EditForm';


const Employee = ({employee}) =>{

    const {dispatch} = useContext(EmployeeContext);

    const [show, setShow] = useState(false)

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        useEffect(() =>  {
            handleClose();
        }, [employee])


    return (
        <>
               
						<td>{employee.name}</td>
						<td>{employee.email}</td>
						<td>{employee.address}</td>
						<td>{employee.phone}</td>
						<td>
                        <OverlayTrigger
                                overlay={
                        <Tooltip id={`tooltip-top`}>
                                Edit
                        </Tooltip>
                    }>
                    <button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons">&#xE254;</i></button>
                        </OverlayTrigger>
                        <OverlayTrigger
                                overlay={
                        <Tooltip id={`tooltip-top`}>
                                Delete
                        </Tooltip>
                    }>
                        <button onClick={() => dispatch({type: 'remove_employee', id: employee.id})} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
                        </OverlayTrigger>

							
						</td>
					
                        <Modal show={show} onHide={handleClose}>
            <Modal.Header className="modal-header" closeButton>
                <Modal.Title>
                    Add Employee
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditForm  theEmployee={employee}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
            </Modal.Footer>
        </Modal>
                
        </>
                    
    )
    }

export default Employee;

//<button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons">&#xE254;</i></button>
//<button onClick={() => deleteEmployee(employee.id)} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">&#xE872;</i></button>