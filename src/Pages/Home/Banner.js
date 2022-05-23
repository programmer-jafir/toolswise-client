import React from 'react';
import banner from '../../assets/img/banner.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row">
    <div>
      <h1 class="text-5xl font-bold">We are provide tools</h1>
      <p class="py-6 max-w-xl">This is a tools provider website. In this website you can buy your daily uses tools. What are you wating for. Lets buying your tools.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
    <img src={banner} class="max-w-sm rounded-lg shadow-2xl ml-6" />
  </div>
</div>
    );
};

export default Banner;