import React from 'react';
import { Card } from 'react-bootstrap';

const Employee = (props) => {
    const {empName, empImg, empRole} = props.employee;
    return (
        <div className="col ">
                <Card className='border-0'>
                    <Card.Img  src={empImg} className="card-img-top image px-5 py-4 rounded-circle"/>
                    <Card.Body className='text-center'>
                    <Card.Title>{empName}</Card.Title>
                    <Card.Text>
                         {empRole}
                    </Card.Text>

                    </Card.Body>
                </Card>
        </div>
    );
};

export default Employee;