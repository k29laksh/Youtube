import * as api from "../api";
export const addTowatchLater = (watchLaterData) => async (dispatch) => {
  try {
    const { data } = await api.addTowatchLater(watchLaterData);
    dispatch({ type: "POST_WATCHLATERVIDEO", payload: data });
    dispatch(getwatchLater());
  } catch (error) {
    console.log(error);
  }
};

export const getwatchLater = () => async (dispatch) => {
  try {
    const { data } = await api.getwatchLater();
    // console.log(data);
    dispatch({ type: "FETCH_ALL_WATCHLATER_VIDEOS", payload: data });
    return data;
  } catch (error) {
    throw error;
  }
};

export const deletewatchLater = (vid) => async (dispatch) => {
  try {
    const { videoId, Viewer } = vid;
    // console.log(vid);
    await api.deletewatchLater(videoId, Viewer);
    dispatch(getwatchLater());
  } catch (error) {
    console.log(error);
  }
};