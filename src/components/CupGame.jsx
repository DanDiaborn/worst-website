import cupImg from '../images/cup.png';


const CupGame = () => {
  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  }
  return (
    <div className="cup-game">
      <div className="cup-game__wrapper">
        <div className="cup-game__cups-wrapper">
          <div className="cup-game__img-wrapper">
            <img className="cup-game__img" src={cupImg} alt="" />
          </div>
          <div className="cup-game__img-wrapper">
            <img className="cup-game__img" src={cupImg} alt="" />
          </div>
          <div className="cup-game__img-wrapper">
            <img className="cup-game__img" src={cupImg} alt="" />
          </div>
        </div>
      </div>
      <div className="cup-game__btn-wrapper">
        <button className="cup-game__btn">Delete</button>
      </div>
    </div>
  );
}

export default CupGame;
