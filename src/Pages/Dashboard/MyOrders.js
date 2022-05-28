import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect( () =>{
        if(user){
            fetch(`http://localhost:5000/order?userEmail=${user.email}`)
        .then(res=> res.json())
        .then(data => setOrders(data))
    }}, [user]
        )
    return (
        <div>
            <h2>My Appointments: {orders.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Tool Name</th>
        <th>Quantity</th>
        <th>Address</th>
        <th>Phone Number</th>
      </tr>
    </thead>
    <tbody>
        {
            orders.map((a, index) => <tr>
                <th>{index + 1}</th>
                <td>{a.toolName}</td>
                <td>{a.quantity}</td>
                <td>{a.address}</td>
                <td>{a.phone}</td>
              </tr>)
        }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;