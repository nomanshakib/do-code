import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header'
import './GridsSidebarCntlr.css'
import GridItem from '../GridItem/GridItem';
import Sidebar from '../Sidebar/Sidebar';
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';


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
                        
                    <Sidebar learningTimes={learningTimes}></Sidebar>

                    </div>
            </div>
            <QuestionAnswer></QuestionAnswer>
            </>
    );
};

export default GridsSidebarCntlr;