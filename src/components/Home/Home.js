import React, { useEffect, useState } from 'react';
import useCourses from '../../hooks/useCourses';
import Academic from '../Academic/Academic';
import Banner from '../Banner/Banner';
import Computer from '../Computer/Computer';
import CourseCatagory from '../CourseCatagory/CourseCatagory';
import English from '../English/English';

const Home = () => {
    const [courses,setCourses]= useCourses("/courses.JSON");
    return (
        <div>
            <Banner></Banner>
            <div className='mt-5 text-center'>
                <h2>Let the journey of self-learning begin</h2>
                <p>Go to the section of your choice to study any topic on any subject</p>
                <div className='container my-4 mx-auto'>
                    <div className='row g-3'>
                        {
                            courses.map(course=><CourseCatagory
                                key={course.key}
                                course={course}
                            ></CourseCatagory>)
                        }
                    </div>
                </div>   
            </div>
            <English></English>
            <Computer></Computer>
            <Academic></Academic>
        </div>
    );
};

export default Home;