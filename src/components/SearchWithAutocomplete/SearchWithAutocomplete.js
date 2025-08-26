import "./SearchWithAutocomplete.css";

export default function SearchWithAutocomplete() {
  return (
    <div className="autocomplete-container">
      <div className="the-input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Enter GitHub Username"
        />
        <button className="search-btn">Search</button>
      </div>
    </div>
  );
}
