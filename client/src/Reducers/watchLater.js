const watchLaterReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case "POST_WATCHLATERVIDEO":
            return { ...state, data: action?.data }
        case 'FETCH_ALL_WATCHLATER_VIDEOS':
            return {...state,data:action.payload}
        default:
            return state;
    } 
}

export default watchLaterReducer;