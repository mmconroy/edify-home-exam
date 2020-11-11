import "./Search.css";

function Search({ getQuery, text, setText }) {
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <div className="search__container">
      <form className="field">
        <input
          type="text"
          className="input-field"
          placeholder="Search Directory"
          value={text}
          onChange={(event) => onChange(event.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
}

export default Search;
