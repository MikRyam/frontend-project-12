import {Link, useLocation} from "react-router-dom";
import useAuth from "../hooks";
import {Button} from "react-bootstrap";
import routes from "../routes";

const AuthButton = () => {
  const auth = useAuth();
  const location = useLocation();

  return (
    auth.loggedIn
      ? <Button onClick={auth.logOut}>Log out</Button>
      : <Button as={Link} to={routes.loginPagePath()} state={{ from: location }}>Log in</Button>
  );
};

export default AuthButton;
