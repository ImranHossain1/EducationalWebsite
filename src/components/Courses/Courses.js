import React, { useEffect, useState } from 'react';
import { CardGroup, Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const [courses,setCourses]= useState([]);
    useEffect(()=>{
        fetch('/crashCourse.JSON')
        .then(res=>res.json())
        .then(data=> setCourses(data))
    },[])
    //const [courses, setCourses] = useCourses('/crashCourse.JSON');

    return (
        <div class="d-flex flex-row bd-highlight mb-3 justify-content-between">
            <div class="p-2 bd-highlight">
                <div className='container '>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                        {
                            courses.map(course=><Course 
                                key={course.courseId}
                                course={course}
                                ></Course>)
                        }    
                        
                    </div>
                </div>
            </div>
            <div class="p-2 bd-highlight">Flex item 2</div>
        </div>
    );
};

export default Courses;

{/*

<div className='container'>
                        <div className='row'>
                            {
                                
                            }
                        </div>
                    </div>
    courses.map(course=><Course 
        key={course.courseId}
        course={course}
        ></Course>)
        {
                            courses.map(course=><Course 
                                key={course.courseId}
                                course={course}
                                ></Course>)
                        }
    */}
