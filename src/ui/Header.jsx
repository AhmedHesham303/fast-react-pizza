import { Link } from "react-router-dom";
import SearchOrders from "../features/order/SearchOrders";
function Header() {
  return (
    <header>
      <Link to="/">Fasr React Pizza Co.</Link>
      <SearchOrders />
      <p>Ahmed</p>
    </header>
  );
}

export default Header;
