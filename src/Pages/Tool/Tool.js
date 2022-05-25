import React from 'react';

const Tool = ({tool}) => {
    const {name, available, img, description, perPrice, minium} = tool;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img}  alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <div>
    <p>{description}</p>
    <br></br>
    <h3 className='text-xl font-bold'>Price: {perPrice}/per</h3>
    <h4 className='font-semibold'>Minum order: {minium}</h4>
    <h5 className=' font-semibold'>Available: {available}</h5>
    </div>
    <div class="card-actions justify-end mt-auto">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Tool;