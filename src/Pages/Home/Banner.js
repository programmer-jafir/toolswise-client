import React from 'react';
import banner from '../../assets/img/banner.jpg'

const Banner = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">We are provide tools</h1>
          <p className="py-6 max-w-xl">This is a tools provider website. In this website you can buy your daily uses tools. What are you wating for. Lets buying your tools.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <img src={banner} className="max-w-sm rounded-lg shadow-2xl ml-6" />
      </div>
    </div>
  );
};

export default Banner;