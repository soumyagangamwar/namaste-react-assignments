import { useState } from "react";

import teamData from "../assets/json/teamMembers.json";

const SearchComponent = ({ setteamMembersdata }) => {
  const [searchText, setSearchText] = useState("");

  const getSearchTeamMembers = (searchText) => {
    console.log(searchText, "EEEE");
    return teamData.filter((teamMem) =>
      teamMem.name.toLowerCase().includes(searchText)
    );
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((searchText === "")) {
      setteamMembersdata(teamData);
      return;
    }
    if (searchText.length >= 3) {
        const filteredTeamMems = getSearchTeamMembers(searchText);
        setteamMembersdata(filteredTeamMems);
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search__bar">
        <div className="search__icon__container">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <input
          type="search"
          placeholder="Search Team Members"
          value={searchText}
          onChange={handleChange}
        />
        {/* <button type="submit" class="search">
           Search
      </button> */}
      </div>

     
      {/* <button>Search</button> */}
    </form>
  );
};

export default SearchComponent;