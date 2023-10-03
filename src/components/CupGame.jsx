import { useEffect, useState } from 'react';
import cupImg from '../images/cup.png';


const CupGame = () => {


  const [cupPlaceholder, setCupPlaceholder] = useState([1, 22222, 33333333]);

  const shuffle = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    let x = [];
    for (let i = 0; i < 5; i++) {
      console.log('i=', i);
      for (let j = 0; ; j++) {
        console.log('j=', j);
        x[i] = shuffle(cupPlaceholder);
        if (i === 0) break;
        if (x[i].toString() !== x[i - 1].toString()) {
          setTimeout(() => setCupPlaceholder(x[i]), (i + 1) * 1000);
          break;
        }
      }
    }
  }, []);

  console.log('UPDATING');
  return (
    <div className="cup-game">
      <div className="cup-game__wrapper">
        <div className="cup-game__cups-wrapper">
          <div className="cup-game__img-wrapper">
            {/* <img className="cup-game__img" src={cupImg} alt="" /> */}
            {cupPlaceholder[0]}
          </div>
          <div className="cup-game__img-wrapper">
            {/* <img className="cup-game__img" src={cupImg} alt="" /> */}
            {cupPlaceholder[1]}
          </div>
          <div className="cup-game__img-wrapper">
            {/* <img className="cup-game__img" src={cupImg} alt="" /> */}
            {cupPlaceholder[2]}
          </div>
        </div>
      </div>
      <div className="cup-game__btn-wrapper">
        <button className="cup-game__btn" onClick={() => { setCupPlaceholder(shuffle(cupPlaceholder)); alert(cupPlaceholder) }}>Delete</button>
      </div>
    </div>
  );
}

export default CupGame;
