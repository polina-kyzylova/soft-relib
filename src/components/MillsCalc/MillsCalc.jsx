import React, { useState } from 'react';
import './MillsCalc.css';


export default function MillsCalc() {
  const [valueN, setValueN] = useState('');
  const [valueV, setValueV] = useState('');
  const [value_n, setValue_n] = useState('');
  const [value_v, setValue_v] = useState('');
  const [millsResult, setMillsResult] = useState('');  
  const [millsErrors, setMillsErrors] = useState(''); 
  const [valid, setValid] = useState(false);


  function fctr(x) {
    if (x === 1 || x === 0) return(1);
    else return x * fctr(x - 1);
  }

  function validInput(name) {
    document.getElementById(name).style.border = 'red 1.4px solid';
    document.getElementById(name).style.color = 'red';
    document.getElementById('error').style.color = 'red';
  }

  function CalcMills() {
    if (valueV && valueN && value_n && value_v) {
        let nn = Number(valueN);
        let vv = Number(valueV);
        let n = Number(value_n);
        let v = Number(value_v);
        let result = 1;

        if (v <= vv) {
            setValid(true);
            document.getElementById('valueN').style.border = '#7869FF 1.4px solid';
            document.getElementById('valueN').style.color = '#7869FF';
            document.getElementById('valueV').style.border = '#7869FF 1.4px solid';
            document.getElementById('valueV').style.color = '#7869FF';
            document.getElementById('value_n').style.border = '#7869FF 1.4px solid';
            document.getElementById('value_n').style.color = '#7869FF';
            document.getElementById('value_v').style.border = '#7869FF 1.4px solid';
            document.getElementById('value_v').style.color = '#7869FF';

            setMillsErrors(String((vv * n / v).toFixed(2)));

            if (n <= nn) {
                if (v < vv) {
                    result = (fctr(vv) * fctr(nn+v) * fctr(vv+1-v)) /
                        (fctr(v-1) * fctr(vv-v+1) * fctr(vv+nn+1)) * 100;
                    setMillsResult(String(result.toFixed(2)));
                }
                else {
                    result = vv / (vv + nn + 1) * 100;
                    setMillsResult(String(result.toFixed(2)));
                }
            }
            else {
                setMillsResult('100');
            }
        }
        else {
            setValid(false);
            validInput('valueV');
            validInput('value_v');
        }
    }
    else 
    {
        setValid(false);
        if (!valueV) validInput('valueV');
        if (!valueN) validInput('valueN');
        if (!value_v) validInput('value_v');
        if (!value_n) validInput('value_n');
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
    <div className='mills'>
        <div>
            <div className='mills-item'>
                <label><span>N</span> - Первоначальное число ошибок</label>
                <input id='valueN' value={valueN} onChange={e => isNumber(e, 'valueN', setValueN)}></input>
            </div>

            <div className='mills-item'>
                <label><span>V</span> - Число внесенных ошибок</label>
                <input id='valueV' value={valueV} 
                    onChange={e => isNumber(e, 'valueV', setValueV)}>
                </input>
            </div>

            <div className='mills-item'>
                <label><span>n</span> - Число обнаруженных ошибок из первоначальных</label>
                <input id='value_n' value={value_n} 
                    onChange={e => isNumber(e, 'value_n', setValue_n)}>
                </input>
            </div>

            <div className='mills-item'>
                <label><span>v</span> - Число обнаруженных ошибок из внесенных</label>
                <input id='value_v' value={value_v} 
                    onChange={e => isNumber(e, 'value_v', setValue_v)}>
                </input>
            </div>

            <button className='mills-btn' onClick={CalcMills}>Рассчитать</button>

            {valid ? 
                <div className='mills-results'>
                    <p>Степень надежности ПС равна <span>{millsResult}%</span>
                    <br/>Расчетное число ошибок в программе равно <span>{millsErrors}</span></p>
                </div> : <h4 id='error'>Ошибка ввода данных</h4>}
        </div>
    </div>
  )
}
