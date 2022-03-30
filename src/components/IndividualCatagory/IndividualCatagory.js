import React from 'react';
import { Card } from 'react-bootstrap';

const IndividualCatagory = (props) => {
    //console.log(props.catagory);
    const {courseName, CoursePrice, CourseDuration, CourseImg} =props.catagory;

    return (
        <div className="col">
                <Card className='shadow'>
                    <Card.Img  src={CourseImg} className="card-img-top image"/>
                    <Card.Body className='text-center'>
                    <Card.Title>{courseName}</Card.Title>
                    <Card.Text>
                         Course Price: {CoursePrice}
                    </Card.Text>
                    <Card.Text>
                         Course Duration: {CourseDuration}
                    </Card.Text>
                    </Card.Body>
                    <Card className='d-grid border-0 mb-3'>
                        <button onClick={()=> props.handleAddToCart(props.catagory)} className='btn btn-success mx-5'>Enroll Course</button>
                    </Card>
                </Card>
        </div>
    );
};

export default IndividualCatagory;