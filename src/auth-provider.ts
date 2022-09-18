import { User } from "./screens/project-list/search-panel";
const apiURL = process.env.REACT_APP_API_URL;

export const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.sessionStorage.getItem(localStorageKey);

export const handleUserResponse = async ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = async (data: { username: string; pwd: string }) => {
  fetch(`${apiURL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (respoonse) => {
    if (respoonse.ok) {
      return handleUserResponse(await respoonse.json());
    } else {
      return Promise.reject(data);
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
    } else {
      return Promise.reject({});
    }
  });
};

export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);
