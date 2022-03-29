import React from 'react';
import "./CourseCatagory.css";
const CourseCatagory = (props) => {
    //console.log(props);
    const {courseTitle, courseIcon} = props.course;
    
    return (       
            <div className='col-lg-4 col-sm-12 col-md-6'>
                <button className='d-flex align-items-center  course-catagory rounded p-3 mx-5 btn btn-success' >
                    <img className='mx-2' src={courseIcon} alt="" />
                    <h2>{courseTitle}</h2>
                </button>
            </div>
    );
};

export default CourseCatagory;
