import React, { Fragment, useState } from "react";
import { TextField } from "react95";

const SearchBox = () => {
  const [value, setValue] = useState("");

  return (
    <Fragment>
      <TextField
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Search Pokemon..."
        className="search-box"
      />
    </Fragment>
  );
};

export default SearchBox;
