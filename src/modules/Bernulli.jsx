import React from 'react';
import BernulliTheory from '../components/BernulliTheory/BernulliTheory';
import BernulliCalc from '../components/BernulliCalc/BernulliCalc';


export default function Bernulli() {
    const wrapper = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
      }
    
      return (
        <div style={wrapper}>
            <BernulliTheory />
            <BernulliCalc />
        </div>
      )
}
