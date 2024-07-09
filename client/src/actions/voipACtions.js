import * as api from '../api';

export const startCall = (to) => async (dispatch) => {
  try {
    dispatch({ type: 'START_CALL' });
  } catch (error) {
    console.error('Error starting call:', error);
  }
};

export const endCall = () => async (dispatch) => {
  dispatch({ type: 'END_CALL' });
};

export const checkTimeRestrictions = () => async (dispatch) => {
  try {
    const { data } = await api.getCurrentTime();
    const now = new Date(data.currentTime);
    const startHour = 18; // 6 PM
    const endHour = 24;  // 12 AM

    const currentHour = now.getHours();
    const isAllowed = currentHour >= startHour && currentHour < endHour;
    dispatch({ type: 'SET_TIME_RESTRICTIONS', payload: isAllowed });
  } catch (error) {
    console.error('Error checking time restrictions:', error);
  }
};
