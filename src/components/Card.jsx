const Card = ({ card, getClick }) => {
  return (
      <div 
          className="card"
          onClick={() => getClick(card.id)}
          >{card.background}
      </div>
  )
}

export default Card