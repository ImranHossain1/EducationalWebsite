import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useCatagory from '../../hooks/useCatagory';
import useCourses from '../../hooks/useCourses';
import { addToDb } from '../../utilities/fakedb';
import IndividualCatagory from '../IndividualCatagory/IndividualCatagory';

const Computer = () => {
    const [courses,setCourses]= useCourses('/crashCourse.JSON')
    const [computer] = useCatagory('Computer', courses);
    const [cart, setCart]=useCart(courses);
    let navigate = useNavigate();
    const handleAddToCart = (catagory) =>{
        console.log(cart)
        const exists= cart.find(pd=>pd.key === catagory.courseId);
        let newCart =[];
        if(exists){
            const rest = cart.filter(pd=>pd.key !== catagory.courseId);
            exists.quantity = exists.quantity+1;
            newCart = [...rest, catagory];
        }
        else{
            catagory.quantity = 1;
            newCart = [...cart, catagory];
        }
        setCart(newCart);
        addToDb(catagory.courseId);
        navigate('/review');
    }
    return (
        <div className="bd-highlight container mx-auto text-center mt-5">
            <h2>Improve Your Computer Skills</h2>
            <div className='mt-5'>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 '>
                    {
                    computer.map(e => <IndividualCatagory
                        catagory = {e}
                        key ={e.courseId}
                        handleAddToCart = {handleAddToCart}
                    ></IndividualCatagory>)
                    }   
                </div>
            </div>
        </div>
    );
};

export default Computer;