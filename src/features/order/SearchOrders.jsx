import { useState } from "react";
import { useNavigate } from "react-router";
function SearchOrders() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handelSumbit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={handelSumbit}>
      <input
        placeholder="search order#"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </form>
  );
}

export default SearchOrders;
