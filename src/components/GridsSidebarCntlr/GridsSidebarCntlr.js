import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header'
import './GridsSidebarCntlr.css'
import GridItem from '../GridItem/GridItem';

const GridsSidebarCntlr = () => {
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        fetch('do-code.json')
        .then(res => res.json())
        .then(data => setLanguages(data))
    }, []);

      const [learningTimes, setLearningTimes] = useState(0);
    const getTime = (props) => {
        const updataTime = learningTimes + props
        setLearningTimes(updataTime);
    }
    
    return (
         <>
                <div className='cntlr'>
                <Header></Header>
                <div className='grids-sidebar-cntlr d-flex'>
                        <div className='grids-cntlr d-grid'>
                        {
                            languages.map(language => <GridItem 
                                key={language.id}
                                language ={language}
                                getTime = {getTime}
                            ></GridItem>)
                        }
                        </div>
                        
                    </div>
                </div>
            </>
    );
};

export default GridsSidebarCntlr;