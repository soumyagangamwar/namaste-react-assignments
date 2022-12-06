import {useEffect, useState} from 'react';
import CardComponent from "./Cards.js";
import NoData from "../../shared/noData.js"
import SearchComponent from "../../shared/Search.js";
import fetchservice from '../../services/fetch.service.js';
import "./cards.css";

const gitUserNames = fetchservice();

const CardContainer = () => {
  //console.log(gitUserNames, 'gitUserNames')
  const [filteredTeamMembers, setfilteredTeamMembers] = useState([]);
  const [teamMembersdata, setteamMembersdata] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  useEffect(()=> {
    gitUserNames.then(res=> {
      const data =[].concat(...res);
     // console.log(res, '*****', data)
      setteamMembersdata(data);
      setfilteredTeamMembers(data)
    })
  }, [])
   
  return (
   <>
    <SearchComponent setfilteredTeamMembers = {setfilteredTeamMembers}
                     teamMembersdata = {teamMembersdata} 
                     searchText = {searchText}
                     setSearchText={setSearchText}/>
    <div className="card-container">
      {
        filteredTeamMembers == ""  ? (
         <NoData/>
         ): (
          filteredTeamMembers.map((data) => ( 
            <CardComponent teamData={data} key={data.id} />
            ))
         )
      }
     </div>
   </>
     
    
  );
};

export default CardContainer;
