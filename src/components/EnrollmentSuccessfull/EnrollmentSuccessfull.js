import React from 'react';
import img from '../../images/giphy.gif';
const EnrollmentSuccessfull = () => {
    return (
        <div>
            <div className='m-5 text-center'>
                <h2>Enrollment Successfull</h2>
            </div>
                <div className='text-center'>
                    <img src={img} alt="" className='img-fluid'/>
                </div>
        </div>
    );
};

export default EnrollmentSuccessfull;