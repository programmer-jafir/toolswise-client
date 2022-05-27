import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id, } = useParams();
    const [info, setInfo] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/tool/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInfo(data));
    }, []);

    const { name, available, img, description, perPrice, minium, _id } = info;
    return (
        // <div>
        //     <h1>Purchase: {name}</h1>
        // </div>
        //         <div class="card w-96 bg-base-100 shadow-xl">
        //   <figure><img src={img}  alt="Shoes" /></figure>
        //   <div class="card-body">
        //     <h2 class="card-title">{name}</h2>
        //     <div>
        //     <p>{description}</p>
        //     <br></br>
        //     <h3 className='text-xl font-bold'>Price: {parseInt(perPrice)}/per</h3>
        //     <h4 className='font-semibold'>Minum order: {parseInt(minium)}</h4>
        //     <h5 className=' font-semibold'>Available: {
        //     parseInt(available) > 0
        //     ? <span>{parseInt(available)}</span>
        //     : <span className=' text-red-500'>Not Available Now</span>
        //     }</h5>
        //     </div>
        //     <div class="card-actions justify-end mt-auto">
        //       {/* <button onClick={() => navigatePurchase(_id)} disabled={parseInt(available)===0}  class="btn btn-primary">Buy Now</button> */}
        //     </div>
        //   </div>
        // </div>
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Login now!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <figure><img src={img} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">{name}</h2>
                            <div>
                                <p>{description}</p>
                                <br></br>
                                <h3 className='text-xl font-bold'>Price: {parseInt(perPrice)}/per</h3>
                                <h4 className='font-semibold'>Minum order: {parseInt(minium)}</h4>
                                <h5 className=' font-semibold'>Available: {
                                    parseInt(available) > 0
                                        ? <span>{parseInt(available)}</span>
                                        : <span className=' text-red-500'>Not Available Now</span>
                                }</h5>
                            </div>
                            <div class="card-actions justify-end mt-auto">
                                {/* <button onClick={() => navigatePurchase(_id)} disabled={parseInt(available)===0}  class="btn btn-primary">Buy Now</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;