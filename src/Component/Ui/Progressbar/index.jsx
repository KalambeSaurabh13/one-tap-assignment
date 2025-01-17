import React, { useEffect, useRef, useState } from 'react'
import "./progressBar.css"
import Button from '../Button';
import shoping from "./shopping-cart.png"
import arrowDown from "./arrow-down.png"
const Progressbar = () => {
    const segmentsRef = useRef(null)
    const progressPercentageRef = useRef(null)
    const [show,setShow] = useState(false);

    useEffect(() => {
        const progressValue = 60;

        // Loop through segments and fill based on progressValue
        segmentsRef?.current?.childNodes?.forEach((segment, index) => {
            if ((index + 1) * 20 <= progressValue) {
                segment.classList.add('progress-filled');
            }
        });

        // Update percentage bubble
        progressPercentageRef.current.textContent = `${progressValue}%`;
        progressPercentageRef.current.style.left = `calc(${progressValue}% - 20px)`;

    }, [segmentsRef])

    return (
        <div className='d-flex' style={{ placeItems: 'center' }}>
            <div className="progress-container">
                <div className="progress-percentage" ref={progressPercentageRef} id="progressPercentage">0%</div>
                <div className="progress-track" ref={segmentsRef} id="progressTrack">
                    <div className="progress-segment" id="segment1"></div>
                    <div className="progress-segment" id="segment2"></div>
                    <div className="progress-segment" id="segment3"></div>
                    <div className="progress-segment" id="segment4"></div>
                    <div className="progress-segment" id="segment5"></div>
                </div>
            </div>
            <div className='shopComponentParent'>

            <Button variant={'sky'} onClick={()=>setShow(!show)} style={{ width: 'auto', display: 'flex', alignItems: 'center' }} >
                <img src={shoping} alt="shopping cart" /> $00.00 <img src={arrowDown} alt="down Arrow" /> </Button>
                {show &&(
                      <div className='shopComponent'>
                      <div className='pack bgLight d-flex justify-content-between'><div>Business Elite..</div> <div>$.00.00</div></div>
                      <div className='pack bgLight d-flex justify-content-between'> <div>Visa Const</div> <div>$.00.00</div></div>
                      <div className='pack d-flex justify-content-between'> <div>Total</div> <div>$.00.00</div></div>
  
                  </div>
                )}
              
            </div>
        </div>
    )
}

export default Progressbar