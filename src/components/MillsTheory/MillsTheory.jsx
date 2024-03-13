import React from 'react';
import './MillsTheory.css';
import mills1 from './mills1.png';
import mills2 from './mills2.png';
import mills3 from './mills3.png';


export default function MillsTheory() {
  return (
    <div className='mills-theory'>
        <h1>Модель Миллса</h1>

        <div className='mills-theory-block'>
            <p>Пусть N – первоначальное число ошибок в программе, V – число внесенных ошибок. 
                При тестировании было найдено n истинных и v внесенных ошибок, тогда справедливо выражение:</p>
            <img src={mills1} alt=''></img>

            <p>Тестирование выполняется до тех пор, пока не будут найдены все внесенные ошибки. 
                Оценка доверия к модели и определения правильности найденного N определяется с помощью критерия:</p>
            <img src={mills2} alt=''></img>
            <p>где k - количество найденных ошибок из тех, что были допущены при программировании.
                <br/>Для случая, когда были найдены не все искусственно внесенные ошибки справедливо выражение:</p>

            <img src={mills3} alt=''></img>
        </div>
    </div>
  )
}
