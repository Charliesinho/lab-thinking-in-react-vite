import React, { useState } from "react";

function SearchBar({ setSearchTerm, setCheckState, checkState }) {
  const [currentSearch, setCurrentSearch] = useState("");

  const onChangeUpdate = (event) => {
    setCurrentSearch(event.target.value);
    setSearchTerm(event.target.value);
  };
  const onChangeUpdateCheck = (event) => {
    setCheckState(event.target.checked);
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        Search
        <input type="text" value={currentSearch} onChange={onChangeUpdate} />
        <input
          type="checkbox"
          check={checkState}
          onChange={onChangeUpdateCheck}
        />
      </label>
    </form>
  );
}

export default SearchBar;
