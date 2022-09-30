import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import profileImg from '../../images/Noman Shakib.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Sidebar = ({learningTimes}) => {
   const [breakTimes, setBreakTimes] = useState(0);
   
   const notify = () => {
        toast.success('You are done!...😋',{
            position: 'top-center'
        })
    }

    const getTime = time => {
        localStorage.setItem('time', time);
        setBreakTimes(time);
    }
    useEffect(() => {
        const storedTime = localStorage.getItem('time');
        setBreakTimes(storedTime);
    },[])



    return (
        <div className='sidebar-cntlr'>
            <div className='sidebar-innr'>
                <div className='profile-cntlr'>
                    <div className='profile-img'>
                        <img className='' src={profileImg} alt="" />
                    </div>
                    <div className='p-rgt'>
                        <h5 className='n-title'>Noman Shakib H.</h5>
                        <p>
                            Dighinala, Khagrachari.
                        </p>
                    </div>
                </div>
                <div className='learning-secret'>
                    <div className='persentage'>
                        <div>
                            <h6>Course:</h6>
                            <p>Python</p>
                        </div>
                        <div>
                            <h6>Duration:</h6>
                            <p>50h</p>
                        </div>
                        <div>
                            <h6>Status:</h6>
                            <p>Continue...</p>
                        </div>
                    </div>
                </div>
                <div className='break-cntlr'>
                    <h4>Add A Break:</h4>
                    <div className='add-break'>
                        <button onClick={() => getTime(10)}> 10m</button>
                        <button onClick={() => getTime(20)}> 20m</button>
                        <button onClick={() => getTime(30)}> 30m</button>
                        <button onClick={() => getTime(40)}> 40m</button>
                    </div>
                </div>
                <div className='exercise-details'>
                    <h4>Learning Details:</h4>
                    <div className='exercise-inr'>
                        <div className='ex-row'>
                            <p>Learning time: <span>{learningTimes} miniutes</span></p>
                        </div>
                        <div className='ex-row'>
                            <p>Break time: <span><span id='learning-time'> {breakTimes} </span>miniutes</span></p>
                        </div>
                    </div>
                </div>
                <button className='complete-btn btn btn-info w-100 mt-5' onClick={notify}>Activity Completed!</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Sidebar;