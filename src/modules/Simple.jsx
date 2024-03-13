import React from 'react';
import SimpleTheory from '../components/SimpleTheory/SimpleTheory';
import SimpleCalc from '../components/SimpleCalc/SimpleCalc';


export default function Simple() {
    const wrapper = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
      }
    
      return (
        <div style={wrapper}>
          <SimpleTheory />
          <SimpleCalc />
        </div>
      )
}
