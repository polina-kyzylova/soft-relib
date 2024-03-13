import React from 'react';
import './Menu.css';
import logo from './logo.png'


export default function Menu({setModel}) {
  function handleClick(e) {
    setModel(e.target.value);
    
    if (e.target.value === 'M')
    {
      document.getElementById('M').classList.add('focused');
      document.getElementById('B').classList.remove('focused');
      document.getElementById('P').classList.remove('focused');
    }
    if (e.target.value === 'B') {
      document.getElementById('B').classList.add('focused');
      document.getElementById('M').classList.remove('focused');
      document.getElementById('P').classList.remove('focused');
    }
    if (e.target.value === 'P') {
      document.getElementById('P').classList.add('focused');
      document.getElementById('M').classList.remove('focused');
      document.getElementById('B').classList.remove('focused');
    }
  }

  return (
    <div className='container'>
        <div className='title'>
            <img className='logo' alt='' src={logo}></img>
            <p>Показатели надежности ПС</p>
        </div>

        <div className='items'>
            <button id='M' className='focused' value='M' onClick={handleClick}>Модель Миллса</button>
            <button id='B' value='B' onClick={handleClick}>Модель Бернулли</button>
            <button id='P' value='P' onClick={handleClick}>Простая интуитивная модель</button>
        </div>
    </div>
  )
}
