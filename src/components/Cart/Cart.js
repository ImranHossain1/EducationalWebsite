import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    //console.log(props)
    let total = 0;
    let totalQuantity = 0
    for (const course of cart){
        if(!course.quantity){
            course.quantity = 1;
        }
        total =total + course.CoursePrice* course.quantity;
        totalQuantity = totalQuantity + course.quantity;
    }

    return (
        <div>
            <h3>Your Enrolled courses</h3>
            <h5>Selected Course: {totalQuantity}</h5>
            <p>Total Course Fee: {total}</p>
            {props.children}
        </div>
    );
};

export default Cart;