import { Link } from "react-router-dom";

import SerachOrder from "../features/order/SerachOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 p-4 uppercase sm:px-6">
      <Link to="/" className="tracking-[.125em]">
        Fast React Pizza Co.
      </Link>
      <SerachOrder />
      <Username />
    </header>
  );
}

export default Header;
