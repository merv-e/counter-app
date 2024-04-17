import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import {logout} from '../features/authenticationSlice/authSlice'

const Header = () => {
  const isUserLoggedIn = useSelector((state) => state.auth.auth);
  console.log(isUserLoggedIn);

  const dispatch = useDispatch();

  //LOGOUT


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
            {/* onClick functionality can be added to login button as well, but there is no seperate page for that yet. */}
            {isUserLoggedIn ? <button onClick={() => dispatch(logout())}>Logout</button> : <button>Login</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
