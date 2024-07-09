const initialState = {
    isCalling: false,
    isAllowed: false,
  };
  
  const voipReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'START_CALL':
        return { ...state, isCalling: true };
      case 'END_CALL':
        return { ...state, isCalling: false };
      case 'SET_TIME_RESTRICTIONS':
        return { ...state, isAllowed: action.payload };
      default:
        return state;
    }
  };
  
  export default voipReducer;
  