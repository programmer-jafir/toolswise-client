import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L51VbBXuLtsDOJhe5hq2lPtKzakzVBRK5q9Rej98mEmTsp5Uq0neBVfO1QtwYiiTu9jSZ5AgNr3820Q7wO6Hxio00Jwb1fPaX');

const Payment = () => {
    const { id } = useParams();
    const url = `https://vast-scrubland-15201.herokuapp.com/order/${id}`;

    const { data: order, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <p className="text-success font-bold">Hello, {order.userName}</p>
                <figure><img src={order.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 class="card-title">Please Pay for {order.toolName}</h2>
                    <div>
                        <p>{order.description}</p>
                        <br></br>
                        <h3 className='text-sm font-bold'>Price: {parseInt(order.perPrice)}/per</h3>
                        <h3 className='text-sm font-bold'>Quantity: {parseInt(order.quantity)}r</h3>
                        <p className='font-semibold text-xl'>Please pay total: ${order.price}</p>
                    </div>
                    <div className="card-actions justify-end mt-auto">
                        {/* <button onClick={() => navigatePurchase(_id)} disabled={parseInt(available)===0}  className="btn btn-primary">Buy Now</button> */}
                    </div>
                </div>
            </div>
            {/* <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {order.userName}</p>
                    <h2 class="card-title">Please Pay for {order.toolName}</h2>
                    <p>Your tool Per: <span className='text-orange-700'>{order.date}</span> at {order.slot}</p>
                    <p>Please pay: ${order.price}</p>
                </div>
            </div> */}
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;