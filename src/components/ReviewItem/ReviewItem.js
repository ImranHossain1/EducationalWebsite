import React from 'react';
import { Card } from 'react-bootstrap';

const ReviewItem = (props) => {
    console.log(props)
    const {courseName, CoursePrice, quantity,courseId,CourseDuration} = props.course;
    const {handleRemove} = props;
    //console.log(props)
    return (
        <div>
            <div className="col">
                <Card className='shadow transition'>
                    <Card.Body className='text-center'>
                    <Card.Title>{courseName}</Card.Title>
                    <Card.Text>
                         Course Price: {CoursePrice}
                    </Card.Text>
                    <Card.Text>
                         Course Duration: {CourseDuration}
                    </Card.Text>
                    <Card.Text>
                         Course Quantity: {quantity}
                    </Card.Text>
                    </Card.Body>
                    <Card className='d-grid border-0 mb-3 mx-auto'>
                        <button onClick={()=>{handleRemove(courseId)}} className='btn btn-danger mx-5'>Remove Course</button>
                    </Card>
                </Card>
        </div>
        </div>
    );
};

export default ReviewItem;