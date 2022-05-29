import React, { useEffect, useState } from 'react';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [manageProducts, setManageProducts] = useState([]);

    useEffect(() => {
        fetch('https://vast-scrubland-15201.herokuapp.com/tool')
            .then(res => res.json())
            .then(data => setManageProducts(data))
    }, [manageProducts])
    return (
        <div className='mt-12 mb-10'>
            <h4 className='text-3xl font-bold mb-6 text-secondary text-center'>Tools</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                {
                    manageProducts.map(manageProduct => <ManageProduct
                        key={manageProduct.id}
                        manageProduct={manageProduct}
                    />)
                }
            </div>
        </div>
    );
};

export default ManageProducts;