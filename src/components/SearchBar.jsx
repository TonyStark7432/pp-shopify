import React, { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");

  function handleChange(event) {
    setQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Вы искали: ${query}`);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Поиск"
        value={query}
        onChange={handleChange}
        style={{
          padding: "8px 16px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginRight: "10px"
        }}
      />
      <button type="submit" style={{
        padding: "8px 14px",
        borderRadius: "8px",
        border: "none",
        background: "#ceb7b2",
        cursor: "pointer"
      }}>
        Найти
      </button>
    </form>
  );
}

export default SearchBar;
