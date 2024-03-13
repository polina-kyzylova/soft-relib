import React from 'react';
import './BernulliTheory.css';
import bernulli1 from './bernulli1.png';
import bernulli2 from './bernulli2.png';


export default function BernulliTheory() {
  return (
    <div className='bern-theory'>
    <h1>Модель Бернулли</h1>

    <div className='bern-theory-block'>
        <p>Каждый запуск программы имеет два исхода: правильный и неправильный (с вероятностью 1-p и p)<br />
        Вероятность того, что из n запусков k приведут к неправильному результату выражается формулой:</p>
        <img src={bernulli1} alt=''></img>

        <p>Вероятность p неизвестна, но по результатам запусков известны n и k.
            Величина B(p) достигает максимума при p = k/n. В качестве оценки надежности программы принимается величина:</p>
        <img src={bernulli2} alt=''></img>
    </div>
</div>
  )
}
