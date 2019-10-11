export const TOKEN_KEY = "@instadev-token";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) != null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
export const userId = () => {
  const base64Url = getToken().split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');

  return JSON.parse(window.atob(base64)).id;
}