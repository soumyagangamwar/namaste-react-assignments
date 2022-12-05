import './cards.css'

const CardComponent = ({teamData}) => {
    console.log(teamData,'teamData')
  return (
    <>
      <div className="card">
        <div className="card-img">
        <img src={teamData.profilePic} alt={teamData.name} className="imgstyle" />
        </div>
        
        <div className="card-details">
          <h3>
            {teamData.name}
          </h3>
          <h4>{teamData.designation}</h4>
        </div>
      </div>
    </>
  )
}

export default CardComponent
