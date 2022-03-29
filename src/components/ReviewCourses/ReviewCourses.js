import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useCourses from '../../hooks/useCourses';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './ReviewCourses.css'
const ReviewCourses = () => {
    // console.log(courses)
    const [courses, setCourses, displayCourses, setDisplatCourses] = useCourses('/crashCourse.JSON');
    const [cart, setCart] = useCart(courses);
    //console.log(cart)

    const handleRemove = courseId =>{
        const newCart = cart.filter(course => course.courseId !== courseId);
        console.log(newCart);
        setCart(newCart);
        removeFromDb(courseId);
    }
    const handlePlaceOrder =(e)=>{
        e.preventDefault();
        setCart([]);
        navigate('/enrolled');
        clearTheCart();
    }

    let navigate = useNavigate();
    return (
        <div className="d-flex flex-column-reverse flex-lg-row bd-highlight mb-3 justify-content-lg-between">
            <div className="p-2 bd-highlight ">
                <div className='container ms-md-5 mt-lg-5'>
                    <div className='row row-cols-1 g-4'>
                        {
                            cart.map(course=><ReviewItem 
                                key={course.courseId}
                                course={course}
                                handleRemove={handleRemove}
                                ></ReviewItem>)
                        }    
                        
                    </div>
                </div>
            </div>
            <div className="cart-container text-center p-5">
                <Cart cart={cart}>
                        <button className='btn btn-success' onClick={handlePlaceOrder}>Start Your Course</button>
                </Cart>
            </div>
        </div>
    );
};

export default ReviewCourses;