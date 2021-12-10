import React,  { useEffect } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting } from "../redux/greetingReducer"

const Greeting = () => {
  const dispatch = useDispatch();
  const message  = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchGreeting());
    console.log(message)
  }, []);

  return <h2>{message}</h2>;
};



// class Greeting extends React.Component {
//   render () {
//     return (
//       <React.Fragment>
//         Greet: John
//       </React.Fragment>
//     );
//   }
// }

// Greeting.propTypes = {
//   greet: PropTypes.string
// };
export default Greeting
