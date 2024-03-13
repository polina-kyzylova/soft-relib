import React from 'react';
import { useState } from 'react';
import './SimpleCalc.css';


export default function SimpleCalc() {
  const [simpleN1, setSimpleN1] = useState('');
  const [simpleN2, setSimpleN2] = useState('');
  const [simpleN12, setSimpleN12] = useState('');
  const [E1, setE1] = useState('');  
  const [E2, setE2] = useState(''); 
  const [P, setP] = useState(''); 
  const [R, setR] = useState(''); 
  const [valid, setValid] = useState(false);


  function validInput(name) {
    document.getElementById(name).style.border = 'red 1.4px solid';
    document.getElementById(name).style.color = 'red';
    document.getElementById('simple-error').style.color = 'red';
  }

  function CalcSimple() {
    if (simpleN1 && simpleN2 && simpleN12) {
        setValid(true);
        document.getElementById('simpleN1').style.border = '#7869FF 1.4px solid';
        document.getElementById('simpleN1').style.color = '#7869FF';
        document.getElementById('simpleN2').style.border = '#7869FF 1.4px solid';
        document.getElementById('simpleN2').style.color = '#7869FF';
        document.getElementById('simpleN12').style.border = '#7869FF 1.4px solid';
        document.getElementById('simpleN12').style.color = '#7869FF';

        let n1 = Number(simpleN1);
        let n2 = Number(simpleN2);
        let n12 = Number(simpleN12);

        if (n12 <= n1 && n12<= n2) {
            let N = n1 * n2 / n12;
            let e1 = n1 / N;
            setE1(e1);

            let e2 = n2 / N;
            setE2(e2);

            let e12 = n12 / N;
            setP((1 - (e1 + e2 - e12)) * 100);

            let r = N - n1 - n2 + n12;
            setR(r);
        }
        else {
            setValid(false);
            validInput('simpleN1');
            validInput('simpleN2');
            validInput('simpleN12');
        }
    }
    else 
    {
        setValid(false);
        if (!simpleN1) validInput('simpleN1');
        if (!simpleN2) validInput('simpleN2');
        if (!simpleN12) validInput('simpleN12');
    }
  }

  function isNumber(e, name, func) {
    const re = /^[0-9\b]+$/;
    setValid(false);

    if (e.target.value === '' || re.test(e.target.value)) {
        func(e.target.value);
    }

    document.getElementById(name).style.border = '#7869FF 1.4px solid';
    document.getElementById(name).style.color = '#7869FF';
  }


  return (
    <div className='simple'>
        <div>
            <div className='simple-item'>
                <label><span>N1</span> - Ошибки в первой группе</label>
                <input id='simpleN1' value={simpleN1} 
                    onChange={e => isNumber(e, 'simpleN1', setSimpleN1)}>
                </input>
            </div>

            <div className='simple-item'>
                <label><span>N2</span> - Ошибки во второй группе</label>
                <input id='simpleN2' value={simpleN2} 
                    onChange={e => isNumber(e, 'simpleN2', setSimpleN2)}>
                </input>
            </div>

            <div className='simple-item'>
                <label><span>N12</span> - Общие ошибки</label>
                <input id='simpleN12' value={simpleN12} 
                    onChange={e => isNumber(e, 'simpleN12', setSimpleN12)}>
                </input>
            </div>

            <button className='simple-btn' onClick={CalcSimple}>Рассчитать</button>

            {valid ? 
                <div className='simple-results'>
                    <p>Расчетное число ошибок в программе равно <span>{R}</span></p>
                    <p>Эффективность первой группы равна <span>{(E1*100).toFixed(2)}%</span></p>
                    <p>Эффективность второй группы равна <span>{(E2*100).toFixed(2)}%</span></p>
                    <p>Надежность ПС составляет <span>{P.toFixed(2)}%</span></p>
                </div> : <h4 id='simple-error'>Ошибка ввода данных</h4>}
        </div>
    </div>
  )
}
