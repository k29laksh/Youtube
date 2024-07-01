import axios from "axios";
const API = axios.create({ baseURL: `http://localhost:5500/` });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }

  return req;
});
export const login = (authData) => API.post("/user/login", authData);
export const updateChannelData = (id, updateData) =>
  API.patch(`/user/update/${id}`, updateData);
export const fetchAllChannel = () => API.get("/user/getAllChannels");
export const uploadVideo = (fileData, fileOptions) =>
  API.post("/video/uploadvideo", fileData, fileOptions);

// likeVideo

export const getVideos = () => API.get("/video/getvideos");
export const likeVideo = (id, Like) => API.patch(`/video/like/${id}`, { Like });
export const viewVideo = (id) => API.patch(`/video/view/${id}`);

// Liked video page

export const addTolikedVideo=(likedVideoData)=>API.post('/video/likedVideo',likedVideoData)
export const getlikedVideo= () => API.get('/video/getlikedVideo');
export const deletelikedVideo = (videoId, Viewer) => API.delete(`/video/deletelikedVideo/${videoId}/${Viewer}`)

// wawtchHistory

export const addToHistory = (historyData) => API.post(`/video/history`, historyData)
export const getAllHistory = () => API.get('/video/getHistory');
export const deleteHistory = (userId) => API.delete(`/video/clearhistory/${userId}`)

// watchLater
export const addTowatchLater = (watchLaterData) => API.post(`/video/watchLater`, watchLaterData)
export const getwatchLater= () => API.get('/video/getwatchLater');
export const deletewatchLater = (videoId, Viewer) => API.delete(`/video/deletewatchLater/${videoId}/${Viewer}`)

// comments
export const postComment = (CommentData) => API.post(`/comments/post`, CommentData)
export const deleteComment = (id) => API.delete(`/comments/delete/${id}`)
export const editComment = (id, commentBody) => API.patch(`/comments/edit/${id}`, { commentBody })
export const getAllcomments = () => API.get('/comments/get');