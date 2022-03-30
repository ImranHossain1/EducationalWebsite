import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';

const About = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(()=>{
        fetch('./employee.JSON')
        .then(res=>res.json())
        .then(data=> {
            setEmployees(data);
        })
    },[]);
    return (
        <div>
            <div className='text-center bg-dark text-white p-5'>
                <h2>About</h2>
                <h2><span className='text-warning'>Web</span><span className='text-info'> Education</span></h2>
                <div className='text-light'>
                    <p>We might not be a hero in real world, but our goal is to help the students who want to explore knowledge in a fun way.</p>
                    <p>We will try to make the Education Easy, Enjoyable and Effective.</p>
                </div>
            </div>
            <div className="">
                    <div className='container mx-auto mt-5'>
                        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>
                            { 
                                employees.map(employee=><Employee
                                    employee={employee}
                                    key={employee.empId}
                                ></Employee>)
                            }
                        </div>
                </div>    
            </div>
        </div>
    );
};

export default About;