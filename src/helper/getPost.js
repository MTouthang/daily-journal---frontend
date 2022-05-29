import { API } from "../backend";

export const getPost = () => {
  return fetch(`${API}/posts`, {
    method: "GET",
  });
};
