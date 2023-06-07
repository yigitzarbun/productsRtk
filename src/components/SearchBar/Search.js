import React from "react";
import styles from "./SearchBar.module.css";

function Search(props) {
  const { search, setSearch, handleSearch } = props;
  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="Search products by name"
        onChange={handleSearch}
        className={styles.searchBar}
      />
      <button
        type="button"
        onClick={() => setSearch("")}
        className={styles.clearButton}
        disabled={search === ""}
      >
        Clear
      </button>
    </div>
  );
}

export default Search;
