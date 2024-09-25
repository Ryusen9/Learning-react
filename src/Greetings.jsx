import PropTypes from 'prop-types';
function Greetings(props){

    const welcomeMessage = <div className="welcome-message bg-green-500 py-3 px-10 rounded-md text-xl text-white text-center w-2/5 mx-auto">Welcome {props.userName}</div>

    const loginMessage = <div className="login-message bg-red-500 py-3 px-10 rounded-md text-xl text-white text-center w-2/5 mx-auto">Please Log in</div>

    return (props.isLoggedIn ? welcomeMessage : loginMessage);
}
Greetings.propTypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string
}
Greetings.defaultProps = {
    isLoggedIn: false,
    userName: "Guest"
}

export default Greetings;