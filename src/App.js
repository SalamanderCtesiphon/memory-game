import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import aNewHope from "./components/images/aNewHope.jpeg";
import empire from "./components/images/empire.jpeg";
import returnOfTheJedi from "./components/images/returnOfTheJedi.jpeg";
import phantom from "./components/images/phantom.jpeg";
import clones from "./components/images/clones.jpg";
import sith from "./components/images/sith.jpeg";
import forceAwakens from "./components/images/forceAwakens.jpg";
import lastJedi from "./components/images/lastJedi.jpeg";
import rise from "./components/images/rise.jpg";
import rogue from "./components/images/rogue.jpeg";
import solo from "./components/images/solo.jpeg";
import andor from "./components/images/andor.jpeg";
import Footer from './components/Footer';

function App(props) {
  const [game, setGame] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState([
    {
        id: 1,
        click: 0,
        background: <img src={aNewHope} alt="a new hope" />,
    },
    {
        id: 2,
        click:0,
        background: <img src={empire} alt=" the empire strikes back" />,
    },
    {
        id: 3, 
        click: 0,
        background: <img src={returnOfTheJedi} alt=" the return of the jedi" />,
    },
    {
        id: 4,
        click: 0,
        background: <img src={phantom} alt=" the phantom menace" />,
    },
    {
        id: 5,
        click: 0,
        background: <img src={clones} alt="attack of the clones" />,
    },
    {
        id: 6,
        click: 0,
        background: <img src={sith} alt="revenge of the sith" />,
    },
    {
        id: 7,
        click: 0,
        background: <img src={forceAwakens} alt="the force awakens" />,
    }, 
    {
        id: 8,
        click: 0,
        background: <img src={lastJedi} alt="the last jedi" />,
    },
    {
        id: 9,
        click: 0,
        background: <img src={rise} alt="the rise of skywalker" />,
    },
    {
        id: 10,
        click: 0,
        background: <img src={rogue} alt="rogue" />,
    },
    {
        id: 11,
        click: 0,
        background: <img src={solo} alt="solo" />,
    },
    {
        id: 12, 
        click: 0,
        background: <img src={andor} alt="andor" />,
    } 
  ]);

  function shuffleArray(cards) {
    cards.sort(() => Math.random() - 0.25);
  }
  
  function getClick(id) {
    const updatedCards = [...cards].map((card) => {
      if (card.id === id) {
        card.click = card.click + 1;
      }
      setGame(game + 1);
      return card;
    });
    setCards(updatedCards);
  }

  useEffect(() => {
    [...cards].map((card) => {
      if (card.click > 1) {
        game > highScore && setHighScore(game - 1);
        setGame(0);
        [...cards].map((card) => {
          if (card.click > 0) {
            card.click = 0;
          }
          return card;
        })
      } 
      return card
    })
  });



  shuffleArray(cards);

  return (
    <div className="App">
      <Header
      game={game}
      highScore={highScore}
      />
      <h3 className='banner'>Choose one card. If you choose the same card twice the game is over.</h3>
      <div className="game-field">
           {cards.map((card) => {
            return (
                <Card
                key={card.id}
                cards={cards}
                card={card}
                getClick={getClick}
                />
            )
           })}
        </div>
      <Footer />  
    </div>
  );
}

export default App;