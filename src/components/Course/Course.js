import React from 'react';
import { Card } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {

    const {courseName, CourseImg, courseId, CoursePrice, CourseDuration } = props.course;
    return (
        <div className="col">
                <Card>
                    <Card.Img  src={CourseImg} className="card-img-top image"/>
                    <Card.Body>
                    <Card.Title>{courseName}</Card.Title>
                    <Card.Text>
                        <p> Course Price: {CoursePrice}</p>
                        <p> Course Duration: {CourseDuration}</p>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
        </div>
    );
};

export default Course;
