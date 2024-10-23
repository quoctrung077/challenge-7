import PropTypes from "prop-types";
function UserGreeting({ isLoggedIn, username = "Guest", ...props }) {
  const welcomeMessage = (
    <h2 className="welcome-messge">Welcome {props.username}</h2>
  );

  const loginPrompt = <h2 className="login-prompt">Please Login</h2>;
  return isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

export default UserGreeting;
