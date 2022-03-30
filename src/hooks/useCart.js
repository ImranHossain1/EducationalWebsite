import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (courses)=>{
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        if(courses.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            //console.log(savedCart);
            for(const courseId in savedCart){
                const addedcourse = courses.find(course => course.courseId === parseInt(courseId));
                if(addedcourse){
                    const quantity = savedCart[courseId];
                    addedcourse.quantity = quantity;
                    storedCart.push(addedcourse);
                }
            }
            setCart(storedCart); 
        }       
    },[courses])
    return [cart, setCart];
}
export default useCart;