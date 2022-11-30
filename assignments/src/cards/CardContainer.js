import teamData from "../assets/json/teamMembers.json";
import CardComponent from "./Cards.js";
import "./cards.css";

const CardContainer = () => {
  return (
    <>
      <div className="card-container">
      {teamData.map((data) => ( 
        <CardComponent teamData={data} key={data.name} />
        ))};
        {/* <CardComponent /> */}
      </div>
    </>
  );
};

export default CardContainer;
