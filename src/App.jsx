import { Fragment } from "react";
import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import Header from "./components/Header";
import Auth from "./components/Auth";

function App() {
  const isUserAuthorized = useSelector((state) => state.auth.auth);

  console.log(isUserAuthorized);

  return (
    <Fragment>
      <Header />
      {isUserAuthorized ? <UserProfile /> : <Auth />}
      {/* <Counter /> */}
    </Fragment>
  );
}

export default App;
