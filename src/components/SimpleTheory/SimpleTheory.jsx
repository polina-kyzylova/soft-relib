import React from 'react';
import './SimpleTheory.css';
import simple1 from './simple1.png';
import simple2 from './simple2.png';


export default function SimpleTheory() {
    return (
        <div className='simple-theory'>
          <h1>Простая интуитивная модель</h1>
    
          <div className='simple-theory-block'>
              <p>Предполагается проведение тестирования двумя независимыми группами разработчиков</p>
              <p>Пусть первая группа обнаружила N1 ошибок, вторая – N2, N12 – это ошибки, обнаруженные обеими группами</p>
              <p>Если N – число ошибок в программе, то можно определить эффективность тестирования каждой группой:</p>
              <img src={simple1} alt='' />

              <p>Считая возможность обнаружения ошибок одинаковой для каждой группы, 
                можно оценить надежность программы:</p>
                <img src={simple2} alt='' />
          </div>
        </div>
    )
}
