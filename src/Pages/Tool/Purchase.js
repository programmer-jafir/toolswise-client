import { isEditable } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {
    const { id, } = useParams();
    const [info, setInfo] = useState({});
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        const url = `https://vast-scrubland-15201.herokuapp.com/tool/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInfo(data));
    }, []);

    const { name, available, img, description, perPrice, minium, _id } = info;

    const handleOrder = event => {
        event.preventDefault()
        // console.log(event.target.quantity.value);
        const order = {
            toolId: _id,
            toolName: name,
            userName: user.displayName,
            userEmail: user.email,
            quantity: event.target.quantity.value,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }
        console.log(order);

        fetch('https://vast-scrubland-15201.herokuapp.com/order', {
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
        toast('Your order is successful')
    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left lg:ml-20">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="text-centel text-2xl font-bold">Purchase Form</h2>
                                <form onSubmit={handleOrder}>


                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Tool Name</span>
                                        </label>
                                        <input type="text"
                                            placeholder="Tool Name"
                                            value={name}
                                            readOnly
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Phone</span>
                                        </label>
                                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Quantity</span>
                                        </label>
                                        <input type="number"
                                            placeholder="Your Quantity"
                                            name='quantity'
                                            defaultValue={parseInt(minium)}
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Total Cost</span>
                                        </label>
                                        <input type="number"

                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>
                                        <input type="text"
                                            name='address'
                                            placeholder="Your Address"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>

                                    <input />
                                    <input className='btn w-full max-w-xs text-white' type="submit" value="Order" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <figure><img src={img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
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
                            <div className="card-actions justify-end mt-auto">
                                {/* <button onClick={() => navigatePurchase(_id)} disabled={parseInt(available)===0}  className="btn btn-primary">Buy Now</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;