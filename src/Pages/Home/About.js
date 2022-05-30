import React from 'react';
import about from '../../assets/img/about.jpg'
const About = () => {
    return (
        <section 
        className='flex justify-center items-center bg-gray-900 mb-12'>
            <div className='flex-1 hidden lg:block'>
                <img className='opacity-30 w-11/12' src={about} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className=' text-xl text-primary font-bold'>About Us</h3>
                <h2 className='opacity-40 text-3xl text-white py-5'>Why we are</h2>
                <p className='opacity-40 text-white pb-5'>We are provide many tools daily uses. You can get solid tools for us. Millons of people trust us. We are provide different kind of tools. What are you waiting for...</p>
                
                <button className="btn btn-secondary">Read more...</button>
            </div>
        </section>
    );
};

export default About;