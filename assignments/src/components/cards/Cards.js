import './cards.css'

const CardComponent = ({teamData}) => {
   // console.log(teamData,'teamData!!')
    const {avatar_url:img, name, company, followers} = teamData;
  return (
    <>
      <div className="card">
        <div className="card-img">
        <img src={img} alt={name} className="imgstyle" />
        </div>
        
        <div className="card-details">
          <h3>
            {name}
          </h3>
          <b>{company}</b>
          <b>Followers: {followers}</b>
        </div>
      </div>
    </>
  )
}

export default CardComponent
