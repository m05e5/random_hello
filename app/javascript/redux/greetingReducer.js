const GET_SALUTE = 'random_hello/src/redux/greetingReducer/GET_SALUTE';

const initialState = ""

export const fetchGreeting = () => async (dispatch) => {
  const response = await fetch('http://localhost:3000/api/v1/greetings/random');
  const text = await response.json();

  dispatch({
    type: GET_SALUTE,
    payload: text,
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SALUTE: {
      return  action.payload.salut;
    }
    default: {
      return state;
    }
  }
};

export default reducer;