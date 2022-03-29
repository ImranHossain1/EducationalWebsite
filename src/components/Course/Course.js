import React from 'react';
import { Card } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {

    const {courseName, CourseImg, courseId, CoursePrice, CourseDuration } = props.course;
    return (
        <div className="col ">
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
                        <button onClick={()=> props.handleAddToCart(props.course)} className='btn btn-success mx-5'>Enroll Course</button>
                    </Card>
                </Card>
        </div>
    );
};

export default Course;
