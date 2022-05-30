import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tool from '../Tool/Tool';
import Tools from '../Tool/Tools';
import Banner from './Banner';
import Contact from './Contact';

const Home = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('https://vast-scrubland-15201.herokuapp.com/tool')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    return (
        <div>
            <Banner></Banner>
            <h4 className='text-3xl font-bold mb-3 text-secondary text-center'>Tools</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                {
                    tools.slice(0, 6).map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    />)
                }
            </div>
            <div className='grid justify-center mt-9 mb-12'>
                <Link to="tools" className="btn btn-secondary">See all Tools</Link>
            </div>
            <Contact></Contact>
        </div>
    );
};

export default Home;