import { User } from "./screens/project-list/search-panel";
const apiURL = process.env.REACT_APP_API_URL;

export const localStorageKey = "__auth_provider_key__";

export const getToken = () => window.sessionStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
};

export const login = (data: { username: string; pwd: string }) => {
  fetch(`${apiURL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      let userInfo = await res.json();
      return handleUserResponse(userInfo);
    }
  });
};

export const register = (data: { username: string; pwd: string }) => {
  fetch(`${apiURL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      let userInfo = await res.json();
      return handleUserResponse(userInfo);
    }
  });
};

export const logout = () => window.localStorage.removeItem(localStorageKey);
