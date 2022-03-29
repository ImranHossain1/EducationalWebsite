import { useEffect, useState } from "react"

const useCourses = (url) =>{
    const [courses, setCourses] = useState([]);
    const [displayCourses, setDisplayCourses] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=> {
            setCourses(data);
            setDisplayCourses(data)
        })

    },[]);
    // return necessary things
    return [courses, setCourses, displayCourses, setDisplayCourses];
}

export default useCourses;