import { useEffect, useState } from "react"

const useCatagory = (catagory, courses) =>{
    const [item, setItem] = useState([]);
    useEffect(()=>{
        if(courses.length){
            const addedCourse = courses.filter(course=> course.CourseCatagory === catagory);
            setItem(addedCourse);
        }
    },[courses]);
    // return necessary things
    return [item];
}

export default useCatagory;