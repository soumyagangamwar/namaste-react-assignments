import {useState} from 'react';

import teamData from "../../assets/json/teamMembers.json";
import CardComponent from "./Cards.js";
import SearchComponent from "../../shared/Search.js"
import "./cards.css";

const CardContainer = () => {
  const [teamMembersdata, setteamMembersdata] = useState(teamData);
  return (
   <>
    <SearchComponent setteamMembersdata = {setteamMembersdata}/>
    <div className="card-container">
     
     {teamMembersdata.map((data) => ( 
       <CardComponent teamData={data} key={data.name} />
       ))};
       {/* <CardComponent /> */}
     </div>
   </>
     
    
  );
};

export default CardContainer;
