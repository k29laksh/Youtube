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
export const uploadVideo = (data, options) =>
  API.post("/video/uploadvideo", data, options);
export const getVideos = () => API.get("/video/getvideo");
export const likeVideo = (id, Like) => API.patch(`/video/like/${id}`, { Like });
export const viewVideo = (id) => API.patch(`/video/view/${id}`);
