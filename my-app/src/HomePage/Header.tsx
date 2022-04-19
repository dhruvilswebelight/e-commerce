import { useHistory } from "react-router-dom";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Header = () => {
  const history = useHistory();

  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon logo"
      />

      <div className="header__search"></div>
      <div className="header__nav_option">
        <span className="header__nav_option_line1">Hello Guest</span>
        <span className="header__nav_option_line2">Sign In</span>
      </div>

      <div className="header__nav_option">
        <span className="header__nav_option_line1">Returns</span>
        <span className="header__nav_option_line2">Orders</span>
      </div>
      <div className="header__nav_cart">
        {/* <ShoppingCartIcon /> */}
        <span className="header__nav_cart_count"></span>
      </div>

      <button
        type="submit"
        className="logout"
        onClick={() => history.push("/")}
      >
        {" "}
        Logout{" "}
      </button>
    </div>
  );
};
export default Header;
