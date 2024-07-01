import * as api from "../api";
export const addToHistory = (historyData) => async (dispatch) => {
    try {
      const { data } = await api.addToHistory(historyData);
      dispatch({ type: "POST_HISTORY", data });
      dispatch(getAllHistory());
    } catch (error) {
      console.log(error);
    }
  };
  export const getAllHistory = () => async (dispatch) => {
    try {
      const { data } = await api.getAllHistory();
      console.log("history data ",data)
      dispatch({ type: "GET_HISTORY", payload: data });
    //   return data;
    } catch (error) {
        console.log(error);
    }
  };

  export const clearHistory = (vid) => async (dispatch) => {
    try {
      const { userId} = vid;
      // console.log(vid);
      await api.deleteHistory(userId);
      dispatch(getAllHistory());
    } catch (error) {
      console.log(error);
    }
  };