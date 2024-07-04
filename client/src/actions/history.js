import * as api from '../api';

export const addToHistory = ({ userId, videoId }) => async (dispatch) => {
  try {
    const { data } = await api.addToHistory({ userId, videoId });
    dispatch({ type: 'POST_HISTORY', data });
    dispatch(getAllHistory({ userId }));
  } catch (error) {
    console.error('Error adding to history:', error.response ? error.response.data : error.message);
  }
};

export const getAllHistory = ({ userId }) => async (dispatch) => {
  try {
    const { data } = await api.getAllHistory(userId);
    console.log('history data', data);
    dispatch({ type: 'GET_HISTORY', payload: data });
  } catch (error) {
    console.error('Error fetching history:', error.response ? error.response.data : error.message);
  }
};

export const clearHistory = ({ userId }) => async (dispatch) => {
  try {
    await api.deleteHistory(userId);
    dispatch(getAllHistory({ userId }));
  } catch (error) {
    console.error('Error clearing history:', error.response ? error.response.data : error.message);
  }
};
