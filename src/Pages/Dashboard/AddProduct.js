import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const [info, setInfo] = useState({});


    const handleOrder = event => {
        event.preventDefault()
        // console.log(event.target.quantity.value);
        const order = {
            name: event.target.name.value,
            description: event.target.description.value,
            perPrice: event.target.perPrice.value,
            minium: event.target.minium.value,
            available: event.target.available.value,
            img: event.target.img.value,
        }
        console.log(order);

        fetch('http://localhost:5000/tool', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        toast('Your product add is successful')
    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left lg:ml-20">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="text-centel text-2xl font-bold">Add A Product</h2>
                                <form onSubmit={handleOrder}>


                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Tool Name</span>
                                        </label>
                                        <input type="text"
                                            placeholder="Tool Name"
                                            name='name'
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Description</span>
                                        </label>
                                        <input type="text" name='description'
                                        placeholder='description' className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Per Price</span>
                                        </label>
                                        <input type="text" name='perPrice' placeholder="Per Price" className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Minium Quantity</span>
                                        </label>
                                        <input type="number"
                                            placeholder="Your minium Quantity"
                                            name='minium'
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Available Quentity</span>
                                        </label>
                                        <input type="number"
                                            name='available'
                                            placeholder='available quantity'
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Product image url</span>
                                        </label>
                                        <input type="text"
                                            name='img'
                                            placeholder="Your img url"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>

                                    <input />
                                    <input className='btn w-full max-w-xs text-white' type="submit" value="Add Product" />
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default AddProduct;