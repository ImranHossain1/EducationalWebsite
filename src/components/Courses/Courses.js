import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
// import { CardGroup, Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const [courses, setCourses, displayCourses, setDisplatCourses] = useCourses('/crashCourse.JSON');
    const [cart, setCart] = useCart(courses);

    const handleAddToCart = (course) =>{
        const exists= cart.find(pd=>pd.courseId === course.courseId);
        let newCart =[];
        if(exists){
            const rest = cart.filter(pd=>pd.courseId !== course.courseId);
            exists.quantity = exists.quantity+1;
            newCart = [...rest, course];
        }
        else{
            course.quantity = 1;
            newCart = [...cart, course];
        }
        setCart(newCart);
        //save to local storage
        addToDb(course.courseId);
    }
    const handleSearch = (event)=>{
        const searchText = event.target.value;
        const matchedCourses = courses.filter(course => course.courseName.toLowerCase().includes(searchText.toLowerCase()));
        setDisplatCourses(matchedCourses);
    }

    return (
        <div>
            <div className="search-container p-3">
                <input type="text" className='p-2'
                placeholder='Search Product' 
                onChange={handleSearch}/>
            </div>
            <div className="d-flex flex-column-reverse flex-lg-row bd-highlight mb-3 justify-content-lg-between">
                <div className="p-2 bd-highlight ">
                    <div className='container ms-md-5 mt-lg-5'>
                        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                            {
                                displayCourses.map(course=><Course 
                                    key={course.courseId}
                                    course={course}
                                    handleAddToCart = {handleAddToCart}
                                    ></Course>)
                            }    
                            
                        </div>
                    </div>
                </div>
                <div className="cart-container text-center p-5">
                    <Cart cart={cart}>
                    <Link to="/review">
                            <button className='btn btn-success'>Review Your Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Courses;
