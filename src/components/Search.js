import React from "react";

const Search = ({ handleChange }) => {
  return (
    <>
      <header className="cont">
        <h1>😎 EmojiSearch 😎 </h1>

        <input
          type="text"
          placeholder="What emoji are you looking for ? "
          onChange={handleChange}
        />
        <br />
      </header>
    </>
  );
};

export default Search;
