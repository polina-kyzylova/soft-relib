import React from 'react';
import { useState } from 'react';
import './BernulliCalc.css';


export default function BernulliCalc() {
  const [bernN, setBernN] = useState('');
  const [bern_k, setBern_k] = useState('');
  const [bern_n, setBern_n] = useState('');
  const [bernResult, setBernResult] = useState('');  
  const [bernRelib, setBernRelib] = useState(''); 
  const [valid, setValid] = useState(false);


  function validInput(name) {
    document.getElementById(name).style.border = 'red 1.4px solid';
    document.getElementById(name).style.color = 'red';
    document.getElementById('bern-error').style.color = 'red';
  }

  function CalcBern() {
    if (bern_k && bern_n) {
        setValid(true);
        document.getElementById('bernN').style.border = '#7869FF 1.4px solid';
        document.getElementById('bernN').style.color = '#7869FF';
        document.getElementById('bern_k').style.border = '#7869FF 1.4px solid';
        document.getElementById('bern_k').style.color = '#7869FF';
        document.getElementById('bern_n').style.border = '#7869FF 1.4px solid';
        document.getElementById('bern_n').style.color = '#7869FF';

        let k = Number(bern_k);
        let n = Number(bern_n);

        if (n >= k && n*k > 0) {
            let p = Boolean(Number(bernN) >= n) ? k / Number(bernN) : k / n;
            let c = 1;

            for (let i = 0; i < n-k; i++) {
                c = c * (n-i) / (i+1);
            }

            setBernResult(c * Math.pow(p, k) * Math.pow(1-p, n-k) * 100);
            setBernRelib(((1-k/n) * 100).toFixed(2));
        }
        else {
            setValid(false);
            validInput('bern_k');
            validInput('bern_n');
        }
    }
    else 
    {
        setValid(false);
        if (!bern_k) validInput('bern_k');
        if (!bern_n) validInput('bern_n');
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
    <div className='bern'>
        <div>
            <div className='bern-item'>
                <label><span>N</span> - Всего испытаний</label>
                <input id='bernN' value={bernN} 
                    onChange={e => isNumber(e, 'bernN', setBernN)}>
                </input>
            </div>

            <div className='bern-item'>
                <label><span>k</span> - Количество ошибок</label>
                <input id='bern_k' value={bern_k} 
                    onChange={e => isNumber(e, 'bern_k', setBern_k)}>
                </input>
            </div>

            <div className='bern-item'>
                <label><span>n</span> - Количество запусков</label>
                <input id='bern_n' value={bern_n} 
                    onChange={e => isNumber(e, 'bern_n', setBern_n)}>
                </input>
            </div>

            <button className='bern-btn' onClick={CalcBern}>Рассчитать</button>

            {valid ? 
                <div className='bern-results'>
                    <p>Вероятность того, что из {bern_n} запусков {bern_k} приведут <br />к неправильному результату равна <span>{bernResult.toFixed(2)}%</span>
                    <br/>Надежность ПС составляет <span>{bernRelib}%</span></p>
                </div> : <h4 id='bern-error'>Ошибка ввода данных</h4>}
        </div>
    </div>
  )
}
