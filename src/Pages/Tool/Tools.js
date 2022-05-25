import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect( () =>{
        fetch('tools.json')
        .then(res => res.json())
        .then(data => setTools(data))
    }, [])
    return (
        <div className='mt-12 mb-10'>
            <h4 className='text-3xl font-bold mb-6 text-secondary text-center'>Tools</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                {
                    tools.map(tool => <Tool
                    key={tool.id}
                    tool={tool}
                    />)
                }
            </div>
        </div>
    );
};

export default Tools;