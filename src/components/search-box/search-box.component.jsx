import React from "react";
import "./search-box.styles.css";

export const SearchBox = (props) => {
  const { placeholder } = props;
  return (
    <input
      placeholder={placeholder}
      className="search"
      onChange={(e) => props.onSearch(e.target.value)}
    />
  );
};
