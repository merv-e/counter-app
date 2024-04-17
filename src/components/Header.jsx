import { useSelector } from "react-redux";
import classes from "./Header.module.css";

const Header = () => {
  const isUserLoggedIn = useSelector((state) => state.auth.auth);
  console.log(isUserLoggedIn);

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            {/* onClick functionality can be added to the latter buttons. */}
            {isUserLoggedIn ? <button>Logout</button> : <button>Login</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
