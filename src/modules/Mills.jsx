import React from 'react';
import MillsCalc from '../components/MillsCalc/MillsCalc';
import MillsTheory from '../components/MillsTheory/MillsTheory';


export default function Mills() {
  const wrapper = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  }

  return (
    <div style={wrapper}>
        <MillsTheory />
        <MillsCalc />
    </div>
  )
}
