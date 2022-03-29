import { useEffect, useState } from "react"

const useCourses = (url) =>{
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=> setCourses(data))

    },[]);
    // return necessary things
    return [courses, setCourses];
}

export default useCourses;